import React, {useState} from "react";
import { Church, PlusCircle, School, School2, X, XCircle, XIcon } from "lucide-react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

function Election() {
    const [create, setCreate] = useState(true);
    const [facussa, setFacussa] = useState(false);
    const [acc, setAcc] = useState(false);
    const [altar, setAltar] = useState(false);
    
    return(
        <div className="flex flex-col justify-center items-center">
            <p className="text-center font-extrabold text-blue-600 text-3xl mt-20">Create a New Election or Choose a Template</p>
            <div className="grid md:grid-cols-2 gap-10 pt-16">
                <div onClick={() => setCreate(true)} className="hover:scale-105 transition-all duration-300 flex flex-col gap-5 justify-center items-center w-[330px] h-[150px] shadow-gray-400 shadow-2xl rounded-md">
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

            {create && (
                <div className="fixed top-20 rounded-md w-[80vw] h-[80vh] bg-blue-600/20 backdrop-blur-sm">
                    <div className="flex  justify-between px-5 pt-1 pb-2">
                        <p className="text-2xl font-extrabold">CREATE ELECTION</p>
                        <X onClick={() => setCreate(false)}/>
                    </div>

                    <form>
                        <label>
                            Election Title
                            <input type="text"/>
                        </label>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Election;