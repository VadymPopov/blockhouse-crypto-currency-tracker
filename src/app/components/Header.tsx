import React from "react";
import { RiCopperCoinFill } from "react-icons/ri";

export default function Header() {
  return (
    <header className='px-4 py-6 shadow-lg shadow-black-400 flex md:justify-start justify-center items-center gap-2'>
      <RiCopperCoinFill className='h-8 w-8' />
      <h1 className='text-blue-500 text-xl font-semibold uppercase'>
        Crypto Price Tracker
      </h1>
    </header>
  );
}
