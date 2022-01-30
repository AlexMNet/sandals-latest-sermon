import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'

export default function Contact() {
  return (
    <section className="container mx-auto mt-5 flex flex-col items-center justify-center">
      <h1 className="text-center text-6xl">Project Information</h1>
      <Link href="https://github.com/AlexMNet/sandals-latest-sermon">
        <a
          target="_blank"
          className=" mt-5 transform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-blue-500"
        >
          <BsGithub className="text-8xl" />
          <small className="font-mono">Visit Github</small>
        </a>
      </Link>
      <p className="text-center text-3xl text-gray-600">
        Thank you for taking time to view my project submission.
      </p>
      <p className="text-center text-3xl text-gray-600">
        Source code and project documentation can be found on github.
      </p>
    </section>
  )
}
