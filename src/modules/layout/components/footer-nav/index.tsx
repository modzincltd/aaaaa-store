"use client"

import clsx from "clsx"
import { useCollections, useProductCategories } from "medusa-react"
import Link from "next/link"
import CountrySelect from "../country-select"

const FooterNav = () => {
  const { collections } = useCollections()
  const { product_categories } = useProductCategories()

  return (
    <div className=" flex flex-col gap-y-8 pt-16 pb-8 p-8 bg-slate-900 text-white">
      <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
        <div>
          <div className="text-xl-semi uppercase">AA FENCING UK LTD</div>
          <div className="max-w-[450px] pt-10 text-sm ">The no1 security fencing supplier in the UK. We are 101% committed to providing our customers with friendly, helpful and superb customer service. We are also committed to supplying fencing and accessories of the highest quality which are available at the best possible prices. </div>
        </div>
        <div className="text-small-regular grid grid-cols-3 gap-x-10 md:gap-x-16">
          {product_categories && (
            <div className="flex flex-col gap-y-2">
              <span className="text-base-semi">Categories</span>
              <ul className="grid grid-cols-1 gap-2">
                {product_categories?.slice(0, 6).map((c) => {
                  if (c.parent_category) {
                    return
                  }

                  const children =
                    c.category_children?.map((child) => ({
                      name: child.name,
                      handle: child.handle,
                      id: child.id,
                    })) || null

                  return (
                    <li className="flex flex-col gap-2" key={c.id}>
                      <Link
                        className={clsx(children && "text-small-semi")}
                        href={`/${c.handle}`}
                      >
                        {c.name}
                      </Link>
                      {children && (
                        <ul className="grid grid-cols-1 ml-3 gap-2">
                          {children &&
                            children.map((child) => (
                              <li key={child.id}>
                                <Link href={`/${child.handle}`}>
                                  {child.name}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
          {collections && (
            <div className="flex flex-col gap-y-2">
              <span className="text-base-semi">BEST SELLERS</span>
              <ul
                className={clsx("grid grid-cols-1 gap-2", {
                  "grid-cols-2": (collections?.length || 0) > 3,
                })}
              >
                {collections?.slice(0, 6).map((c) => (
                  <li key={c.id}>
                    <Link href={`/collections/${c.handle}`}>{c.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">SUPPORT</span>
            <ul className="grid grid-cols-1 gap-y-2">
              <li>Deliveries</li>
              <li>Privacy Policy</li>
              <li>T&Cs</li>   
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-y-4 justify-center xsmall:items-center xsmall:flex-row xsmall:items-end xsmall:justify-between">
        <span className="text-xsmall-regular text-gray-500">
          © Copyright 2024 AA Fencing UK LTD
        </span>
       
      </div>
    </div>
  )
}

export default FooterNav
