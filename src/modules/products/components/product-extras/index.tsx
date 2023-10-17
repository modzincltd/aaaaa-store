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


const ProductExtras = ({ product }) => {

  let includes = product.metadata.includes
  const parts = includes.split("-")


return(



    <div id="product-info">
   
    </div>


)


}
  

export default ProductExtras
