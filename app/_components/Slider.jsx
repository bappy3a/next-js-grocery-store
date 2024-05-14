"use client"
import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';

function Slider() {

    const [sliderList, setSliderList] = useState([]);


    useEffect(() => {
        getSlider();
    }, [])

    const getSlider = () => {
        GlobalApi.getSlider().then(resp => {
            setSliderList(resp.data.data);
        })
    };
    return (

        <Carousel>
            <CarouselContent>
                {sliderList.map((slider, index) => (
                    <CarouselItem key={index}>
                        <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + slider?.attributes?.image?.data[0]?.attributes?.url}
                            className='w-full h-[200px] md:h-[400px] object-cover rounded-2xl'
                            unoptimized={true}
                            alt='image'
                            width={1000}
                            height={400} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    )
}

export default Slider