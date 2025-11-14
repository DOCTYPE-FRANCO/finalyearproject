import React from "react";
import Robot from "../assets/robot.svg"
import Access from "../assets/Access.svg"
import Secure from "../assets/secure.svg"
import Herosection from "./Herosection";
function Homepage() {
    return(
        <div className="pt-26">
            <Herosection />

            <div className="flex justify-center gap-16 md:flex-row  mt-24">
                <div className="flex flex-col gap-5 justify-center items-center shadow-2xl shadow-gray-700 w-[200px] h-[200px] rounded-md">
                    <img src={Secure} className="w-[100px]"/>
                    <p className="font-bold">Secure Digital Voting</p>
                </div>

                <div className="flex flex-col gap-5 justify-center items-center shadow-2xl shadow-gray-700 w-[200px] h-[200px] rounded-md">
                    <img src={Robot} className="w-[100px]"/>
                    <p className="font-bold">Automated Vote Count</p>
                </div>

                <div className="flex flex-col gap-5 justify-center items-center shadow-2xl shadow-gray-700 w-[200px] h-[200px] rounded-md">
                    <img src={Access} className="w-[100px]"/>
                    <p className="font-bold">Multi-Level Access</p>
                </div>
            </div>
        </div>
    );

}

export default Homepage;