
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { UserComponent } from '../components/User';


import { User } from '../types/User';

export default function Main () {
  const [userData, setUserData] =  useState<User | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [user, setUser] = useState("");

  const handleButtonClick = () => {
    if (inputValue != "") {
    setUser(inputValue);
    loadUser(inputValue);
  }
    else {
      console.error("No ID provided.")
    }
  };

  const loadUser = async(user: string) => {
    const res = await fetch(`https://discord-lookup-api-ashen.vercel.app/v1/user/${user}`);
    const data = await res.json()
    const {username, avatar, badges, accent_color, global_name, banner, banner_color}: User = data;
    console.log(data)

    const userData = {
      username,
      avatar,
      badges,
      accent_color,
      global_name,
      banner,
      banner_color
    }
    setUserData(userData);
  }

  return (
    <>
   <div className='min-h-screen font-Inter bg-fixed bg-cover' >
    <div className='pt-10'>
      <div className='backdrop-blur-xl shadow-2xl shadow-black/50 mx-auto w-fit p-12 rounded-2xl'>
      <div className=" text-center pt-5">
        <h1 className="underline decoration-sky-500 text-4xl bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent font-light pb-1">Discord ID Lookup</h1>
        <p className='text-md max-w-sm text-white/80 whitespace-normal text-balance font-extralight'>This unofficial tool allows you to look up a Discord user or bot by their ID. It’s not affiliated with Discord itself. Simply input the user’s ID, and it will provide relevant information. You can find it <a href='https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID' className='text-blue-700 underline'>here</a>.</p>
      </div>

      <div className='justify-evenly flex pt-5'>
      <div className=''>
        <input type='text' onChange={(e) => setInputValue(e.target.value) } placeholder='Search' className='shadow-2xl font-extralight mt-1 p-3 text-sm w-full border rounded-md focus:border-gray-200 duration-300'></input>
    </div>
      <div className='flex'>
     
      <button value="Search" onClick={handleButtonClick} className='shadow-2xl mt-1 p-3 bg-red-200 hover:bg-sky-300 border rounded-md focus:border-gray-200 duration-300' >
        <span>
          <CiSearch></CiSearch>
        </span>
      </button>
    </div>
      </div>

     
      </div>
      { user && <UserComponent {...userData}/>}
    <div>
      
      </div>
     
    </div>
    </div>
    </>
  );
};


