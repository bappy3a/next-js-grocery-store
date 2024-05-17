import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ProductItemDeail from './ProductItemDeail'

function ProductItem({product}) {
  return (
    <div className='p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg hover:scale-110 hover:shadow-lg transition-all ease-in-out'>
        <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+product?.attributes?.image?.data[0]?.attributes?.url} 
        width={500}
        height={200}
        alt={product.attributes.name}
        className='h-[200px] w-[200px] object-contain'
        />
        <h2 className='font-bold text-lg'>{product.attributes.name}</h2>
        <h2 className='font-bold '>${product.attributes.mrp}</h2>
        
        {/* Model For Product Details */}
        <Dialog>
          <DialogTrigger asChild><Button className="text-primary hover:text-white hover:bg-primary" variant="outline">Add to cart</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogDescription>
                <ProductItemDeail product={product}/>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

    </div>
  )
}

export default ProductItem