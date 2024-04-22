import { useState } from "react";
import { logo } from '../../assets/assest';

export default function HeaderComponent() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <div 
            id="header-component"
            className=" p-4 px-6 flex flex-row items-center justify-between">
            
            <div id="logo">
                <a 
                    href="/"
                    className="flex flex-row items-center gap-2 text-[24px] md:text-[34px] text-[#3d3d3d] font-black">
                    <img src={logo} alt="Table24 Logo" className=" w-[30px] md:w-[40px]" />
                    Table24
                </a>
            </div>
            
            <div 
                id="links"
                className={`
                    fixed top-0 left-0 right-0 ${menuOpen ? 'flex' : 'hidden'} flex-col items-start p-6 
                    md:p-0 bg-[#ffffff] md:bg-transparent w-full z-10 gap-5 
                    border-b md:border-b-0 md:relative md:flex md:flex-row 
                    md:items-center md:justify-end md:gap-5
                `}>
                <div className=" text-[40px] md:hidden w-full" onClick={() => setMenuOpen(false)}>&times;</div>
                <a href="#" className=" text-[16px] hover:underline hover:text-[#2400FF]">Pricing</a>
                <a href="#" className=" text-[16px] hover:underline hover:text-[#2400FF]">Knowledge Area</a>
                <a href="#" className=" p-2 px-[40px] bg-[#2400FF] text-[#fff] font-semibold rounded-lg hover:bg-[#8f0081]">Get started</a>
                
            </div>
            
            <div className=" md:hidden" onClick={() => setMenuOpen(true)}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm7 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM5 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm7-7a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm7 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM5 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm7-7a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm7 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" fill="#222F3D"/></svg>
            </div>
        </div>
    );
}