import { Tab } from "@headlessui/react"
import { Product } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"
import clsx from "clsx"
import { useMemo } from "react"

type ProductTabsProps = {
  product: PricedProduct
}


const ProductCalculator = ({ product }) => {

 


return(



    <div id="product-info">
    <div className="flex flex-col gap-y-12 lg:max-w-[500px] mx-auto  p-1 mt-1">
      <div> 

      
        <div className="grid grid-cols-12 w-full border-2 border-gray-300 p-4">
          <div className="col-span-12 text-center ">
            EACH SET IS <b>{product.metadata.bayLength}M</b> LONG
          </div>

          <div className="grid grid-cols-12 col-span-5 m-4">
            <div className="col-span-12 text-center">SETS</div> 
            <div className="col-span-2 bg-slate-300 text-center rounded-sm font-bold">-</div>
            <div className="col-span-8 text-center border-2 boder-slate-500">1</div>
            <div className="col-span-2 bg-slate-300 text-center rounded-sm font-bold">+</div>
            <div className="col-span-12 text-center"> £0.00  / set</div>
          </div>

          <div className="grid grid-cols-12 col-span-1 m-4"> 
            =
          </div>

          <div className="grid grid-cols-12 col-span-5 m-4">
            <div className="col-span-12 text-center">METERS</div> 
            <div className="col-span-2 bg-slate-300 text-center rounded-sm font-bold">-</div>
            <div className="col-span-8 text-center border-2 boder-slate-500">1</div>
            <div className="col-span-2 bg-slate-300 text-center rounded-sm font-bold">+</div>
            <div className="col-span-12 text-center"> £0.00 / mtr</div>
          </div>

          <div className="col-span-12 text-center ">
            TOTAL YOU WILL PAY
          </div>
  

      </div>
    </div>
  </div>
  </div>


)


}
  

export default ProductCalculator
