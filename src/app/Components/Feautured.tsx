import React from 'react';
import Image from 'next/image';
import FeaturedCard from '@/app/Components/FeaturedCard'

interface products{
    image: string;
    title: string;
    description: string;
    price: string;
}

const FeaturedProducts = () => {
  return (
    <section className="max-w-[1177px] flex flex-col gap-9 mx-auto px-4 2xl:pt-[150px]">
      {/* Heading */}
      <h2 className="xs:text-[32px] sm:text-[42px] font-bold text-center mb-8">Featured Products</h2>

      {/* Products Grid */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          <FeaturedCard 
            key="1"
            image="./images/chair4.svg"
            title="Cantilever chair"
            description="Code - Y523201"
            price="$42.00"
          />
          <FeaturedCard 
            key="2"
            image="./images/chair3.svg"
            title="Cantilever chair"
            description="Code - Y523201"
            price="$42.00"
          />
          <FeaturedCard 
            key="3"
            image="./images/chair1.svg"
            title="Cantilever chair"
            description="Code - Y523201"
            price="$42.00"
          />
          <FeaturedCard 
            key="4"
            image="./images/chair2.svg"
            title="Cantilever chair"
            description="Code - Y523201"
            price="$42.00"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-1 justify-center mt-12">
        <div className="w-8 h-1 bg-gray-300"></div>
        <div className="w-4 h-1 bg-gray-300"></div>
        <div className="w-4 h-1 bg-gray-300"></div>
        <div className="w-6 h-1 bg-gray-300"></div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
