"use client"
import { Button } from '@/components/ui/button'
import { ShoppingBasket } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

function ProductItemDeail({ product }) {
    const [productTotalPrice,setProductTotalPrice] = useState(product.attributes.mrp)
    const [quantity,setQuantity] = useState(1)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 p-7 bg-white text-black'>
            <Image className='bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg' src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + product?.attributes?.image?.data[0]?.attributes?.url} width={300} height={300} alt='Product' />
            <div className='flex flex-col gap-3'>
                <h2 className='text-2xl font-bold'>{product.attributes.name}</h2>
                <h2 className='text-sm text-gray-500'>{product.attributes.description}</h2>
                <h2 className='font-bold text-3xl'>${product.attributes.mrp}</h2>

                <h2>Quantity ({product.attributes.itemQuantityType})</h2>
                <div className='flex flex-col items-baseline gap-3'>
                    <div className='flex gap-2 items-center'>
                        <div className='p-2 border flex gap-10 items-baseline px-3'>
                            <button disabled={quantity==1} onClick={()=> setQuantity(quantity-1)} >-</button>
                            <h2>{quantity}</h2>
                            <button  onClick={()=> setQuantity(quantity+1)}>+</button>
                        </div>
                        <h2 className='text-3xl font-bold'> = ${(quantity * productTotalPrice).toFixed(2)}</h2>
                    </div>
                    <Button className="flex gap-3">
                        <ShoppingBasket />
                        Add To Cart
                    </Button>
                </div>

            </div>

        </div>
    )
}

export default ProductItemDeail