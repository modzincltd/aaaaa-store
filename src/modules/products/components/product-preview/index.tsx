import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"
import { Product } from "@medusajs/medusa"

const ProductPreview = ({
  title,
  handle,
  thumbnail,
  price,
  product
}: ProductPreviewType) => {
  return (
    <Link href={`/products/${handle}`}>


<div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
<a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl " href="#">

<Thumbnail thumbnail={thumbnail} size="full" /> 

 {price ? (
              <> 
                {price.price_type === "sale" && (
                  <span className="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-2 text-center text-sm font-medium text-white">
                    SALE
                  </span>
                )}
                <span
                  className={clsx("font-semibold", {
                    "text-rose-500": price.price_type === "sale",
                  })}
                >
                 
                </span>
              </>
            ) : (
              <div className="w-20 h-6 animate-pulse bg-gray-100">fff</div>
            )}






</a>
<div className="mt-4 px-5 pb-5">
<a href="#">
<h5 className="text-xl tracking-tight text-slate-900">{title}</h5>
</a>
<div className="mt-2 mb-5 flex items-center justify-between">
<p>

 <span className="text-2xl font-bold text-slate-900">{price.calculated_price}</span>
 <span className="text-sm text-slate-900 line-through">{price ? (
              <>
                {price.price_type === "sale" && (
                  
                    <span>{price.original_price}</span>
                 
                )}
                <span
                  className={clsx("font-semibold", {
                    "text-rose-500": price.price_type === "sale",
                  })}
                >
                 
                </span>
              </>
            ) : (
              <div className="w-20 h-6 animate-pulse bg-gray-100">fff</div>
            )}

</span>
</p>
<div className="flex items-center">
 
 <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">Color Options</span>
</div>
</div>
<a href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
<svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
 <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
Add to cart</a
>

</div>
</div> 

    </Link>
  )
}

export default ProductPreview
