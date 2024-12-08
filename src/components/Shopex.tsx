import React from 'react';
import ShopexCard from '@/components/ShopexCard'

interface products{
    imageUrl: string;
    heading: string;
    paragraph: string;
}

const Shopex= () => {
  return (
    <section className="max-w-[1177px]  flex flex-col gap-3 mx-auto px-4 xs:py-14 2xl:pt-[150px]">
      {/* Heading */}
      <h2 className="xs:text-[32px] sm:text-[42px] font-bold text-center mb-8">What Shopex Offer!</h2>

      {/* Products Grid */}
      {/* <div className="w-full"> */}
      <div className="lg:max-w-[1177px] w-full mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          <ShopexCard
            key="1"
            imageUrl="./images/shopex1.svg"
           heading="24/7 Support"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
           
          />
          <ShopexCard
            key="2"
            imageUrl="./images/shopex2.svg"
          heading="24/7 Support"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
            
          />
          <ShopexCard
            key="3"
            imageUrl="./images/shopex3.svg"
          heading="24/7 Support"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          
          />
          <ShopexCard
            key="4"
            imageUrl="./images/shopex4.svg"
            heading="24/7 Support"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
        
          />
        </div>
      </div>

    

    
    </section>
  );
};

export default Shopex;
