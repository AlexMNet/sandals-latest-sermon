import { useRouter } from 'next/router'
import { FaPlayCircle } from 'react-icons/fa'
import slugify from '../../functions/slugify'
import { serviceTimes } from '../../data/serviceTimes'

export default function main({ data }) {
  const router = useRouter()

  const path = `/watch/${slugify(data.title)}/`

  return (
    <section className="container mx-auto mt-5 mb-20 max-w-[67rem] p-3">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
        {/* Left Content */}
        <div>
          <h1 className="mb-4 text-3xl">Latest Sermon</h1>
          <div
            className="relative cursor-pointer"
            onClick={() =>
              router.push({
                pathname: path,
              })
            }
          >
            <img src={data.image_hd} alt="" width="660" className="relative" />

            <FaPlayCircle
              className="absolute left-1/2 top-1/2 text-8xl text-white opacity-50 hover:opacity-75"
              style={{ transform: 'translate(-50%, -50%)' }}
            />
          </div>
        </div>
        {/* Right Content */}
        <div className="flex flex-col">
          <h1 className="mb-4 text-3xl">Join Us Online</h1>
          <div className="inline-block bg-gray-200 p-4">
            <h3 className="font-bold text-gray-600">
              Online Weekend Service Times
            </h3>
            <ul className="space-y-3">
              {serviceTimes.map(({ id, text }) => (
                <li key={id}>
                  <p className="text-gray-700">{text}</p>
                </li>
              ))}
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
    </section>
  )
}
