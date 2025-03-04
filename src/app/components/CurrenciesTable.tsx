"use client";

import React from "react";
import { PacmanLoader } from "react-spinners";
import CurrencyRow from "./CurrencyRow";
import clsx from "clsx";
import { Currency } from "../types";

interface TableProps {
  isLoading?: boolean;
  currencies: Currency[];
  headers: string[];
}

export default function CurrenciesTable({
  isLoading,
  currencies,
  headers,
}: TableProps) {
  return (
    <div className='overflow-x-auto w-full mb-8'>
      <table className='table-auto w-full border-separate border-spacing-y-2'>
        <thead>
          <tr className='bg-amber-200 rounded-xl'>
            {headers.map((header, i) => (
              <th
                key={i}
                className={clsx(
                  header.toLocaleLowerCase() === "coin"
                    ? "sticky left-0 bg-amber-200 min-w-[150px]"
                    : "",
                  " p-2 md:p-5 md:font-semibold text-base md:text-lg"
                )}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={headers.length} className='relative h-80'>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <PacmanLoader size={30} color='#2727fa' />
                </div>
              </td>
            </tr>
          ) : (
            <>
              {currencies && currencies.length > 0 ? (
                currencies.map((currency) => (
                  <CurrencyRow key={currency.id} currency={currency} />
                ))
              ) : (
                <tr>
                  <td
                    colSpan={headers.length}
                    className='text-center py-5 text-lg '>
                    No currencies found.
                  </td>
                </tr>
              )}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}
