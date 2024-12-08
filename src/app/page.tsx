import React from 'react'
import HeroSection from '@/app/Components/Hero'
import FeaturedProducts from '@/app/Components/Feautured'
import LatestProduct from '@/app/Components/LatestProduct'
import Shopex from '@/app/Components/Shopex'
import UniqueFeature from '@/app/Components/UniqueFeature'
import Trending from '@/app/Components/Trending'
import Discount from '@/app/Components/Discount'
import OffItem from '@/app/Components/OffItem'
import TopCatorgry from '@/app/Components/TopCatorgry'
import Update from '@/app/Components/Update'
import Blog from '@/app/Components/Blog'

const page = () => {
  return (
 <>
    <HeroSection/>
     <FeaturedProducts/>
     <LatestProduct/>
     <Shopex/>
     <UniqueFeature/>
     <Trending/>
     <Discount/>
     <OffItem/>
     <TopCatorgry/>
     <Update/>
     <Blog/>
     
    </>
  )
}

export default page