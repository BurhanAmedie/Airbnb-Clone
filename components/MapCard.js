import React from 'react'
import { motion } from "framer-motion"
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function MapCard({ img,  title, star, price, description }) {
    return (
        
            <div className=" bg-transarent hover:border-red-500 border-4 flex h-55  w-75 p-1 ">
            <div className="relative h-40  w-40  ">
              <Image
                src={img}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
      
            <div className="flex flex-col flex-grow pl-1">
              
      
                <h4 className="text-xl text-red-400">{title}</h4>
                
            <div className="border-b w-1 pt-0.5" />
              
              <div className="flex justify-between items-end pt-0.5">
                <p className="flex items-center space-x2">
                  <StarIcon
                    className="h-2
                  text-red-400"
                  />
                  {star}
                </p>
              <div>
                  <p className="text-xl text-green-600 font-semibold pb-0.2">{price}</p>
                  
              </div>
              </div>
            </div>
          </div>
         
    )
}

export default MapCard
