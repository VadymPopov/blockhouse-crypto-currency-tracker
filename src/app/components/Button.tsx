"use client";

import clsx from "clsx";

import React, { ReactNode } from "react";
import { ClipLoader } from "react-spinners";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isProcessing?: boolean;
}

export default function Button({
  children,
  isProcessing = false,
  ...rest
}: ButtonProps) {
   const baseStyles =
    'flex items-center justify-center rounded-2xl text-sm font-semibold uppercase  transition-all duration-200 delay-75 ease-in-out  h-10 w-40 py-4';

  const currentStyles = isProcessing ? "cursor-not-allowed opacity-50 bg-gray-400 text-gray-200 cursor-not-allowed hover:bg-gray-400" : "bg-blue-500 text-white hover:bg-blue-600 hover:cursor-pointer";
  return (
    <button
      {...rest}
      type='button'
      disabled={isProcessing}
      aria-disabled={isProcessing}
      className={clsx(
        baseStyles,
        currentStyles
      )}>
      {children}
      <span className='ml-2 inline-flex justify-center'>
        {isProcessing && <ClipLoader size={16} color='white' />}
      </span>
    </button>
  );
}
