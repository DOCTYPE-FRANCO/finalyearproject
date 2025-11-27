import React, {useState} from "react";
import { Church, PlusCircle, School, School2, X, XCircle, XIcon } from "lucide-react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

function Election() {
    const [create, setCreate] = useState(false);
    const [facussa, setFacussa] = useState(false);
    const [acc, setAcc] = useState(false);
    const [altar, setAltar] = useState(false);

    const [createForm, setCreateForm] = useState({
        electionTitle: "",

    });

    const [positions, setPositions] = useState([
        {
            positionName: "",
            candidates: [""]
        }
    ]);

    const [accPositions, setAccPositions] = useState([
        {
            positionName: "President",
            candidates: [""]
        },

        {
            positionName: "Vice-President",
            candidates: [""]
        },

        {
            positionName: "General-Secretary",
            candidates: [""]
        },

        {
            positionName: "Assistant-General-Secretary",
            candidates: [""]
        },

        {
            positionName: "Provost",
            candidates: [""]
        },

        {
            positionName: "Public-Relations-Officer",
            candidates: [""]
        },

        {
            positionName: "Treasurer",
            candidates: [""]
        },

        {
            positionName: "Financial Secretary",
            candidates: [""]
        },

        {
            positionName: "Welfare Male",
            candidates: [""]
        },

        {
            positionName: "Welfare Female",
            candidates: [""]
        },
    ]);

    
   


    function handleChange(e){
        const {name, value} = e.target;
        setCreateForm(prev => ({
            ...prev,
            [name] : value
        }));
    }

    function addPosition() {
        setPositions([...positions, { positionName: "", candidates: [""] }]);
    };

    function addCandidate(posIndex) {
        const updated = [...positions];
        updated[posIndex].candidates.push("");
        setPositions(updated);
    };

    function handlePositionChange(e, posIndex) {
        const updated = [...positions];
        updated[posIndex].positionName = e.target.value;
        setPositions(updated);
    };

    function handleCandidateChange(e, posIndex, candIndex) {
        const updated = [...positions];
        updated[posIndex].candidates[candIndex] = e.target.value;
        setPositions(updated);
    };

    function addAccPosition() {
        setAccPositions([...accPositions, { positionName: "", candidates: [""] }]);
    };

    function addAccCandidate(posIndex) {
        const updated = [...accPositions];
        updated[posIndex].candidates.push("");
        setAccPositions(updated);
    };

    function handleAccPositionChange(e, posIndex) {
        const updated = [...accPositions];
        updated[posIndex].positionName = e.target.value;
        setAccPositions(updated);
    };

    function handleAccCandidateChange(e, posIndex, candIndex) {
        const updated = [...accPositions];
        updated[posIndex].candidates[candIndex] = e.target.value;
        setAccPositions(updated);
    };

    




        
    return(
        <div className="flex flex-col justify-center items-center ">
            <p className="text-center font-extrabold text-blue-600 text-3xl mt-20">Create a New Election or Choose a Template</p>
            <div className="grid md:grid-cols-2 gap-10 pt-16">
                <div onClick={() => setCreate(true)} className="hover:scale-105 transition-all duration-300 flex flex-col gap-5 justify-center items-center w-[330px] h-[150px] shadow-gray-400 shadow-2xl rounded-md">
                    <PlusCircle  color="#2563EB" size={34}/>
                    <p className="font-bold text-blue-600">CREATE ELECTION</p>   
                </div>

                <div onClick={() => setFacussa(true)} className="hover:scale-105 transition-all duration-300 flex flex-col gap-5 justify-center items-center w-[330px] h-[150px] shadow-gray-400 shadow-2xl rounded-md">
                    <School  color="#2563EB" size={34}/>
                    <p className="font-bold text-blue-600">FACUSSA ELECTIONS</p>     
                </div>

                <div onClick={() => setAcc(true)} className="hover:scale-105 transition-all duration-300 flex flex-col gap-5 justify-center items-center w-[330px] h-[150px] shadow-gray-400 shadow-2xl rounded-md">
                    <School2  color="#2563EB" size={34}/>
                    <p className="font-bold text-blue-600 text-center">AUASA ELECTIONS</p>   
                </div>

                <div onClick={() => setAltar(true)} className="hover:scale-105 transition-all duration-300 flex flex-col gap-5 justify-center items-center w-[330px] h-[150px] shadow-gray-400 shadow-2xl rounded-md">
                    <Church  color="#2563EB" size={34}/>
                    <p className="font-bold text-blue-600 text-center">ALTAR SERVERS ELECTIONS</p>   
                </div>
            </div>

            <AnimatePresence >

                {create && (
                    <motion.div 
                        initial={{opacity: 0, y: -75}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.4}}
                        exit={{opacity: 0, y: 75}}
                        className=" absolute top-20 rounded-md w-[80vw] min-h-[80vh] bg-blue-600/20 backdrop-blur-sm "
                    >
                        <div className="flex  justify-between px-5 pt-2 pb-5">
                            <p className="text-2xl font-extrabold">CREATE ELECTION</p>
                            <X onClick={() => setCreate(false)}/>
                        </div>

                        <form className="px-5 flex flex-col gap-3">
                            <label className="flex flex-col gap-2 font-bold mb-10">
                                Election Title
                                <input 
                                    type="text"
                                    name="electionTitle"
                                    value={createForm.electionTitle}
                                    onChange={handleChange}
                                    className="pl-5 w-[350px] h-[35px] font-semibold text-sm bg-white focus:outline-none focus:ring-0 focus:border-transparent"
                                />
                            </label>

                        </form>

                        <div className="grid grid-cols-2 mx-auto">
                            {positions.map((pos, posIndex) => (
                                <div key={posIndex} className="p-4 rounded-md mb-5">
                                    <input
                                        type="text"
                                        placeholder="Position Name"
                                        value={pos.positionName}
                                        onChange={(e) => handlePositionChange(e, posIndex)}
                                        className="ml-10 w-[300px] h-[30px] mb-3 bg-white text-center focus:outline-none focus:ring-0 focus:border-transparent"
                                    />

                                    <div className="grid grid-cols-2 gap-2 w-[400px]">
                                        {pos.candidates.map((cand, candIndex) => (
                                            <input
                                                key={candIndex}
                                                type="text"
                                                placeholder="Candidate Name"
                                                value={cand}
                                                onChange={(e) => handleCandidateChange(e, posIndex, candIndex)}
                                                className="w-[170px] h-[30px] bg-white text-center focus:outline-none focus:ring-0 focus:border-transparent"
                                            />
                                        ))}
                                    </div>

                                    {/* Add Candidate */}
                                    <button
                                        type="button"
                                        onClick={() => addCandidate(posIndex)}
                                        className="mt-2 text-blue-600"
                                    >
                                        + Add Candidate
                                    </button>

                                </div>
                            ))}
                        </div>

                        
                       <div className="flex justify-between px-5 mt-4">
                            <button
                                type="button"
                                onClick={addPosition}
                                className=" text-green-600"
                            >
                                + Add Position
                            </button>

                            <button
                                type="button"
                                className="w-[120px] h-[35px] bg-blue-500 text-white rounded-md font-bold hover:scale-110 hover:cursor-pointer transition-all duration-300"
                            >
                                CREATE
                            </button>   
                       </div>

                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence >

                {acc && (
                    <motion.div 
                        initial={{opacity: 0, y: -75}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.4}}
                        exit={{opacity: 0, y: 75}}
                        className=" absolute top-20 rounded-md w-[80vw] min-h-[80vh] bg-blue-600/20 backdrop-blur-sm "
                    >
                        <div className="flex  justify-between px-5 pt-2 pb-5">
                            <p className="text-2xl font-extrabold">AUASA ELECTION</p>
                            <X onClick={() => setAcc(false)}/>
                        </div>

                        <div className="grid grid-cols-2 items-center justify-center">
                            {accPositions.map((pos, posIndex) => (
                                <div key={posIndex} className="p-4 rounded-md mb-5">
                                    <input
                                        type="text"
                                        placeholder="Position Name"
                                        value={pos.positionName}
                                        onChange={(e) => handleAccPositionChange(e, posIndex)}
                                        className="font-bold ml-10 w-[300px] h-[30px] mb-3 bg-white text-center focus:outline-none focus:ring-0 focus:border-transparent"
                                    />

                                    <div className="grid grid-cols-2 gap-2 w-[400px]">
                                        {pos.candidates.map((cand, candIndex) => (
                                            <input
                                                key={candIndex}
                                                type="text"
                                                placeholder="Candidate Name"
                                                value={cand}
                                                onChange={(e) => handleAccCandidateChange(e, posIndex, candIndex)}
                                                className="w-[170px] h-[30px] bg-white text-center focus:outline-none focus:ring-0 focus:border-transparent"
                                            />
                                        ))}
                                    </div>

                                    {/* Add Candidate */}
                                    <button
                                        type="button"
                                        onClick={() => addAccCandidate(posIndex)}
                                        className="mt-2 text-blue-600"
                                    >
                                        + Add Candidate
                                    </button>

                                </div>
                            ))}
                        </div>

                        
                       <div className="flex justify-between px-5 mt-4">
                            <button
                                type="button"
                                onClick={addAccPosition}
                                className=" text-green-600"
                            >
                                + Add Position
                            </button>

                            <button
                                type="button"
                                className="w-[120px] h-[35px] bg-blue-500 text-white rounded-md font-bold hover:scale-110 hover:cursor-pointer transition-all duration-300"
                            >
                                CREATE
                            </button>   
                       </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Election;