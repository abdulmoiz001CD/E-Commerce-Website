'use client'
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";


interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string | number;

}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, price,}) => {
  return (
    <div className="group relative flex flex-col w-[270px] bg-[#F6F7FB] rounded-lg shadow-lg border border-white overflow-hidden items-center justify-center text-center transition-transform hover:scale-105">
      {/* Image Section */}
      <div className="relative h-[236px] w-[178px] m-[20px] mx-[50px] flex items-center justify-center bg-[#F6F7FB]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Hover Cart Icon */}
      <FiShoppingCart
        className="absolute top-4 right-4 text-2xl hover:text-[#ce8346] hidden group-hover:block transition-opacity duration-300"
      />

      {/* Content Section */}
      <div className="p-4 flex flex-col items-center gap-4 bg-white w-full">
        <h3 className="font-bold text-lg mt-2 text-red">{title}</h3>
        <div className="flex items-center gap-1 justify-center">
          <div className="w-[14px] h-1 bg-[#05E6B7]"></div>
          <div className="w-[14px] h-1 bg-[#F701A8]"></div>
          <div className="w-[14px] h-1 bg-[#FFEAC1]"></div>
          <div className="w-[14px] h-1 bg-gray-300"></div>
        </div>
        <p className="text-600 text-sm text-[#151875]">{description}</p>
        <p className="text-600 text-sm text-[#151875]">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
