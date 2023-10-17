import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import ProductActions from "@modules/products/components/product-actions"
import React from "react"
import { Product } from "types/medusa"
import Button from "@modules/common/components/button"

type ProductInfoProps = {
  product: PricedProduct
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (

    <div>

 



    <div id="product-info">
      <div className="flex flex-col gap-y-12 lg:max-w-[500px] mx-auto shadow-lg p-4">
        <div>

         <ProductActions product={product} />
        </div>
      </div>
    </div>




    <div> 

    </div>
   


    </div>
  )
}

export default ProductInfo
