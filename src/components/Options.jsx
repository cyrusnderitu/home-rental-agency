import React from 'react'
import Flexible from '../assets/Flexible.png'
import Happiness from '../assets/Happiness.png'
import House from '../assets/House.png'
import Roommate from '../assets/Roommate.png'

const Options = () => {
  return (
    <div className='options mob:p-10 md:p-16 lg:p-24 flex justify-center items-center gap-x-8'>
        <div className='options_cont flex mob:flex-col lg:flex-row items-center gap-x-8 gap-y-12'>
            <div className="left flex flex-col justify-center gap-y-[10px]">
                <div className="top flex flex-row gap-x-[10px] items-end">
                    <div className='mob:w-[150px] md:w-[200px] lg:w-[250px] lg:h-[280px] md:h-[250px] mob:h-[200px] relative rounded-lg bg-slate-500'>
                        <img src={Flexible} alt="" className='absolute w-full h-full object-cover rounded-lg object-center'/>
                        <p className='absolute top-4 text-center w-full text-white font-semibold'>Flexible Leases</p>
                    </div>
                    <div className='mob:w-[190px] md:w-[230px] lg:w-[250px] lg:h-[240px] md:h-[220px] mob:h-[180px] relative rounded-lg bg-slate-500'>
                        <img src={Happiness} alt="" className='absolute w-full h-full object-cover rounded-lg object-center'/>
                        <p className='absolute top-4 text-center w-full text-white font-semibold'>7-Day Hapiness Guaranteed</p>
                    </div>
                </div>
                <div className="bottom flex gap-x-[10px]">
                    <div className='mob:w-[190px] md:w-[220px] mob:h-[200px] md:h-[240px] lg:w-[230px] lg:h-[265px] relative rounded-lg bg-slate-500'>
                        <img src={House} alt="" className='absolute w-full h-full object-cover rounded-lg object-center'/>
                        <p className='absolute top-4 text-center w-full text-white font-semibold'>Monthly House Cleaning</p>
                    </div>
                    <div className='relative mob:w-[200px] md:w-[250px] lg:w-[310px] mob:h-[220px] md:h-[280px] lg:h-[300px] rounded-lg bg-slate-500'>
                        <img src={Roommate} alt="" className='absolute w-full h-full object-cover rounded-lg object-center'/>
                        <p className='absolute top-4 text-center w-full text-white font-semibold'>Choose Your Own Roommate</p>
                    </div>
                </div>
            </div>
            <div className="right font-inter">
                <div className='flex flex-col gap-y-4 mob:text-center lg:text-left'>
                    <h1 className='font-extrabold text-black mob:text-2xl md:text-3xl lg:text-4xl'>Flexibility and options  <br /> to suit your lifestyle.</h1>
                    <p className='lg:mb-8 md:mb-2 lg:w-4/5 text-[18191F] mob:w-full mob:px-8 md:px-20 lg:px-0'>You need it ? We got it. We make finding your next home easy, comfortable, and simple. 
                    From our hapinness guarantee to our selective room finder option. We provide you the flexibility
                    that you most desire</p>
                    <div className='w-full flex mob:justify-center lg:justify-start'>
                        <button className='px-4 py-2 border-none bg-[#f4511E] text-white rounded-[10px] w-fit mob:text-[14px] md:text-regular'> Search Rooms</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Options
