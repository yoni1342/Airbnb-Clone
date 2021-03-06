import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'
export default function Home({ exporeData, cardsData }) {
  
  return (
    <div className="">
      <Head>
        <title>Airbnb 2.0</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* Heder */}
      <Header/>
      {/* Banner */}
      <Banner/>
      {/* Main */}
      <main className ='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className ='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          {/* Pull some data form a server*/}
          <div className ='grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3' >
          {exporeData?.map(({img, distance, location})=>(
            <SmallCard 
            key ={img}
            img = {img}
            distance = {distance}
            location = {location}
            />
          ))}
          </div>
        </section>
        <section>
          <h2 className ='text-4xl font-semibold p-4'>Live Anywhere</h2>
            <div className = 'flex space-x-4 overflow-x-scroll scrollbar-hide p-3'>
              {cardsData?.map(({img, title})=>(
                <MediumCard key ={img} img = {img} title ={title}/>
              ))}
            </div>
        </section>

        <LargeCard 
          key = 'id'
          img = 'https://links.papareact.com/4cj'
          title = 'The Greatest Outdoors'
          description = 'wishlists curated by Airbnb.'
          buttonText ='Get Inspired'

        />
      </main>
      <Footer />
    </div>
  )
}
export async function getStaticProps(){
  const exporeData = await fetch("https://links.papareact.com/pyp")
  .then((res)=>res.json());

  const cardsData = await fetch("https://links.papareact.com/zp1")
  .then((res)=>res.json())
  return{
    props:{
      exporeData,
      cardsData
    }
  }
}
