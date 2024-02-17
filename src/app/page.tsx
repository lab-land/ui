import Navbar from '@/components/navbar'
import Categories from '@/components/categories'
import OffersIphone from '@/components/offers-iphone'
import CaruselIphones from '@/components/carousel-iphones'
import WathcCarousel from '@/components/watch-carosel'
<<<<<<< HEAD
import Image from 'next/image'
import newletter from '../../public/newletter.png'
import { Button, Input } from '@/components/ui'
=======
import { IconLupa } from '@/components/icons'
import Banner from '@/components/banner'
>>>>>>> ab08d0a792f15b1679e40089f4ad96e686c1ca30

export default function Home() {
  return (
    <>
      <div className='bghomegradient bg-cover md:bg-container w-full bg-no-repeat  lg:bg-center lg:bg-cover'>
        <header>
          <Navbar textColor='text-white' />
        </header>
        <section className='text-white p-4 md:px-24  flex justify-center h-[100dvh] items-center '>
          <div className='  w-full  md:w-5/5  lg:w-4/5 flex flex-col  gap-6 lg:gap-10'>
            <div className='   bg-opacity-50    rounded-lg shadow-2xl p-8 flex flex-col gap-8  transition-all duration-1000 ease-in-out  '>
              <h1 className='text-3xl text-wrap  text-center  md:text-[3rem] lg:text-[3.8rem]  font-bold leading-none'>
                Discover The Best Selling And Affordable Products
              </h1>
              <p className='text-white text-base text-wrap  leading-snug'>
                Find here the best products on the market, reliable and
                affordable. Us Focus on product quality. Here you can find all
                the products manufactured by the top brands, even those that
                officially stopped selling. SOUTHWEST Why wait? Place your order
                now!
              </p>
            </div>

            <div className='w-full  flex  md:flex-row items-center md:gap-6 justify-around bg-white py-2 px-1 rounded-2xl'>
              <div className='flex items-center gap-10 justify-between '>
                <IconLupa />
                <input
                  type='text'
                  placeholder='Find the best product'
                  className='placeholder:text-gray-dark placeholder:font-bold  md:placeholder:text-[16px]  md:placeholder:text-center lg:placeholder:text-[18px] text-gray-dark focus:outline-none   focus:border-none  px-2 py-1 w-full'
                />
              </div>
              <Button className='bg-[#1c4060] text-white py-3 font-light rounded-2xl hover:bg-opacity-75 hover:bg-black w-1/4 md:w-1/3 transition-all duration-1000 ease-in-out'>
                Search
              </Button>
            </div>
          </div>
        </section>
      </div>

<<<<<<< HEAD
        <AppleWatch />
        <WathcCarousel />
        <div className='absolute inset-y-0 z-3 right-0 w-1/12 md:w-[11%] bg-gradient-to-l from-white to-transparent'></div>
      </section>
      <section className='p-10 md:p-20 bg-gray'>
        <div className='bg-white rounded-lg md:flex p-5'>
          <div className='w-full md:w-1/2 p-9 text-center md:text-left md:pl-10 lg:pl-20 flex flex-col gap-3 justify-center'>
            <h2 className='font-bold text-xl sm:text-3xl md:text-2xl lg:text-3xl'>
              Subscribe To Newsletter
            </h2>
            <p className='text-gray-dark font-semibold text-xs md:text-xs lg:text-sm '>
              Get free guide about smart watches daily.{' '}
            </p>
            <div className='w-full  flex  md:flex-row items-center md:gap-6 justify-around shadow-md bg-gray py-2 px-1 rounded-lg'>
              <div className='flex items-center gap-10 justify-between '>
                <input
                  type='text'
                  placeholder='Enter Email Address'
                  className='placeholder:text-gray-dark bg-gray placeholder:font-bold  md:placeholder:text-[12px] lg:placeholder:text-[14px] text-gray-dark focus:outline-none px-2  focus:border-none py-1 w-full'
                />
              </div>
              <Button className='bg-purple text-white py-2 font-light rounded-lg hover:bg-opacity-75 w-1/4 md:w-1/3 transition-all duration-1000 ease-in-out md:text-xs lg:text-sm'>
                Subscribe
              </Button>
            </div>
          </div>
          <div className='w-full md:w-1/2'>
            <Image src={newletter} alt='imagen de newletter' />
          </div>
        </div>
      </section>
=======
      <Categories />
      <OffersIphone />
      <CaruselIphones />
      <Banner />
      <WathcCarousel />
>>>>>>> ab08d0a792f15b1679e40089f4ad96e686c1ca30
    </>
  )
}
