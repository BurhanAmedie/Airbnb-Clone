import React from 'react'
import Image from "next/image"
import { motion } from "framer-motion"

function SmallCard({img, distance, location}) {
    return (
        <motion.button
    whileHover={{ scale: 1.1}}
    whileTap={{ scale: 0.9 }}>
        <div className="flex animate-pulse hover:animate-none items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
            {/* Left */}
            <div className='relative h-16 w-16 '>
            <Image src= {img} layout='fill' className="rounded-lg" /> 
            </div>
            {/* Right */}
             <div>
                 <h2>{location}</h2>
                 <h3 className="text-gray-500">{distance}</h3>
             </div>
            
        </div>
    </motion.button>
        
    )
}

export default SmallCard
