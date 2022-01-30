import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { navLinks } from '../../data/navlinks'
import Hamburger from '../Hamburger'
import { BsGithub } from 'react-icons/bs'

export default function Navbar() {
  const router = useRouter()
  const linksRef = useRef(null)
  const linksContainerRef = useRef(null)
  const [open, setOpen] = useState(false)

  const toggleDropdown = () => {
    setOpen(!open)
  }

  // Hide dropdown if open is true and window is resized larger
  useEffect(() => {
    //Function to hide dropdown larger than 768px
    const hideDropdown = () => {
      if (window.innerWidth > 768 && open) {
        setOpen(false)
      }
    }
    //Add event listening on window resize
    window.addEventListener('resize', hideDropdown)

    //Event listener cleanup
    ;() => {
      window.removeEventListener('resize', hideDropdown)
    }
  })

  //Set height of dropdown menu
  useEffect(() => {
    if (open) {
      const linksHeight = linksRef.current.getBoundingClientRect().height
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [open])

  return (
    <nav className="flex h-16 flex-col items-center justify-center border-b-2 border-b-black text-black">
      <div className="container flex h-full items-center justify-between">
        <Link href="/">
          <a className="mr-4 inline-flex items-center p-2 ">
            <span className="text-2xl font-bold uppercase tracking-wide text-black">
              Sandals Church
            </span>
          </a>
        </Link>

        <div className="cursor-pointer px-4 md:hidden" onClick={toggleDropdown}>
          <Hamburger />
        </div>
        <div className="hidden pr-8 md:block">
          <a
            href="https://github.com/AlexMNet/sandals-latest-sermon"
            target="_blank"
          >
            <button className="rounded-md bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
              <span>Github</span>
              <BsGithub className=" ml-2 mb-1 inline-block" />
            </button>
          </a>
          {navLinks.map(({ id, url, text }) => (
            <Link href={url} key={id}>
              <a
                className={`p-4 hover:text-gray-600 ${
                  router.asPath === url ? 'font-semibold' : ''
                } `}
              >
                {text}
              </a>
            </Link>
          ))}
        </div>
      </div>
      {/* DROPDOWN NAV */}
      <div
        className={`opacity-99 absolute top-16 z-10 h-0 w-full overflow-hidden rounded-b-xl bg-white text-center text-black  transition-all duration-300 ease-in-out  md:block`}
        ref={linksContainerRef}
      >
        {/* hide links because they still show with height zero. */}
        {open && (
          <ul className={`flex flex-col`} ref={linksRef}>
            {navLinks.map(({ id, url, text }) => (
              <Link href={url} key={id}>
                <a
                  onClick={toggleDropdown}
                  className="p-4 hover:bg-black hover:text-white"
                >
                  {text}
                </a>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}
