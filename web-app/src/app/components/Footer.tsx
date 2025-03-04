import React from "react";
import Link from "next/link";
import { VscGithub } from "react-icons/vsc";

export default function Footer() {
  return (
    <footer
      role='contentinfo'
      className='flex items-center justify-center px-4 py-6 shadow-lg shadow-black-400'>
      <span className='text-base lg:text-lg'>Developed by</span>
      <Link
        href='https://github.com/VadymPopov'
        target='_blank'
        rel='noopener noreferrer'
        className='inline-block p-1.5 sm:p-2.5'
        aria-label="Visit VadymPopov's GitHub profile">
        <VscGithub className='h-6 w-6 transition-colors hover:text-gray-500' />
      </Link>
      <span className='text-base lg:text-lg'>
        &copy; {new Date().getFullYear()}
      </span>
    </footer>
  );
}
