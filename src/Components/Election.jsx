import { CrossIcon, Plus, PlusCircle } from "lucide-react";
import React from "react";

function Election() {
    return(
        <div className="mt-20">
            <div className="flex flex-col gap-3 justify-center items-center w-[270px] h-[200px] shadow-gray-400 shadow-2xl rounded-md">
                <p className="font-extrabold text-blue-600 text-2xl">CREATE ELECTION</p>
                <PlusCircle  color="#2563EB" size={54}/>
            </div>
        </div>
    );
}

export default Election;