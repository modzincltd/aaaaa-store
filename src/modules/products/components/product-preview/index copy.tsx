import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"

const ProductPreview = ({
  title,
  handle,
  thumbnail,
  price,
}: ProductPreviewType) => {
  return (
    <Link href={`/products/${handle}`}>
      <div className="border rounded-sm p-[30px] shadow-sm">
        <Thumbnail thumbnail={thumbnail} size="full" />
        <div className="text-base-regular mt-2">
          <span className="text-xl font-thin text">{title}</span>
          <div className="flex items-center gap-x-2 mt-1">
         
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductPreview
