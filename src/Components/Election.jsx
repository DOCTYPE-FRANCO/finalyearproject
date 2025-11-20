import { Church, CrossIcon, Plus, PlusCircle, School, School2 } from "lucide-react";
import React from "react";

function Election() {
    return(
        <div className="flex flex-col justify-center items-center">
            <p className="text-center font-extrabold text-blue-600 text-3xl mt-20">CREATE NEW ELECTION OR SELECT AN EXISTING TEMPLATE</p>
            <div className="grid md:grid-cols-2 gap-5 pt-16">
                <div className="flex flex-col gap-5 justify-center items-center w-[330px] h-[150px] shadow-gray-400 shadow-2xl rounded-md">
                    <PlusCircle  color="#2563EB" size={54}/>
                    <p className="font-extrabold text-blue-600 text-2xl">CREATE ELECTION</p>   
                </div>

                <div className="flex flex-col gap-5 justify-center items-center w-[330px] h-[150px] shadow-gray-400 shadow-2xl rounded-md">
                    <School  color="#2563EB" size={54}/>
                    <p className="font-extrabold text-blue-600 text-2xl">FACUSSA ELECTIONS</p>     
                </div>

                <div className="flex flex-col gap-5 justify-center items-center w-[330px] h-[150px] shadow-gray-400 shadow-2xl rounded-md">
                    <School2  color="#2563EB" size={54}/>
                    <p className="font-extrabold text-blue-600 text-center text-2xl">ACCOUNTING ELECTIONS</p>   
                </div>

                <div className="flex flex-col gap-5 justify-center items-center w-[330px] h-[150px] shadow-gray-400 shadow-2xl rounded-md">
                    <Church  color="#2563EB" size={54}/>
                    <p className="font-extrabold text-blue-600 text-center text-2xl">ALTAR SERVERS ELECTIONS</p>   
                </div>
            </div>
        </div>
    );
}

export default Election;