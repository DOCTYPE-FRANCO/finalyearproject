import { Church, CrossIcon, Plus, PlusCircle, School, School2 } from "lucide-react";
import React from "react";

function Election() {
    return(
        <div className="mt-20 grid md:grid-cols-3">
            <div className="flex flex-col gap-5 justify-center items-center w-[270px] h-[200px] shadow-gray-400 shadow-2xl rounded-md">
                <p className="font-extrabold text-blue-600 text-2xl">CREATE ELECTION</p>
                <PlusCircle  color="#2563EB" size={54}/>
            </div>

            <div className="flex flex-col gap-5 justify-center items-center w-[270px] h-[200px] shadow-gray-400 shadow-2xl rounded-md">
                <p className="font-extrabold text-blue-600 text-2xl">FACUSSA ELECTIONS</p>
                <School  color="#2563EB" size={54}/>
            </div>

            <div className="flex flex-col gap-5 justify-center items-center w-[270px] h-[200px] shadow-gray-400 shadow-2xl rounded-md">
                <p className="font-extrabold text-blue-600 text-center text-2xl">ACCOUNTING ELECTIONS</p>
                <School2  color="#2563EB" size={54}/>
            </div>

            <div className="flex flex-col gap-5 justify-center items-center w-[270px] h-[200px] shadow-gray-400 shadow-2xl rounded-md">
                <p className="font-extrabold text-blue-600 text-center text-2xl">ALTAR SERVERS ELECTIONS</p>
                <Church  color="#2563EB" size={54}/>
            </div>
        </div>
    );
}

export default Election;