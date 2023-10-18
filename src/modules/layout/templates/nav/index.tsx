"use client"

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
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";



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
    
    
<div className="bg-white">



<div>
      {isLoading && <span>Loading...</span>}
      {product_categories && !product_categories.length && (
        <span>No Categories</span>
      )}
      {product_categories && product_categories.length > 0 && (
        <ul>
          {product_categories.map(
            (category: ProductCategory) => (
              <li><Link href={category.handle}>{category.name} </Link>
               {category.category_children && (
                <div className="mb-8 text-base-large">
                  <div className="grid grid-cols-1 gap-2">
                    {category.category_children?.map((c) => (
                      <div key={c.id}>
                        <Link href={`/${c.handle}`}>{c.name}</Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
               
               </li>
              
              
            )
          )} 
        </ul>
      )}
    </div>



    <Navbar>
      <NavbarBrand>
       
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      {product_categories.map(
            (category: ProductCategory) => (
             
               {category.category_children && (
                 <Dropdown>
                 <NavbarItem>
                   <DropdownTrigger>
                     <Button
                       disableRipple
                       className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                       endContent={icons.chevron}
                       radius="sm"
                       variant="light"
                     >
                       Features
                     </Button>
                   </DropdownTrigger>
                 </NavbarItem>
                 <DropdownMenu
                    aria-label="ACME features"
                    className="w-[340px]"
                    itemClasses={{
                      base: "gap-4",
                    }}
                     >
                        {category.category_children?.map((c) => (
                          <DropdownItem
                          key="autoscaling"
                          description="ACME scales apps to meet user demand, automagically, based on load."
                          startContent={icons.scale}
                         >

                          <Link href={`/${c.handle}`}>{c.name}</Link>
                          </DropdownItem>
                     
                     ))}

                     </DropdownMenu>
                  </Dropdown>
              )}
                          </NavbarContent>
                  </Navbar>
                    
   
                  
                
              )}
               
             
              
              
            )
          )} 
      


    

</div>
</div>
  )
}

export default Nav
