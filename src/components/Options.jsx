import React from 'react'
import Flexible from '../assets/Flexible.png'
import Happiness from '../assets/Happiness.png'
import House from '../assets/House.png'
import Roommate from '../assets/Roommate.png'

const Options = () => {
  return (
    <div className='options p-24 flex justify-center items-center gap-x-8'>
        <div className='options_cont flex items-center gap-x-8'>
            <div className="left flex flex-col flex-1 justify-center gap-y-[10px]">
                <div className="top flex flex-row gap-x-[10px] items-end">
                    <div className='w-[250px] h-[280px] relative rounded-lg bg-slate-500'>
                        <img src={Flexible} alt="" className='absolute w-full h-full object-cover rounded-lg object-center'/>
                        <p className='absolute top-4 text-center w-full text-white font-semibold'>Flexible Leases</p>
                    </div>
                    <div className='w-[250px] h-[240px] relative rounded-lg bg-slate-500'>
                        <img src={Happiness} alt="" className='absolute w-full h-full object-cover rounded-lg object-center'/>
                        <p className='absolute top-4 text-center w-full text-white font-semibold'>7-Day Hapiness Guaranteed</p>
                    </div>
                </div>
                <div className="bottom flex gap-x-[10px]">
                    <div className='w-[230px] h-[265px] relative rounded-lg bg-slate-500'>
                        <img src={House} alt="" className='absolute w-full h-full object-cover rounded-lg object-center'/>
                        <p className='absolute top-4 text-center w-full text-white font-semibold'>Monthly House Cleaning</p>
                    </div>
                    <div className='relative w-[310px] h-[300px] rounded-lg bg-slate-500'>
                        <img src={Roommate} alt="" className='absolute w-full h-full object-cover rounded-lg object-center'/>
                        <p className='absolute top-4 text-center w-full text-white font-semibold'>Choose Your Own Roommate</p>
                    </div>
                </div>
            </div>
            <div className="right font-inter flex-1 flex flex-col gap-y-4 justify-center ml-20">
                <h1 className='font-extrabold text-black text-4xl'>Flexibility and options  <br /> to suit your lifestyle.</h1>
                <p className='mb-8 w-4/5 text-[18191F]'>You need it ? We got it. We make finding your next home easy, comfortable, and simple. 
                From our hapinness guarantee to our selective room finder option. We provide you the flexibility
                that you most desire</p>

                <button className='px-4 py-2 border-none bg-[#f4511E] text-white rounded-[10px] w-fit'> Search Rooms</button>
            </div>
        </div>
    </div>
  )
}

export default Options