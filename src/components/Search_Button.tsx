import React from 'react'
import { CiSearch } from "react-icons/ci";

export const SearchButton = () => {
  return (
    <div className='flex'>
     
      <button value="Search" className='shadow-2xl mt-1 p-3 bg-red-200 border rounded-md focus:border-gray-200 duration-300' >
        <span>
          <CiSearch></CiSearch>
        </span>
      </button>
    </div>
  )
}