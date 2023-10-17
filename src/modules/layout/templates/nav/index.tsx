"use client"

import { useMobileMenu } from "@lib/context/mobile-menu-context"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
 
const Nav = () => {
  const pathname = usePathname()
  const [isHome, setIsHome] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  //useEffect that detects if window is scrolled > 5px on the Y axis
  useEffect(() => {
    if (isHome) {
      
    }
  }, [isHome])

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false)
  }, [pathname])

  const { toggle } = useMobileMenu()

  return (
    
    
<div className="bg-white">
  <div className="border py-3 px-6">
    <div className="flex justify-between">
      <div className="flex items-center">
      <img src="/logo.gif" className="max-w-[250px] text-red-500"/>
      
        <span className="ml-2 font-semibold text-[#252C32]"></span>
      </div>

      <div className="ml-6 flex flex-1 gap-x-3">
       

        <input type="text" className="w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm" value="Search all our products..." />
      </div>

      <div className="ml-2 flex">
        <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
            <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
          <span className="text-sm font-medium"><Link href="/account/orders">ORDERS</Link></span>
        </div>

        <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
          </svg>
          <span className="text-sm font-medium">MY LISTS</span>
        </div>

        <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>

          </div>
          <span className="text-sm font-medium"><CartDropdown /></span>
        </div>

        <div className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
          <span className="text-sm font-medium"><Link href="/account">Account</Link></span>
        </div>
      </div>
    </div>

    <div className="mt-4 flex items-center justify-between">
      <div className="flex gap-x-2 py-1 px-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
        </svg>
        <span className="text-sm font-medium">Delivery Calculator</span>
      </div>

      <div className="flex gap-x-8">
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100"><Link href="/">HOME</Link></span>
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">PALISADE</span>
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100"><Link href="/mesh-fencing">MESH FENCING</Link></span>
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">RAILINGS</span>
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100"><Link href="/collections/crash-barrier">CRASH BARRIERS</Link></span>
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">RAZOR WIRE</span>
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">DOMESTIC</span>
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">TEMPORARY</span>
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">ACCESORIES</span>
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">POSTMIX</span>
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">DEALS</span>
      </div>

      <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100"></span>
    </div>
  </div>
</div>


  )
}

export default Nav
