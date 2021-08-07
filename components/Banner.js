import React from 'react'
import Image from 'next/image'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion"

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={3900}>
            
                <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
                    
                        <Image src="https://links.papareact.com/0fm" 
                        layout="fill"
                        objectfit="cover"/>
                
                </div> 
                <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
                        <Image src="https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?w=1536" 
                        layout="fill"
                        objectfit="cover"/>

                </div>
            </Carousel>
            <div className="absolute top-1/2 w-full text-center">
                        <motion.div initial="hidden" animate="visible" variants={{
                        hidden: {
                            scale: .8,
                            opacity: 0
                        } ,
                        visible: {
                            scale: 1,
                            opacity:1,
                            transition: {
                                delay: .4
                            }
                        }
                        }}>
                        <p className=" font-black text-sm sm:text-6xl subpixel-antialiased  text-black-400"> Not sure where to go? Perfect</p>
                        <button className=" text-purple-500 bg-red-400 px-10 py-4 shadow-md  rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"> I`m Flexible</button>
                        </motion.div>
                        
                    </div>

        </div>
        
    )
}

export default Banner
