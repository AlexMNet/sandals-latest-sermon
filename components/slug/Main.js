import {
  FacebookShareButton,
  FacebookMessengerIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share'
import { slugify, parseDate } from '../../functions/functions'
import dynamic from 'next/dynamic'
const ReactHlsPlayer = dynamic(() => import('react-hls-player'), { ssr: false })

export default function Main({ data, url }) {
  //Get full url for share buttons
  const fullUrl = `${url}watch/${slugify(data.title)}`
  //Make date read Month Day Year, ex. Jan 29 2022
  const date = parseDate(data.date)

  return (
    <main className="container mx-auto mb-20 mt-6 max-w-screen-lg p-3">
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
      <article className="mt-5 md:space-y-3">
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
        <div className="mb-4 flex flex-col items-baseline justify-start md:flex-row md:gap-2">
          <h1 className="text-3xl">{data.title} </h1>
          <span className="my-auto rounded-lg bg-green-500 px-2 py-1 text-xs text-white">
            {data.length} min
          </span>
        </div>
        <p className="text-gray-700 md:text-lg">{data.desc}</p>
      </article>
    </main>
  )
}
