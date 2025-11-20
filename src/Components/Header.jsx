import React from "react";
import Logo from "../assets/SE-logo.png"
import { Link } from "react-router-dom";

function Header() {
    return(
        <div className="flex items-center justify-between top-4 fixed w-[80vw] h-[50px] bg-gray-600/10 z-50 left-1/2 transform -translate-x-1/2 rounded-2xl backdrop-blur-sm">
            <div className="ml-4">
                <img src={Logo} className="w-[65px]" />
            </div>

            <Link to="/election">
                <p className="text-sm flex justify-center items-center rounded-sm mr-7 bg-blue-500 w-[120px] h-[30px] text-white font-bold hover:scale-110 transition-all duration-300 hover:cursor-pointer">GET STARTED</p>
            </Link>
        </div>
    );
}

export default Header