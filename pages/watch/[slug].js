import React from 'react'
import dynamic from 'next/dynamic'
const ReactHlsPlayer = dynamic(() => import('react-hls-player'), { ssr: false })

export default function LatestSermon({ data }) {
  return (
    <div className="container container mx-auto mt-10 max-w-screen-lg">
      <div className="">
        <ReactHlsPlayer
          src="https://player.vimeo.com/external/671362241.m3u8?s=a66e3ebecafca344630a146bc5131f1b776b49e0"
          autoPlay={true}
          controls={true}
          width="100%"
          height="auto"
        />
      </div>
      <div className="mt-5 space-y-3">
        <div className="flex justify-between">
          <small className="text-gray-400">{data.date}</small>
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
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://sandalschurch.com/api/latest_sermon')
  const data = await res.json()
  return { props: { data } }
}
