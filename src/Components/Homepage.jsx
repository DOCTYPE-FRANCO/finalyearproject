import React, {useEffect, useRef} from "react";
import Robot from "../assets/robot.svg"
import Access from "../assets/Access.svg"
import Secure from "../assets/secure.svg"
import Herosection from "./Herosection";
import { motion, useInView, useAnimation } from "framer-motion";
function Homepage() {
    const ref = useRef(null);
    const isinView = useInView(ref);
    const mainControls = useAnimation();

    const variants1 = {
        hidden: {opacity: 0, x: 75},
        visible: {opacity: 1, x: 0}
    }

    useEffect(() => {
        if(isinView){
            mainControls.start("visible");
        }
    }, [isinView]);

    return(
        <div className="pt-26">
            <Herosection />

            <div className="flex justify-center gap-16 md:flex-row  mt-24">
                <div className="flex flex-col gap-5 justify-center items-center shadow-2xl shadow-gray-700 w-[200px] h-[170px] rounded-md">
                    <img src={Secure} className="w-[70px]"/>
                    <p className="font-bold">Secure Digital Voting</p>
                </div>

                <div className="flex flex-col gap-5 justify-center items-center shadow-2xl shadow-gray-700 w-[200px] h-[170px] rounded-md">
                    <img src={Robot} className="w-[70px]"/>
                    <p className="font-bold">Automated Vote Count</p>
                </div>

                <div className="flex flex-col gap-5 justify-center items-center shadow-2xl shadow-gray-700 w-[200px] h-[170px] rounded-md">
                    <img src={Access} className="w-[70px]"/>
                    <p className="font-bold">Multi-Level Access</p>
                </div>
            </div>

            <h1 className="text-4xl flex justify-center mt-26">HOW IT WORKS</h1>

            
            <motion.div
                id="How"
                ref={ref}
                initial = "hidden"
                animate = {mainControls}
                variants={{
                    hidden:{opacity: 0},
                    visible:{opacity: 1, transition: {staggerChildren: 0.5}}
                }}
                className="flex md:flex-row justify-center gap-5 mt-10"
            >
                <motion.div
                    variants={variants1} 
                    className="w-[250px] h-[250px] bg-white flex flex-col justify-start gap-5 pt-6 items-center shadow-2xl shadow-gray-400 rounded-md"
                >
                    <div className="flex justify-center items-center text-2xl text-white bg-blue-600 w-[60px] h-[60px] rounded-full">1</div>
                    <p className="text-2xl font-bold">Create Election</p>
                    <p className="text-center text-sm font-thin">Admin sets positions, candidates, and timelines</p>
                </motion.div>

                <motion.div 
                    variants={variants1} 
                    className="w-[250px] h-[250px] bg-white flex flex-col justify-start gap-5 pt-6 items-center shadow-2xl shadow-gray-400 rounded-md"
                >
                    <div className="flex justify-center items-center text-2xl text-white bg-blue-600 w-[60px] h-[60px] rounded-full">2</div>
                    <p className="text-2xl font-bold">Verify Voters</p>
                    <p className="text-center text-sm font-thin">A form of Identification must be provided e.d ID cards</p>
                </motion.div>

                <motion.div 
                    variants={variants1} 
                    className="w-[250px] h-[250px] bg-white flex flex-col justify-start gap-5 pt-6 items-center shadow-2xl shadow-gray-400 rounded-md"
                >
                    <div className="flex justify-center items-center text-2xl text-white bg-blue-600 w-[60px] h-[60px] rounded-full">3</div>
                    <p className="text-2xl font-bold">Cast Vote Securely</p>
                    <p className="text-center text-sm font-thin w-[95vw]">Voters cast their vote securely</p>
                </motion.div>

                <motion.div 
                    variants={variants1} 
                    className="w-[250px] h-[250px] bg-white flex flex-col justify-start gap-5 pt-6 items-center shadow-2xl shadow-gray-400 rounded-md"
                >
                    <div className="flex justify-center items-center text-2xl text-white bg-blue-600 w-[60px] h-[60px] rounded-full">4</div>
                    <p className="text-2xl text-center font-bold">Auto Generated Results</p>
                    <p className="text-center text-sm font-thin">At the end of the voting session, the results are automatically collated </p>
                </motion.div>
            </motion.div>
            
        </div>
    );

}

export default Homepage;