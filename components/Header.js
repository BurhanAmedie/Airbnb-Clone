import React, { useState } from 'react'
import Image from "next/image"
import { 
    SearchIcon,
    UserIcon,
    UserCircleIcon,
    GlobeAltIcon,
    MenuIcon} from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router'

export default function Header({ placeholder }) {
    const [searchInput, setsearchInput] = useState('')
    const [startDate, setstartDate] = useState( new Date())
    const [endDate, setendDate] = useState( new Date())
    const [numGuest, setnumGuest] = useState(1)
    const router = useRouter();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
      } 
    const resetInput = () => {
        setsearchInput('')
    }
      const handleSelect = (ranges) => {
          setstartDate(ranges.selection.startDate)
          setendDate(ranges.selection.endDate)
      }
      const search = () => {
        router.push({
          pathname: "/search",
          query: {
            location: searchInput,
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString(),
            numGuest,
          },
        });
      };
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-indigo-600 bg-opacity-10 shadow-md py-5 px-5 md:px-10">
               
                    {/* Left */}
                    <div 
                    onClick= {() => router.push('/')} 
                    className="relative flex items-center h-10 cursor-pointer my-auto ">
                        <Image src="https://links.papareact.com/qd3" 
                        layout='fill' 
                        objectFit="contain"
                        objectPosition="left" />   
                    </div> 
                   

                    
                    {/* Middle */}
                    <div className=" hover:animate-pulse flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
                        <input  
                        placeholder={placeholder || "Start your search"}
                        value= {searchInput}
                        onChange= {(e) => setsearchInput(e.target.value) }
                        className="pl-5 bg-transparent outline-none flex-grow text-sm text-black placeholder-gray-400" type="text" />
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
                    {searchInput && (
                        <div className="flex flex-col col-span-3 mx-auto ">
                            <DateRangePicker
                            ranges={[selectionRange]}
                            minDate= {new Date()}
                            rangeColors={["#F05D51"]}
                            onChange={handleSelect}/>
                            <div className="flex items-center border-b mb-4">
                                <h3 className="text-2xl flex-grow font-semibold">Number of Guests</h3>
                                <UserIcon className="h-5" />
                                <input 
                                value= {numGuest}
                                min= {1}
                                onChange= {(e) => setnumGuest(e.target.value)} 
                                type='number' 
                                className="w-12 pl-2 text-lg outline-none text-red-400" />
                            </div>
                            <div className="flex">
                                <button onClick={resetInput} className=" overflow-hidden flex-grow bg-black text-gray-500">
                                    Chancel
                                </button>
                                <button onClick={search} className=" overflow-hidden flex-grow bg-red-400 text-white">
                                    Search
                                </button>
                            </div>
                            
                        </div>
                    )}
        </header>
        
    )
}
