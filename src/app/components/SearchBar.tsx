"use client";

import { MdSearch } from "react-icons/md";

interface SearchBarProps {
  query: string;
  onSearch: (_searchTerm: string) => void;
}

export default function SearchBar({ query, onSearch }: SearchBarProps) {
  return (
    <div className='relative'>
      <input
        type='text'
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        placeholder='Search'
        className='text-xs rounded-lg border border-blue-400 px-4 py-3 pl-10 sm:text-base focus:outline-blue-400'
      />
      <MdSearch
        className='absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400'
        size={24}
      />
    </div>
  );
}
