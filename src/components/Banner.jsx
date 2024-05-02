import React from "react";
import {ReactTyped, Typed} from "react-typed";

export default function Banner() {
    return(

        <div className="bg-[#2699fb] w-full py-[100px]">

            <div className="max-w-[1240%] max-auto text-center font-bold py-[100px]">
                <div className="text-xl md:p-[24px] md:text-3xl">
                    Learn with us
                </div>

                <div className="text-5xl md:text-[80px]  text-white md:p-[24px]">
                    Growth with us.
                </div>

                <div className="text-[20px] md:text-[50px] text-white md:p-[24px]">
                    Learn   <ReactTyped
                       
                       strings={["Web Development", "Digital Marketing", "Ethical Hacking"]}
                       typeSpeed={100}
                       loop={true}
                       backSpeed={120}
                    />
                </div>
                <button className="p-3 text-white bg-black rounded">Get started</button>
            </div>

        </div>

    );
}