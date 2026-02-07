import React from 'react'
import Header from '../components/Header/Header'
import HeroSection from '../components/Home/HeroSection/HeroSection'
import Categories from '../components/Home/Categories/Categories'
import FeaturedProduct from '../components/Home/Featured Product/FeaturedProduct'

export default function HomePage() {
  return (
    <>
        <Header/>
        <main>
            <HeroSection/>
            <Categories/>
            <FeaturedProduct/>
         
        </main>

    

    </>
  )
}
