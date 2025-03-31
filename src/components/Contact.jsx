
import { BsTelephoneX } from "react-icons/bs";

import { MdAddCall } from 'react-icons/md';
const Contact = () => {
  return (
    <div id="contact" className='w-full  flex items-center justify-center py-10 text-white '>
        <div className='w-11/12 lg:w-9/12 bg-blue-700 rounded-4xl flex flex-wrap gap-7'>
            <div className='flex w-full items-center justify-center gap-8 lg:gap-2 flex-wrap lg:justify-between py-8 lg:py-14 px-3 lg:px-10 '>

                <div className=' flex w-full lg:w-[35%] items-center justify-center lg:justify-start gap-7  text-lg lg:text-2xl lg:border-r pr-7 border-gray-400'>
                    <div className='border-2 border-blue-950 rounded-full p-4 lg:p-6 hover:bg-blue-950 transition duration-500 cursor-pointer'><BsTelephoneX /></div>
                    <div>
                    <p className='text-lg lg:text-lg'>Call for more info</p>
                    <p className='text-lg lg:text-lg'>+91 9451395056</p>
                    </div>
                </div>

                <div className=' text-xl lg:text-2xl w-full flex justify-center lg:w-[40%] '>Let&apos;s request a A schedule for Free Consultation</div>

                <div className='w-[80%] lg:w-[15%] flex justify-center lg:justify-end '>
                    <button><div className=" w-full flex items-center gap-2 bg-blue-900 px-5 py-2 rounded-lg ">
                <MdAddCall/> Call Us
                </div></button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Contact