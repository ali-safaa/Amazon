import React from 'react';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';
import { selectItems } from '../slices/basketSlice';
import { useSelector } from 'react-redux';
function Header() {
  const router = useRouter();
  const items = useSelector(selectItems);
  const { data: session } = useSession();
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow pl-2">
          <img
            onClick={() => router.push('/')}
            width={80}
            height={40}
            objectfit="contain"
            className="link"
            src="https://snipstock.com/assets/cdn/png/3b87a86d107d21733d3fc33443aa0e40.png"
            alt="logo"
          />
          <div className="md:flex-grow flex items-center mx-3 bg-white rounded-md">
            <input
              className="py-1 bg-transparent outline-none flex-grow"
              type="text"
            />
            <i className="fas fa-search px-3 rounded-r py-2 bg-yellow-400 cursor-pointer text-white"></i>
          </div>
        </div>
        <div className="text-white">
          <p
            onClick={!session ? signIn : signOut}
            className="text-xs font-bold link"
          >
            {session ? `Hello, ${session && session.user?.name}` : 'Sign in'}
          </p>
        </div>
        <div
          onClick={() => router.push('/checkout')}
          className="px-2 cursor-pointer"
        >
          <i className="fas fa-shopping-cart text-white text-xl sm:text-3xl"></i>
          {items?.length && (
            <span className="text-white ml-1">{items?.length}</span>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
