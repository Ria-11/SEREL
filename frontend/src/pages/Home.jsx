import React from 'react';
import {FaBars} from "react-icons/fa";
import logo from "../assets/seren1.png";
import { FaSearch } from 'react-icons/fa';
import { FaMicrophone } from 'react-icons/fa';


const Home = () => {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen relative">
      {/*navbar*/}
     
     
           {/* ---------- NAVBAR ---------- */}
           <header className="bg-[#0f0f0f] h-15 p-3 border-b border-gray-800 fixed top-0 left-0 right-0 z-50">
             <div className="flex items-center justify-between">
               {/* Left */}
               <div className="flex items-center gap-4">
                 <button
                   onClick={() => setSidebarOpen(!sidebarOpen)}
                   className="text-xl bg-[#272727] p-2 rounded-full md:inline hidden"
                 >
                   <FaBars />
                 </button>
                 <div className="flex items-center gap-[5px]">
                   <img src={logo} alt="Logo" className="w-[30px]" />
                   <span className="text-white font-bold text-xl tracking-tight font-roboto">
                     Serel
                   </span>
                 </div>
               </div>
     
               {/* Search */}
               <div className="hidden md:flex items-center gap-2 flex-1 max-w-xl">
                 <div className="flex flex-1">
                   <input
                     type="text"
                     placeholder="Search"
                     className="flex-1 bg-[#121212] px-4 py-2 rounded-l-full outline-none border border-gray-700"
                     onChange={(e) => setInput(e.target.value)}
                     value={input}
                   />
                   <button
                     className="bg-[#272727] px-4 rounded-r-full border border-gray-700"
                     onClick={() => handleSearchData(input)} disabled={loading}
                   >
                     {loading ? <ClipLoader size={18} color="white" /> : <FaSearch />}
                   </button>
                 </div>
                 <button
                   className="bg-[#272727] p-3 rounded-full"
                   onClick={() => setPopUp(true)}
                 >
                   <FaMicrophone />
                 </button>
               </div>
     
               {/* Right */}
               <div className="flex items-center gap-3">
                 {userData?.channel && (
                   <button
                     className="hidden md:flex items-center gap-1 bg-[#272727] px-3 py-1 rounded-full"
                     onClick={() => navigate("/createpage")}
                   >
                     <span className="text-lg">+</span>
                     <span>Create</span>
                   </button>
                 )}
     
                 {!userData?.photoUrl ? (
                   <FaUserCircle
                     className="text-3xl hidden md:flex text-gray-400"
                     onClick={() => setOpen((prev) => !prev)}
                   />
                 ) : (
                   <img
                     src={userData?.photoUrl}
                     alt="img"
                     className="w-9 h-9 rounded-full object-cover border-1 border-gray-700 hidden md:flex"
                     onClick={() => setOpen((prev) => !prev)}
                   />
                 )}
                 <FaSearch className="text-lg md:hidden flex " onClick={() => setPopUp(true)} />
               </div>
             </div>
           </header>


    </div>
  );
};

export default Home;
