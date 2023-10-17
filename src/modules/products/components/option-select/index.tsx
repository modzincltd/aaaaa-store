import { onlyUnique } from "@lib/util/only-unique"
import { ProductOption } from "@medusajs/medusa"
import clsx from "clsx"
import React from "react"
import Image from "react"

type OptionSelectProps = {
  option: ProductOption
  current: string
  updateOption: (option: Record<string, string>) => void
  title: string
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption, 
  title,
}) => {
  const filteredOptions = option.values.map((v) => v.value).filter(onlyUnique)

  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-base-semi">Choose your {title}</span>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {filteredOptions.map((v) => {

          let btnColour = v

          return (

            <button
              onClick={() => updateOption({ [option.id]: v })}
              key={v}

              className={clsx(
                "border-gray-200  border text-small-regular h-[50px] transition-all duration-200",
                { "border-gray-900 border-2": v === current },
                { "bg-yellow-500 text-white": v === 'Yellow' },
                { "bg-gray-500 text-white": v === 'Galvinised' },
                { "bg-gray-500 text-white": v === 'Galvanised' },
                { "bg-black text-white": v === 'Black' },
                { "bg-black text-white": v === 'Blue' },
                { "bg-black text-white": v === 'Red' },
                { "bg-green-900 text-white": v === 'Green' },

                { "bg-gray-100 text-black": v === 'Dig In' },
                { "bg-gray-100": v === 'Bolt Down' } 
               
              )}
            >

             
          

              {
              v === 'Dig In' ? <img src="/icons/spade.png" className="w-8 h-8 m-2 inline-block" />
              : ''
              }

              {
              v === 'Bolt Down' ? <img src="/icons/spade.png" className="w-8 h-8 m-2 inline-block" />
              : ''
              }

              {
                v === current ? <span><b>&#x2713; &nbsp;</b> </span> : ''
              }
             
            {v} 
            </button>

          )

          
        })}
      </div>
    </div>
  )
}

export default OptionSelect
