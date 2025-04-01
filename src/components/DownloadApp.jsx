import React from 'react'
import img from "../assets/images/app/appbg.png";
import appstore from "../assets/images/app/appstore.svg";
import playstore from "../assets/images/app/playstore.svg";
import centerimg from "../assets/images/app/center.png";
import appmockup from "../assets/images/app/MobileImage.png";

const DownloadApp = () => {
  return (
    <div className=' w-full bg white flex justify-center py-4'>
        <div className=' w-full sm:w-10/12 bg-[#DFEFFF] md:rounded-3xl flex shrink-0 flex-col sm:flex-row px-4 py-8 md:p-8 gap-12'>
        <div className=' w-full sm:w-[60%] h-full flex flex-col gap-2 '>
        <div className='flex flex-row '>
        <span className=" text-xl font-semibold text-[#1C1C1B] font-urbanist inline-block">
            The Civil India Mobile App
            <img src={img} alt="Civil India App" className="w-full" />
          </span>
        </div>
        <h2 className=' text-[#1C1C1B] font-bold text-3xl md:text-4xl lg:text-5xl mt-2'>Online learning now in your
        fingertips</h2>
        <div className='w-full flex flex-row gap-8 flex-wrap mt-11 justify-center sm:justify-normal'>
        <a aria-label='Download app from app store'  className=' bg-[#ffffff] rounded-md px-2 hover:drop-shadow-md hover:cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out'>
        <img src={appstore} alt='app-store-link'>

        </img>

        </a>
        <a href="https://play.google.com/store/apps/details?id=com.civil.india.official&hl=en-US" 
  target="_blank" 
  rel="noopener noreferrer" aria-label='Download app from play store' className=' bg-[#ffffff] rounded-md px-2  hover:drop-shadow-md hover:cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out'>
        <img src={playstore} alt='play-store-link'>

        </img>

        </a>
        </div>

        </div>
        <div className=' w-[10%] hidden lg:block my-auto'>
        <img src={centerimg} alt="arrow img" className="w-[100px]" />
        </div>
        <div className='w-[90%] mx-auto md:w-[35%] lg:w-[30%] flex items-center justify-center'>
        <div className=' w-full aspect-square flex items-center justify-center '>
        <img src={appmockup} alt="Civil India app mockup" className="w-[100%]" />
        </div>
        </div>

        </div>
    </div>
  )
}

export default DownloadApp;