import React from "react";


export default function NewsLetter() {
    return(
        <div className=" bg-[#2699fb] p-4">
            <div className="max-w-[1240px] mx-auto md:flex justify-between py-[50px]">
                <div className="m-2">
                    <h1 className="text-[20px] md:text-[40px] font-bold text-white">Want to learn I.T skills?</h1>
                    <span className="text-white">
                        Sign up to our newsletter and stay up to date.
                    </span>
                </div>
                <div className="m-2">
                    <input type="text" className="p-3 mb-2 mr-2 rounded sm:w-full text-slate-600" placeholder="Email" />
                    <button className="p-3 text-white bg-black rounded">Get started</button>
                    <br/>
                    <p className="text-white">
                      We care bout the protection of your data. Read our <br/> <a href="" className="text-black"> 
                      Privacy Policy.</a> 
                    </p>
                </div>
            </div>
        </div>
    );
}