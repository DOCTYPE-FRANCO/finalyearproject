import React from "react";
import { Link } from "react-router-dom";
function Herosection (){
    return(
        <div>
            <div className="flex flex-col gap-8 justify-center items-center">
                <p className="md:text-5xl text-3xl font-bold md:max-w-[900px] max-w-[440px]: text-center">Secure, Fast & Transperent Digital Voting for Organizations</p>
                <p className="md:max-w-[570px] max-w-[350px] text-center text-blue-800 font-thin">A secure and user-friendly digital voting platform for students and staff. It streamlines elections with encrypted voting, simple access from any device, and fast, accurate result collation. The system ensures integrity, transparency, and a smooth voting experience for the entire institution.</p>
            </div>

            <div className="flex justify-center pt-6 gap-4">
                <Link to="/election">
                    <button className="w-[170px] h-[45px] bg-blue-600 rounded-sm text-white hover:scale-110 transition-all duration-300">GET STARTED</button>
                </Link>
                <a href="#How" className="flex justify-center items-center w-[170px] h-[45px] border border-blue-600 rounded-sm text-blue-600 hover:bg-blue-600 transition-all duration-1000 hover:text-white">LEARN MORE</a>
            </div>
        </div>
    );
}

export default Herosection