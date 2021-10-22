import React from 'react'
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from 'next-auth/react'
import { selectItems } from '../slices/basketSlice';
import { useSelector } from 'react-redux';
function Header() {
    const router = useRouter();
    const items = useSelector(selectItems);
    const {data:session} = useSession();
    return (
        <header>
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow pl-2">
                    <img onClick={() => router.push('/')} width={80} height={40} objectfit="contain" className="link" src="https://snipstock.com/assets/cdn/png/3b87a86d107d21733d3fc33443aa0e40.png" alt="logo" />
                <div className="bg-yellow-400 rounded-l rounded-r  flex-grow hover:bg-yellow-500 flex items-center mx-2">
                    <input className="rounded-l p-2 h-full w-6 flex-grow" type="text" />
                    <i className="fas fa-search p-2 link"></i>
                </div>
                </div>
                <div onClick={() => router.push('/auth/signin')} className="text-white">
                    <p onClick={!session ? signIn : signOut} className="text-xs font-bold link">{session? `Hello, ${session && session.user?.name}` : "Sign in"}</p>
                    <p className="text-xs cursor-pointer">accounts and terms</p>
                </div>
                <div onClick={() => router.push('/checkout')} className="px-2 cursor-pointer">
                    <i className="fas fa-shopping-cart text-white text-xl sm:text-3xl "></i>
                    <span className="text-white pl-1">{items.length}</span>
                </div>
            </div>
        </header>
    )
}

export default Header
