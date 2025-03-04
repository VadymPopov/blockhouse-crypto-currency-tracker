"use client";

import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Button from "./Button";
import CurrenciesTable from "./CurrenciesTable";
import { useCurrencies } from "../hooks/useCurrencies";
import { Currency } from "../types";

export const HEADERS = [
  "Coin",
  "Price",
  "Market Cap",
  "Total Volume",
  "Circulating Supply",
  "24h %",
];

export default function Dashboard() {
  const { data, isLoading, isFetching, isError, refetch } = useCurrencies();
  const [search, setSearch] = useState("");

  const filteredData = data?.filter((currency: Currency) =>
    currency.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <div className='flex flex-col justify-between md:gap-12 px-4 py-6 md:flex-row xl:px-0 gap-4'>
        <h2 className='text-xl font-semibold'>Crypto Prices</h2>

        <SearchBar query={search} onSearch={setSearch} />
      </div>

      {isError ? (
        <div className='text-red-500 text-center my-4'>
          Failed to load data. Please try again.
        </div>
      ) : (
        <CurrenciesTable
          headers={HEADERS}
          currencies={filteredData}
          isLoading={isLoading}
        />
      )}

      <div className='flex justify-center'>
        <Button isProcessing={isFetching} onClick={() => refetch()}>
          {isFetching ? "Refreshing" : "Refresh"}
        </Button>
      </div>
    </>
  );
}
