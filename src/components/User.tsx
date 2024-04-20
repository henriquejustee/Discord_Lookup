import { User } from "../types/User"

export const UserComponent = ({
  username,
  avatar,
  badges,
  accent_color,
  global_name,
  banner_link,
  banner_color,
} : User ) => {
  return (
    <div className="flex min-h-fit justify-center p-6 ">
        <div className="backdrop-blur-md p-6 rounded-3xl w-[30rem] shadow-lg flex flex-col items-center text-white">
        <img src={avatar?.link} className="h-24 w-24 rounded-full shadow-lg mb-4" alt="avatar" />
        
            <h1 className="text-2xl font-bold">{username}</h1>
            <p>{badges}</p>
            <p>{global_name}</p>
            
                
            
        </div>
    </div>
  )
}