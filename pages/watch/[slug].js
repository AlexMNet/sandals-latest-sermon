import React from 'react'
import Head from 'next/head'
import Main from '../../components/slug/Main'

export default function LatestSermon({ data, url }) {
  return (
    <>
      <Head>
        <title>{data.title} | Sandals Church</title>
      </Head>
      <Main data={data} url={url} />
    </>
  )
}

//API Call with url information from the req body
export async function getServerSideProps(context) {
  const res = await fetch('https://sandalschurch.com/api/latest_sermon')
  const data = await res.json()
  const { req } = context
  let url = req.headers.referer

  return { props: { data, url } }
}
