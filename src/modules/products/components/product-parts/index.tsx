import { Tab } from "@headlessui/react"
import { Product } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"
import clsx from "clsx"
import { replace } from "lodash"
import { useMemo } from "react"

type ProductTabsProps = {
  product: PricedProduct
}


const ProductParts = ({ product }) => {

let includes = product.metadata.includes
const parts = includes.split("-")


return(

    <div id="product-info">
        <div className="flex flex-col gap-y-12 lg:max-w-[500px] mx-auto  p-1 mt-1">           
            <div className="grid grid-cols-12">
                <div className="col-span-12">Each set will include</div>
              
                    {parts.map((part, index) => (
                        <div key={index} className="col-span-4">
                            <div>{part.replace("x"," X ")}</div>
                        </div>
                    ))}
        
            </div>
        </div>
    </div>

)


}
  

export default ProductParts
