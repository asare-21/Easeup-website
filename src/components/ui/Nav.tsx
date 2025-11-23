'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { links } from '@/contents/nav'
import { AlignJustify, X } from 'lucide-react'
import useScroll from '@/hooks/useScroll'
function Nav({displaySideBar, setSideBar}:{displaySideBar:boolean, setSideBar: Function}) {
  const isScroll = useScroll()
  const toggleSideBar= ()=>{
setSideBar(!displaySideBar)
  }
    return (
        <header className={`${isScroll ? "shadow-md ": null} fixed  z-50  top-0 left-0 h-[80px] lg:h-[100px] bg-background  px-2  w-full `}>
        <div className="container mx-auto flex justify-between items-center h-full">

      
        <div className="relative w-[120px] h-[34px]">
        <Image
          fill
          sizes="120px"
          className=""
          src={"/logo.png"}
          alt="EaseUp logo"
        />
        </div>
        <nav className='hidden lg:block'>
          <ul className="flex md:gap-x-2  lg:gap-x-5 justify-center w-full items-center">
            {links.map((link, id) => (
              <li key={id}>
                <Link className="text-lg hover:font-semibold duration-150 transition-all ease-in-out leading-7" href={link.to}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:flex gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4.3077 19.5C3.80257 19.5 3.375 19.325 3.025 18.975C2.675 18.625 2.5 18.1974 2.5 17.6923V6.30772C2.5 5.80259 2.675 5.37502 3.025 5.02502C3.375 4.67502 3.80257 4.50002 4.3077 4.50002H19.6923C20.1974 4.50002 20.625 4.67502 20.975 5.02502C21.325 5.37502 21.5 5.80259 21.5 6.30772V17.6923C21.5 18.1974 21.325 18.625 20.975 18.975C20.625 19.325 20.1974 19.5 19.6923 19.5H4.3077ZM12 12.5576L20 7.44227L19.8461 6L12 11L4.15383 6L3.99998 7.44227L12 12.5576Z"
              fill="#121212"
            />
          </svg>
   
          <Link href={"mailto:info@easeupgh.tech"}>info@easeupgh.tech</Link>
        </div>
      { !displaySideBar && <AlignJustify onClick={toggleSideBar} className='w-[34px] h-[34px] lg:hidden' />}
        {displaySideBar && <X onClick={toggleSideBar}  className='w-[34px] h-[34px] lg:hidden'  />}
        </div>
      </header>
    )
}

export default Nav
