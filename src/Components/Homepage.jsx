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
                <div className="flex flex-col gap-5 justify-center items-center shadow-2xl shadow-gray-700 w-[200px] h-[170px] rounded-md">
                    <img src={Secure} className="w-[70px]"/>
                    <p className="font-bold">Secure Digital Voting</p>
                </div>

                <div className="flex flex-col gap-5 justify-center items-center shadow-2xl shadow-gray-700 w-[200px] h-[170px] rounded-md">
                    <img src={Robot} className="w-[70px]"/>
                    <p className="font-bold">Automated Vote Count</p>
                </div>

                <div className="flex flex-col gap-5 justify-center items-center shadow-2xl shadow-gray-700 w-[200px] h-[170px] rounded-md">
                    <img src={Access} className="w-[70px]"/>
                    <p className="font-bold">Multi-Level Access</p>
                </div>
            </div>

            <h1 className="text-4xl flex justify-center mt-26">HOW IT WORKS</h1>

            <div>
                <div className="flex md:flex-row justify-center gap-5 mt-10">
                    <div className="w-[250px] h-[250px] bg-white flex flex-col items-center justify-center shadow-2xl shadow-gray-400 rounded-md">
                        <div className="flex justify-center items-center text-2xl text-white bg-blue-600 w-[60px] h-[60px] rounded-full">1</div>
                        <p className="text-2xl font-bold">Create Election</p>
                        <p className="text-center text-sm font-thin">Admin sets positions, candidates, and timelines</p>
                    </div>

                     <div className="w-[250px] h-[250px] bg-white flex flex-col items-center justify-center shadow-2xl shadow-gray-400 rounded-md">
                        <div className="flex justify-center items-center text-2xl text-white bg-blue-600 w-[60px] h-[60px] rounded-full">2</div>
                        <p className="text-2xl font-bold">Verify Voters</p>
                        <p className="text-center text-sm font-thin">A form of Identification must be provided e.d ID cards</p>
                    </div>

                     <div className="w-[250px] h-[250px] bg-white flex flex-col items-center justify-center shadow-2xl shadow-gray-400 rounded-md">
                        <div className="flex justify-center items-center text-2xl text-white bg-blue-600 w-[60px] h-[60px] rounded-full">3</div>
                        <p className="text-2xl font-bold">Cast Vote Securely</p>
                        <p className="text-center text-sm font-thin">Voters cast their vote securely</p>
                    </div>

                     <div className="w-[250px] h-[250px] bg-white flex flex-col items-center justify-center shadow-2xl shadow-gray-400 rounded-md">
                        <div className="flex justify-center items-center text-2xl text-white bg-blue-600 w-[60px] h-[60px] rounded-full">4</div>
                        <p className="text-2xl font-bold">Auto Generated Results</p>
                        <p className="text-center text-sm font-thin">At the end of the votting session, the results are automatically collated </p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Homepage;