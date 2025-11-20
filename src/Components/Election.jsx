import React, {useState} from "react";
import { Church, PlusCircle, School, School2 } from "lucide-react";


function Election() {
    const [create, setCreate] = useState(false);
    const [facussa, setFacussa] = useState(false);
    const [acc, setAcc] = useState(false);
    const [altar, setAltar] = useState(false);
    
    return(
        <div className="flex flex-col justify-center items-center">
            <p className="text-center font-extrabold text-blue-600 text-3xl mt-20">Create a New Election or Choose a Template</p>
            <div className="grid md:grid-cols-2 gap-10 pt-16">
                <div className="hover:scale-105 transition-all duration-300 flex flex-col gap-5 justify-center items-center w-[330px] h-[150px] shadow-gray-400 shadow-2xl rounded-md">
                    <PlusCircle  color="#2563EB" size={54}/>
                    <p className="font-bold text-blue-600 text-2xl">CREATE ELECTION</p>   
                </div>

                <div className="hover:scale-105 transition-all duration-300 flex flex-col gap-5 justify-center items-center w-[330px] h-[150px] shadow-gray-400 shadow-2xl rounded-md">
                    <School  color="#2563EB" size={54}/>
                    <p className="font-bold text-blue-600 text-2xl">FACUSSA ELECTIONS</p>     
                </div>

                <div className="hover:scale-105 transition-all duration-300 flex flex-col gap-5 justify-center items-center w-[330px] h-[150px] shadow-gray-400 shadow-2xl rounded-md">
                    <School2  color="#2563EB" size={54}/>
                    <p className="font-bold text-blue-600 text-center text-2xl">ACCOUNTING ELECTIONS</p>   
                </div>

                <div className="hover:scale-105 transition-all duration-300 flex flex-col gap-5 justify-center items-center w-[330px] h-[150px] shadow-gray-400 shadow-2xl rounded-md">
                    <Church  color="#2563EB" size={54}/>
                    <p className="font-bold text-blue-600 text-center text-2xl">ALTAR SERVERS ELECTIONS</p>   
                </div>
            </div>
        </div>
    );
}

export default Election;