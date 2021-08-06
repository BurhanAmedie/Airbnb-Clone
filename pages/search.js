import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/dist/client/router'
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';
import { AnimateSharedLayout } from "framer-motion"
import { motion } from "framer-motion" 

function search({ searchResults }) {
    const router = useRouter();
    const { location, startDate, endDate, numGuest} = router.query;
    

    const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formatedEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = ` ${formatedStartDate} - ${formatedEndDate}`;

    return (

        <div>
            <Header placeholder={`${location} | ${range} | ${numGuest} guests`} />
            <main className="flex">
                <section className=" flex-grow pt-14 px-6">
                    <p className="text-xs"> 300+ Stays - {range} for {numGuest} Guests </p>
                    <h2 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h2>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More Filters</p>
                    </div>
                    <div className="flex flex-col">
                        <AnimateSharedLayout>
                        <motion.ul layout> 
                                {searchResults.map(
                                ({ img, location, title, description, star, price, total }) => (
                                    <InfoCard
                                    key={img}
                                    img={img}
                                    location={location}
                                    title={title}
                                    description={description}
                                    star={star}
                                    price={price}
                                    total={total}
                                    />
                                )
                                )}
                            </motion.ul>
                        </AnimateSharedLayout>
                    </div>
                </section>
            </main>

            <Footer />
            
        </div>
    )
}

export default search

export async function getServerSideProps() {
    const searchResults = await fetch("https://links.papareact.com/isz").then(
      (res) => res.json()
    );
    return {
      props: {
        searchResults,
      },
    };
  }