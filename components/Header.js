import React from 'react'
import Image from "next/image"
import { 
    SearchIcon,
    UserIcon,
    UserCircleIcon,
    GlobeAltIcon,
    MenuIcon} from '@heroicons/react/solid'

export default function Header() {
    return (
        <header>
                <div className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
                    {/* Left */}
                    <div className=" animate-bounce relative flex items-center h-10 cursor-pointer my-auto ">
                        <Image src="https://links.papareact.com/qd3" 
                        layout='fill' 
                        objectFit="contain"
                        objectPosition="left" />   
                    </div> 
                    {/* Middle */}
                    <div className=" animate-pulse hover:animate-none flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
                        <input className="pl-5 bg-transparent outline-none flex-grow text-sm text-white placeholder-gray-400" type="text" placeholder="Start Your Search" />
                        <SearchIcon className="h-8 hidden md:inline-flex  bg-white text-red-400 rounded-full p-2 cursor-pointer md:mx-2 " />
                    </div>
                    {/* Right */}
                    <div className="flex items-center space-x-4 justify-end text-gray-500">
                        <p className="hidden md:inline cursor-pointer"> Become a host</p>
                        <GlobeAltIcon className=" animate-spin h-6 cursor-pointer" />
                        <div className=" flex items-center space-x-2 border-2 rounded-full">
                            <MenuIcon className="h-6 cursor-pointer" />
                            <UserCircleIcon className="h-6 cursor-pointer" />
                        </div>

                    </div>
                    
                    
                </div>
        </header>
        
    )
}
