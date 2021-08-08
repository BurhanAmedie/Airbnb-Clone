import React from 'react'
import Image from "next/image"
import { motion } from "framer-motion"


function MediumCard({img, title}) {
    return (
      <motion.button
      whileHover={{ scale: 0.9}}
      whileTap={{ scale: 1 }}> 
        <div className=" animate-wiggle   cursor-pointer hover:scale-105 transition transform duration-300 ease-out" >
            <div className="relative h-80 w-80">
              <Image src= {img} layout="fill" className="rounded-xl"/>  
            </div>
            <h3 className="text-2xl ml-3">{title}</h3>
        </div>
      </motion.button>
            
            
        
        
        
        
    )
}

export default MediumCard
