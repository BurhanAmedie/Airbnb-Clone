import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'
import { Carousel } from "react-responsive-carousel"


export default function Home({exploreData, cardsData, searchResults}) {
  console.log(searchResults)
  return (
    <div >
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
        <Header/>
      {/* Banner */}
        <Banner />
      {/* Main */}
     

      
     
        <div className=' bg-gray-50 min-h-screen flex item-center justify-center'
        >
          <div className='relative w-full '>
            <div className='min-w-lg px-16'>
            <div className='absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
            <div className='absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
            <div className='absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
            </div>
            
            <main className="max-w-7xl mx-auto px-8 sm:px-16 ">
                <section className="pt-6">
                  <h2 className="text-4xl font-semibold pb-5"> Explore Nearby</h2>

                  {/* Pull something from server */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl-grid-cols-4">
                  {exploreData?.map(({img, distance, location}) => (
                    <SmallCard key={img} img= {img} distance={distance} location={location} />
                  ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
                  <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
                    {cardsData?.map(({ img, title }) => ( 
                      <MediumCard key=  {img} img = {img} title= {title} />
                    ))}
                  </div>
                </section>
                <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={4500}>
                  <LargeCard
                img= 'https://links.papareact.com/4cj' 
                title='The Greatest Outdoors'
                description="Wishlists curated by Airbnb" 
                buttonText="Get Inspired"/>
                <LargeCard
                img= "https://links.papareact.com/xqj" 
                title='The Greatest Outdoors'
                description="Wishlists curated by Airbnb" 
                buttonText="Get Inspired"/>
                <LargeCard
                img= "https://links.papareact.com/hz2" 
                title='The Greatest Outdoors'
                description="Wishlists curated by Airbnb" 
                buttonText="Get Inspired"/>
                <LargeCard
                img= "https://links.papareact.com/pro" 
                title='The Greatest Outdoors'
                description="Wishlists curated by Airbnb" 
                buttonText="Get Inspired"/>
                  
                </Carousel>
                
            </main >
          </div>
          
        </div>
        
       

          
      
        
        <footer>
          <Footer />
        </footer>

        
    </div>
  )
}


export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  );

  const cardsData = await fetch('https://links.papareact.com/zp1').then(
    (res) => res.json()
  );

  return  {
    props: {
      exploreData,
      cardsData,
    }
  }

}