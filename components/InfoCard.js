import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion"

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <motion.div whileHover={{
      scale: 0.9,
      position: 'relative',
      zIndex: 0.5,
      transition: {
        duration: 0.2
      }
    }}>
      <div className=" hover:border-red-500 border-8 flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t ">
      <motion.button
                whileHover={{ scale: [1, 1.5, 1.5, 1, 1],
                            rotate: [0, 0, 270, 270, 0],
                            borderRadius: ["20%", "20%", "50%", "50%", "20%"],}}
                whileTap={{ scale: 0.9 }}> 
                <div className="relative h-24 w-40 md:h-52 md:w-80 flex- shrink-0">
                    <Image
                      src={img}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-2xl"
                    />
                    </div>
                </motion.button>
      

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="hover:text-red-500 h-7 cursor-pointer" />
        </div>

        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon
              className="h-5
            text-red-400"
            />
            {star}
          </p>
          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
    
  );
}

export default InfoCard;