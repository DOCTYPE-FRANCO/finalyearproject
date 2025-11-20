import { Plus } from "lucide-react";
import React from "react";

function Election() {
    return(
        <div>
            <div className="flex flex-col w-[350px] h-[300px] shadow-gray-400 shadow-2xl">
                <Plus />
                <p>Create Election</p>
            </div>
        </div>
    );
}

export default Election;