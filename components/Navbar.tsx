import Link from 'next/link'
import React, { useState } from 'react'

export default function Navabar() {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }
  return (
    <nav className="flex flex-wrap items-center p-3 ">
      <Link href="/">
        <a className="mr-4 inline-flex items-center p-2 ">
          <span className="text-2xl font-bold uppercase tracking-wide text-black">
            Sandals Church
          </span>
        </a>
      </Link>
      <button
        className=" ml-auto inline-flex rounded p-3 text-black outline-none hover:bg-black hover:text-white hover:text-black lg:hidden"
        onClick={handleClick}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className={`${
          active ? '' : 'hidden'
        }   w-full lg:inline-flex lg:w-auto lg:flex-grow`}
      >
        <div className="flex w-full flex-col items-start lg:ml-auto lg:inline-flex lg:h-auto  lg:w-auto lg:flex-row lg:items-center">
          <Link href="/">
            <a className="w-full items-center justify-center rounded px-3 py-2 font-bold text-black hover:bg-black hover:text-white lg:inline-flex lg:w-auto ">
              Home
            </a>
          </Link>
          <Link href="/">
            <a className="w-full items-center justify-center rounded px-3 py-2 font-bold text-black hover:bg-black hover:text-white lg:inline-flex lg:w-auto">
              Services
            </a>
          </Link>
          <Link href="/">
            <a className="w-full items-center justify-center rounded px-3 py-2 font-bold text-black hover:bg-black hover:text-white lg:inline-flex lg:w-auto">
              About us
            </a>
          </Link>
          <Link href="/">
            <a className="w-full items-center justify-center rounded px-3 py-2 font-bold text-black hover:bg-black hover:text-white lg:inline-flex lg:w-auto">
              Contact us
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
