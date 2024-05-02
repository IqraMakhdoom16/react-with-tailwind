import React from "react";
import laptop from "../assets/img/laptop.jpg"

export default function Experts() {
    return(
        
        <div className="max-w-[1240%] p-2 mx-auto my-10  md:grid grid-cols-2">
            <div className="  col-span-1 md:w-[80%] text-center">
                <img src={laptop} className="inline" />
            </div>
            <div className="flex flex-col justify-center col-span-1 ">
                <h1 className="text-[#00df9a] font-bold my-2">LEARN FROM EXPERTS</h1>
                <p className="my-2 text-justifyed">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took a galley of type it to make a type specimen book.
                </p>
                <button className="w-[30%] p-3 text-white bg-black rounded">Get started</button>
            </div>
             
        </div>
        
    );
}