"use client"
import { Alert } from "flowbite-react";
import Link from "next/link"
import { useMobileMenu } from "@lib/context/mobile-menu-context"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import clsx from "clsx"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import { searchClient, SEARCH_INDEX_NAME } from "@lib/search-client"
import Modal from "@modules/common/components/modal"
import Search from "@modules/common/icons/search"
import DesktopHit from "@modules/search/components/desktop-hit"
import DesktopHits from "@modules/search/components/desktop-hits"
import SearchBox from "@modules/search/components/search-box"
import useToggleState from "@lib/hooks/use-toggle-state"
import { InstantSearch } from "react-instantsearch-hooks-web"

import { useProductCategories } from "medusa-react"
import { ProductCategory } from "@medusajs/medusa"


import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from "./Icons"


import React from "react";

import Dropdown from "flowbite-react";


type CategoryTemplateProps = {
  categories: ProductCategoryWithChildren[]
}
 
const Nav = () => {
  const pathname = usePathname()
  const [isHome, setIsHome] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  const { state, close, open } = useToggleState()


  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };


  

  const { 
    product_categories, 
    isLoading,
  } = useProductCategories()



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
    <nav className="bg-white">

        <nav>
      <ul class="flex items-center justify-center font-semibold">
        <li class="relative group px-3 py-2">
          <button class="hover:opacity-50 cursor-default">Products</button>
          <div
            class="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
            <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
              <div
                class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
              </div>

              <div class="relative z-10">
                <div class="grid grid-cols-2 gap-6">
                  <div>
                    <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">The Suite</p>
                    <ul class="mt-3 text-[15px]">
                      <li>
                        <a href="#"
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                          Course Editor
                          <p class="text-gray-500 font-normal">All-in-one editor</p>
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                          Accept payments
                          <p class="text-gray-500 font-normal">Pre-build payments page</p>
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                          Closed Captioning
                          <p class="text-gray-500 font-normal">Use AI to generate captions</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Extensions</p>
                    <ul class="mt-3 text-[15px]">
                      <li>
                        <a href="#"
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                          Plugins
                          <p class="text-gray-500 font-normal">Tweak existing functionality</p>
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                          Batch uploads
                          <p class="text-gray-500 font-normal">Get your time back</p>
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                          Social sharing
                          <p class="text-gray-500 font-normal">Generate content for socials</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="relative group px-3 py-2">
          <button class="hover:opacity-50 cursor-default">Solutions</button>
          <div
            class="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
            <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
              <div
                class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm">
              </div>
              <div class="relative z-10">
                <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Use cases</p>
                <ul class="mt-3 text-[15px]">
                  <li>
                    <a href="#"
                      class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                      Creators
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                      Streamers
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                      Influence
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                      Programming
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                      Design
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li class="relative group px-3 py-2">
          <button class="hover:opacity-50 cursor-default">Developers</button>
          <div
            class="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
            <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
              <div
                class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12.65rem] duration-500 ease-in-out rounded-sm">
              </div>

              <div class="relative z-10">
                <a href="#"
                  class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                  Documentation
                  <p class="text-gray-500 font-normal">Start integrating in no time</p>
                </a>
                <div class="mt-6 grid grid-cols-2 gap-6">
                  <div>
                    <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Get started</p>
                    <ul class="mt-3 text-[15px]">
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                          Libraries and SDKs
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                          Plugins
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                          Code samples
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                          Tutorials
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Guides</p>
                    <ul class="mt-3 text-[15px]">
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                          Accept online payments
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                          Editing video like a pro
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                          Automation techniques
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                          Create stunning effects
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="relative group px-3 py-2">
          <button class="hover:opacity-50 cursor-default">Resources</button>
          <div
            class="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
            <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
              <div
                class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm">
              </div>
              <div class="relative z-10">
                <ul class="text-[15px]">
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                      Get Support
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                      Guides
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                      News &amp; Events
                    </a>
                  </li>
                </ul>


              </div>
            </div>
          </div>
        </li>
        <li class="relative group px-3 py-2">
          <a href="#" class="hover:opacity-50 cursor-default">Pricing
          </a>
        </li>
      </ul>
    </nav>
    <nav>
      <ul>
        <li>
          <a href="#" class="rounded-full px-3 py-2 font-semibold bg-white bg-opacity-10 flex items-center group">
            
           
          </a>
        </li>
      </ul>
    </nav>  
      
    </nav>

)
}
             
              


export default Nav
