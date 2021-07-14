import React from "react";
import { 
    BiChevronRight, 
    BiSearch,
    BiMenu,
    BiChevronDown} from "react-icons/bi";
//==============Mobile Device ==================
const NavSm =()=>{
    return (
    <>
       <div className="text-white flex items-center justify-between">
           <div>
               <h2 className="text-xl font-bold">It All Starts Here!!</h2>
               <span className="test-gray-400 text-xs flex items-center">
                   Indore<BiChevronRight/> </span>
            </div>
            <div className="w-8 h-8">
                <BiSearch className="w-full h-full"/>
            </div>
       </div>
    </>
    );
};
//======================Medium Size Device===========
const NavMd = ()=>{
    return(
     <>
     <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center w-1/2 gap-1">
            <div className="text-white font-serif  text-lg justify-center font-bold">book</div>
            <div className="w-12 h-10">
                <img
               // src="https://www.thefashionstation.in/wp-content/uploads/2019/07/bookmyshow-1-1600x757.png"
                src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                alt="Boom My Show"
                className="w-full h-full"
                />
            </div>
            <div className="text-white text-lg justify-center font-bold">show</div>
            <div className="w-full flex items-center gap-3 bg-white px-1">
                  <input 
                  type="search" 
                  className="w-full bg-transparent border-none focus:outline-none " 
                  placeholder="Search for Movies,Events, Plays and Activties."
                  />
           </div>
           </div>
        <div className="flex items-center gap-3">
            <span className="text-gray-200 text-xs flex items-center cursor-pointer hover:text-white">
                Indore <BiChevronDown/>
            </span>
            <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
                Sign in
            </button>
            <div className="w-8 h-8 text-white">
                <BiMenu className="w-full h-full"/>
            </div>
        </div>
    </div>
    </>
    );
};
const NavLg = ()=>{
    return (
    <>
    <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center w-1/2 gap-1">
            <div className="text-white text-lg justify-center font-bold">book</div>
            <div className="w-12 h-8">
                <img
               // src="https://www.thefashionstation.in/wp-content/uploads/2019/07/bookmyshow-1-1600x757.png"
                src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                alt="Book My Show"
                className="w-full h-full"
                />
            </div>
            <div className="text-white text-lg justify-center font-bold fontFamily:logo">show</div>
            <div className="w-full  flex items-center gap-3 bg-white px-2 py-1 rounded">
                <BiSearch/>
                <input 
                       type="search" 
                       className="w-full bg-transparent border-none focus:outline-none" 
                       placeholder="Search for Movies,Events, Plays and Activties."
                />
            </div>
        </div>
        <div className="flex items-center gap-3">
            <span className="text-gray-200 text-xs flex items-center cursor-pointer hover:text-white">
                Indore <BiChevronDown/>
            </span>
            <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
                Sign in
            </button>
            <div className="w-8 h-8 text-white">
                <BiMenu className="w-full h-full"/>
            </div>
        </div>
        </div>
          
    
    </>);
};

const Navbar =()=>{
    return <>
    <nav className="bg-bms-700 p-4" >
        <div className="md:hidden lg:hidden">
            {/* Mobile */}
            <NavSm/>
        </div>
        <div className="hidden md:flex lg:hidden">
            {/*Medium Device */}
            <NavMd />
        </div>
        <div className="hidden lg:flex md:hidden">
            {/* Large Screen */}
            <NavLg/>
        </div>
    </nav>
    </>
};

export default Navbar;