import ProductList from '@/app/_components/ProductList';
import GlobalApi from '@/app/_utils/GlobalApi'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

async function ProductCategory({ params }) {
    const productList=await GlobalApi.getProductByCategoyr(params?.categoryName)
    const categoryList=await GlobalApi.getCategoryList();
    console.log(productList);
    return (
        <div>
            <h2 className='p-4 bg-primary text-white font-bold text-3xl text-center'>{params.categoryName}</h2>

            <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-5 mt-2 items-center'>
                {categoryList.map((category,index)=>(
                    <Link href={'/products-category/'+category.attributes.name} className='flex flex-col items-center bg-green-50 gap-2 p-3 rounded-lg group cursor-pointer hover:bg-green-200'>
                        <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+category?.attributes?.icon?.data[0]?.attributes?.url}
                        className='group-hover:scale-125 translate-all ease-in-out'
                        width={50}
                        height={50} 
                        alt='icon'/>
                        <h2 className='text-green-800'>{category.attributes.name}</h2>
                    </Link>
                ))}
            </div>
            <div className='p-5 md:10'>
                <ProductList productList={productList} />
            </div>
        </div>
    )
}

export default ProductCategory