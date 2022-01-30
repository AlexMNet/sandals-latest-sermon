import Head from 'next/head'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Link from 'next/link'
import React from 'react'
import { FaPlayCircle } from 'react-icons/fa'

import { useRouter } from 'next/router'

export default function Home({ data }) {
  const router = useRouter()

  const slugify = (title) => {
    return title.split(' ').join('-')
  }

  const path = `/watch/${slugify(data.title)}/`
  console.log(path)

  return (
    <div>
      <Head>
        <title>Sandals Church | Latest Sermon</title>
      </Head>

      <Header />
      <div className="container mx-auto mt-5 max-w-[67rem] p-3">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
          <div className="">
            <h1 className="mb-4 text-3xl">Latest Sermon</h1>
            <div
              className="relative cursor-pointer"
              onClick={() =>
                router.push({
                  pathname: path,
                })
              }
            >
              <img
                src={data.image_hd}
                alt=""
                width="660"
                className="relative"
              />

              <FaPlayCircle
                className="absolute left-1/2 top-1/2 text-8xl text-white opacity-50 hover:opacity-75"
                style={{ transform: 'translate(-50%, -50%)' }}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="mb-4 text-3xl">Join Us Online</h1>
            <div className="inline-block bg-gray-200 p-4">
              <h3 className="font-bold text-gray-600">
                Online Weekend Service Times
              </h3>
              <ul className="space-y-3">
                <li>
                  <p className="text-gray-700">
                    Saturday, January 29, 2022, 5:00 PM (PST)
                  </p>
                </li>
                <li>
                  <p className="text-gray-700">
                    Saturday, January 29, 2022, 5:00 PM (PST)
                  </p>
                </li>
                <li>
                  <p className="text-gray-700">
                    Saturday, January 29, 2022, 5:00 PM (PST)
                  </p>
                </li>
                <li>
                  <p className="text-gray-700">
                    Saturday, January 29, 2022, 5:00 PM (PST)
                  </p>
                </li>
              </ul>
              <div className="mt-3 flex flex-col items-start space-y-2">
                <button className=" rounded-md bg-red-600 px-5 py-2 text-white hover:bg-red-500">
                  Join Us Online
                </button>
                <button className="rounded-md bg-red-600 px-5 py-2 text-white hover:bg-red-500">
                  Find A Campus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://sandalschurch.com/api/latest_sermon')
  const data = await res.json()
  return { props: { data } }
}
