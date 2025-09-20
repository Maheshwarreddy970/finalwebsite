import React from 'react'
import ImageSlider from '../ui/ImageSlider'

export default function BodyType() {

    return (
        <section className='overflow-hidden  w-full  '>
            <div className=' h-[50vh] md:h-[80vh] flex items-center justify-center relative'>
                <ImageSlider></ImageSlider>
                <div className="pointer-events-none absolute inset-y-0 z-10 left-0 w-[2%] bg-gradient-to-r from-white"></div>
                <div className="pointer-events-none absolute inset-y-0 z-10 right-0 w-[2%] bg-gradient-to-l from-white"></div>
            </div>
        </section>
    )
}
