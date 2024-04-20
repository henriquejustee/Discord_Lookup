import React from 'react'

export const Footer = () => {
  return (
    <div className='bg-stone-800 w-full font-Inter justify-between flex h-20'>
        <div className='flex gap-24 items-center mx-auto justify-between p-4'>
           <a className='text-white font-extralight text-xs'>Made by  <span className='text-rose-400'>Aelys</span> with ❤️</a>
           <a className='text-white font-extralight text-xs underline hover:text-gray-400 duration-300' href="">Github</a>
           <a className='text-white font-extralight text-xs underline hover:text-gray-400 duration-300' href="https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID">How to find ID</a>
        </div>
    </div>
  )
}
