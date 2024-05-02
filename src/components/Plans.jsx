import React from "react";
import single from '../assets/img/single.png'
import double from '../assets/img/double.png'
import triple from '../assets/img/triple.png'

export default function Plans() {
    return(
        <div className="py-[100px] px-2">
            <div className="md:grid grid-cols-3 max-w-[1240px] mx-auto gap-6">
                <div className="shadow-xl my-4 h-[500px] hover:scale-105 duration-500">
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="/" />
                <h2 className='py-8 text-2xl font-bold text-center'>Web development</h2>
                <p className='text-4xl font-bold text-center'>$149</p>
                <div className='font-medium text-center'>
                    <p className='py-2 mx-8 mt-8 border-b'>Lorem Ipsum is simply </p>
                    <p className='py-2 mx-8 border-b'>Lorem Ipsum is simply dummy text of the printing</p>
                    <p className='py-2 mx-8 border-b'>Lorem Ipsum is simply dumm.</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ml-24'>Start Trial</button>    
            </div>
            <div className="shadow-xl my-4 h-[500px] bg-gray-100 hover:scale-105 duration-500">
               <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={double} alt="/" />
                <h2 className='py-8 text-2xl font-bold text-center'>Digital Marketing</h2>
                <p className='text-4xl font-bold text-center'>$149</p>
                <div className='font-medium text-center'>
                    <p className='py-2 mx-8 mt-8 border-b'>Lorem Ipsum is simply </p>
                    <p className='py-2 mx-8 border-b'>Lorem Ipsum is simply dummy text of the printing</p>
                    <p className='py-2 mx-8 border-b'>Lorem Ipsum is simply dumm.</p>
                </div>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ml-24'>Start Trial</button>

            </div>
            <div className="shadow-xl my-4 h-[500px] hover:scale-105 duration-500">
               <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="/" />
                <h2 className='py-8 text-2xl font-bold text-center'>App Development</h2>
                <p className='text-4xl font-bold text-center'>$149</p>
                <div className='font-medium text-center'>
                    <p className='py-2 mx-8 mt-8 border-b'>Lorem Ipsum is simply </p>
                    <p className='py-2 mx-8 border-b'>Lorem Ipsum is simply dummy text of the printing</p>
                    <p className='py-2 mx-8 border-b'>Lorem Ipsum is simply dumm.</p>
                </div>
                 <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ml-24'>Start Trial</button>
            </div>
            </div>

        </div>
    );
}