import React from 'react'
import HeroSection from '@/components/Hero'
import FeaturedProducts from '@/components/Feautured'
import LatestProduct from '@/components/LatestProduct'
import Shopex from '@/components/Shopex'
import UniqueFeature from '@/components/UniqueFeature'
import Trending from '@/components/Trending'
import Discount from '@/components/Discount'
import OffItem from '@/components/OffItem'
import TopCatorgry from '@/components/TopCatorgry'
import Update from '@/components/Update'
import Blog from '@/components/Blog'

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