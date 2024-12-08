import TrendingCard from '@/app/Components/TrendingCard'
interface products{
    image: string;
    title: string;
    description: string;
     price:string;
  }



const Trending = () => {
  return (
    <section className="max-w-[1177] flex flex-col gap-2 mx-auto px-4 pt-[70px]">
    {/* Heading */}
    <h2 className="text-[32px] sm:text-[42px] font-bold text-center">Trending Products</h2>


  

    {/* Products Grid */}

    <div className="lg:max-w-[1177px] w-full mx-auto py-14">

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-9 justify-items-center gap-y-[90px]">
    <TrendingCard
      key="1"
      image="./images/trend1.svg"
      title="Cantilever chair"
      price="$42.00"
    />
    <TrendingCard
      key="2"
      image="./images/trend2.svg"
      title="Cantilever chair"
      price="$42.00"
    />
    <TrendingCard
      key="3"
      image="./images/trend3.svg"
      title="Cantilever chair"
      price="$42.00"
    />
      <TrendingCard
      key="3"
      image="./images/trend4.svg"
      title="Cantilever chair"
      price="$42.00"
    />

  </div>
</div>






 
  </section>
  )
}

export default Trending;