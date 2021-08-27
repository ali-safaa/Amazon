import React from 'react'
import Image from "next/image";
function Header() {
    return (
        <header>
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow pl-2">
                    <img width={80} height={40} objectFit="contain" className="link" src="https://snipstock.com/assets/cdn/png/3b87a86d107d21733d3fc33443aa0e40.png" alt="logo" />
                <div className="bg-yellow-400 rounded-l rounded-r  flex-grow hover:bg-yellow-500 flex items-center mx-2">
                    <input className="rounded-l p-2 h-full w-6 flex-grow" type="text" />
                    <i className="fas fa-search p-2 link"></i>
                </div>
                </div>
                <div className="text-white">
                    <p className="text-xs font-bold link">hello, ali safaa</p>
                    <p className="text-xs cursor-pointer">accounts and terms</p>
                </div>
                <div className="px-2 link">
                    <i className="fas fa-shopping-cart text-white text-xl sm:text-3xl "></i>
                    <span className="text-white pl-1">0</span>
                </div>
            </div>
        </header>
    )
}

export default Header
