import { Plus } from "lucide-react";
import React from "react";

function Election() {
    return(
        <div className="mt-20">
            <div className="flex flex-col justify-center items-center w-[300px] h-[250px] shadow-gray-400 shadow-2xl rounded-md">
                <p className="font-extrabold text-blue-600 text-2xl">CREATE ELECTION</p>
                <Plus  color="#0000FF" size={64}/>
            </div>
        </div>
    );
}

export default Election;