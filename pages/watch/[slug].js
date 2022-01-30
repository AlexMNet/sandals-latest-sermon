import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
const ReactHlsPlayer = dynamic(() => import('react-hls-player'), { ssr: false })
import { slugify, parseDate } from '../../functions/functions'
import {
  FacebookShareButton,
  FacebookMessengerIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share'

export default function LatestSermon({ data, url }) {
  const fullUrl = `${url}watch/${slugify(data.title)}`
  const date = parseDate(data.date)

  return (
    <>
      <Head>
        <title>{data.title} | Sandals Church</title>
      </Head>
      <div className="container container mx-auto mt-10 max-w-screen-lg p-3">
        <div>
          <ReactHlsPlayer
            src="https://player.vimeo.com/external/671362241.m3u8?s=a66e3ebecafca344630a146bc5131f1b776b49e0"
            autoPlay={false}
            controls={true}
            width="100%"
            height="auto"
            poster={data.image_hd}
          />
        </div>
        <div className="mt-5 space-y-3">
          <div className="flex justify-between">
            <small className="text-gray-400">{date}</small>
            <div className="space-x-2">
              <FacebookShareButton url={fullUrl}>
                <FacebookMessengerIcon size={30} round />
              </FacebookShareButton>
              <TwitterShareButton url={fullUrl}>
                <TwitterIcon size={30} round />
              </TwitterShareButton>
            </div>
          </div>
          <h1 className="text-3xl">
            {data.title}{' '}
            <span className="align-middle text-sm text-gray-500">
              {data.length} min
            </span>
          </h1>

          <p className="text-gray-700">{data.desc}</p>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch('https://sandalschurch.com/api/latest_sermon')
  const data = await res.json()
  const { req } = context
  let url = req.headers.referer

  return { props: { data, url } }
}
