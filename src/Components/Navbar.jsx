import React from "react";

function Navbar(){
    return(
        <div>
            <ul className="md:flex flex-row gap-10 hidden">
                <p className="font-bold hover:text-gray-700 hover:cursor-pointer">HOME</p>
                <p className="font-bold hover:text-gray-700 hover:cursor-pointer">ELECTION</p>
                <p className="font-bold hover:text-gray-700 hover:cursor-pointer">CONTACT DEVELOPER</p>
            </ul>
        </div>
    );
}

export default Navbar;