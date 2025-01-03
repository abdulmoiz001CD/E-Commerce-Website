import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"


const Discount = () => {
  const cards = [
    {
      image: "/images/card1.jpg",
      title: "20% Off On Tank Tops",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      image: "/images/card2.jpg", 
      title: "Latest Trending",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      image: "/images/card3.jpg",
      title: "Bestseller Products",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ];

  return (
    <section className="flex flex-col xl:flex-row items-center gap-9 xl:gap-3 justify-between max-w-[1177px] mx-auto   py-8 sm:py-12">
      {/* First Division */}
      <div className="max-w-[420px] h-[270px] w-full mb-8 sm:mb-12 flex flex-col items-baseline pl-6 pt-14 bg-[#FFF6FB]">
      
          <h2 className="text-[26px] font-[600px] pl-3">20% Off On Latest Products</h2>


       <div className='flex justify-between gap-14 w-full'>
       <Button className='text-[#FB2E86] text-[16px] shadow-none border-none bg-[#FFF6FB]'>Shop Now</Button>
       <div className="w-full md:w-1/2 mt-6 md:mt-0  ">
          <Image
            src="/images/off1.svg"
            alt="Offer Image"
            width={213}
            height={207}
            className="w-full object-cover rounded-lg"
          />
        </div>



       </div>

        
      </div>



      {/* Second Division */}
      <div className="max-w-[420px] h-[270px] w-full mb-8 sm:mb-12 flex flex-col items-baseline pl-6 pt-14 bg-[#EEEFFB]">
          <h2 className="text-[26px] font-[600px] pl-3">20% Off On Latest Products</h2>
          
       
  


         <div className='flex  justify-between gap-14 w-full'>
       <Button className='text-[#FB2E86] text-[16px] shadow-none border-none bg-[#EEEFFB]'>Shop Now</Button>
       <div className="w-full md:w-1/2 mt-6 md:mt-0  pt-12 pr-9">
          <Image
            src="/images/off2.svg"
            alt="Offer Image"
            width={213}
            height={207}
            className="w-full object-cover rounded-lg"
          />
        </div>



       </div>
      </div>

      {/* Third Division - Cards */}
    <div className='flex flex-col sm:flex-row xl:flex-col gap-4 sm:gap-6 xl:gap-8 justify-between items-center min-h-[270px] w-full px-4 sm:px-6 xl:pb-9'>
    {/* Card 1 */}
    <div className="flex justify-between w-full sm:w-[267px] h-[74px] relative">
        <div className='w-[107px] h-[74px] bg-[#F7F7F7] flex items-center justify-center'>
            <Image 
                src="./images/offCard1.svg" 
                alt="Image" 
                width={70} 
                height={34} 
                className="object-contain"
            />
        </div>
        <div className="flex flex-col justify-center flex-1 pl-4">
            <h3 className="text-[14px] md:text-[10px] xl:text-[16px] font-semibold">Executive Seat chair</h3>
            <p className="text-[11px]  md:text-[9px] xl:text-[12px] text-gray-600">$32.00</p>
        </div>
    </div>

    {/* Card 2 */}
    <div className="flex justify-between w-full sm:w-[267px] h-[74px] relative">
        <div className='w-[107px] h-[74px] bg-[#F7F7F7] flex items-center justify-center'>
            <Image 
                src="./images/offCard2.svg" 
                alt="Image" 
                width={70} 
                height={34} 
                className="object-contain"
            />
        </div>
        <div className="flex flex-col justify-center flex-1 pl-4">
            <h3 className="text-[14px] md:text-[10px] xl:text-[16px] font-semibold">Executive Seat chair</h3>
            <p className="text-[11px]  md:text-[9px] xl:text-[12px] text-gray-600">$32.00</p>
        </div>
    </div>

    {/* Card 3 */}
    <div className="flex justify-between w-full sm:w-[267px] h-[74px] relative">
        <div className='w-[107px] h-[74px] bg-[#F7F7F7] flex items-center justify-center'>
            <Image 
                src="./images/offCard3.svg" 
                alt="Image" 
                width={70} 
                height={34} 
                className="object-contain"
            />
        </div>
        <div className="flex flex-col justify-center flex-1 pl-4">
            <h3 className="text-[14px] md:text-[10px] xl:text-[16px] font-semibold">Executive Seat chair</h3>
            <p className="text-[11px] md:text-[9px] xl:text-[12px] text-gray-600">$32.00</p>
        </div>
    </div>
</div>



    
    </section>
  );
};

export default Discount;
