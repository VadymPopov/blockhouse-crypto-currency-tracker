"use client";

import {
  formatCurrency,
  formatCurrencyRepresentation,
  formatNumberWithCommas,
} from "../utils/helpers";
import { Currency } from "./CurrenciesTable";
import Image from "next/image";
import Label from "./Label";

export default function CurrencyRow({ currency }: { currency: Currency }) {
  const {
    name,
    symbol,
    image,
    current_price,
    market_cap,
    circulating_supply,
    total_volume,
    price_change_percentage_24h,
  } = currency;

  return (
    <tr className='group text-center bg-white hover:cursor-pointer hover:shadow-lg hover:bg-blue-200 transition-colors duration-150 ease-in-out'>
      <td className='rounded-l border-l-4 border-blue-400  sticky left-0 md:block bg-white z-10 px-4 py-2 min-w-[150px] group-hover:bg-blue-200 transition-colors duration-150 ease-in-out'>
        <div className='flex justify-start items-center gap-4'>
          <Image
            src={image}
            alt={name}
            width={30}
            height={30}
            className='ml-2'
          />
          <div className='flex flex-col items-start gap-1'>
            <span className='font-medium text-sm xl:text-lg'>{name}</span>
            <span className='uppercase text-xs text-gray-600'>{symbol}</span>
          </div>
        </div>
      </td>
      <td className='md:text-xs text-sm'>{formatCurrency(current_price)}</td>
      <td className='md:text-xs text-sm'>
        {formatCurrencyRepresentation(market_cap)}
      </td>
      <td className='md:text-xs text-sm'>
        {formatCurrencyRepresentation(total_volume)}
      </td>
      <td className='md:text-xs text-sm'>
        {formatNumberWithCommas(circulating_supply)}
      </td>
      <td className='md:text-xs text-sm rounded-r'>
        <Label value={price_change_percentage_24h} />
      </td>
    </tr>
  );
}
