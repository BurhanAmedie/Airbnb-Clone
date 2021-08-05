import React from 'react'
import Image from 'next/image'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={4500}>
        
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
                    <Image src="https://links.papareact.com/0fm" 
                    layout="fill"
                    objectfit="cover"/>
            
                <div className="absolute top-1/2 w-full text-center">
                    <p className=" text-sm sm:text-lg text-red-600"> Not sure where to go? Perfect</p>
                    <button className="text-purple-500 bg-white px-10 py-4 shadow-md  rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"> I`m Flexible</button>
                </div>
            </div> 
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
                    <Image src="https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?w=1536" 
                    layout="fill"
                    objectfit="cover"/>
            
                <div className="absolute top-1/2 w-full text-center">
                    <button className="text-purple-500 bg-white px-10 py-4 shadow-md  rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"> I`m Flexible</button>
                </div>
            </div>
        </Carousel>
    )
}

export default Banner
