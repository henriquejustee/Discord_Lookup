import { User } from "../types/User"

export const UserComponent = ({
  username,
  avatar,
  badges,
  accent_color,
  global_name,
  banner,
  banner_color,
} : User ) => {
  return (
    <div className="flex min-h-fit justify-center p-6">
      <div className="backdrop-blur-md p-6 rounded-3xl w-full md:w-[30rem] shadow-lg flex flex-col items-center text-white relative">
        <img src={banner?.link  || "https://cdn.discordapp.com/banners/297545497407782912/a_8e195890437ebf6dc9470d5081938bad?size=480"} className="h-40 w-full rounded shadow-lg mb-4" alt="banner" />
        <img src={avatar?.link} className="absolute top-20 transform -translate-y-1/2 md:mt-2 h-24 w-24 rounded-full shadow-2xl shadow-black/70 mb-4" alt="avatar" />
  
        <h1 className="text-2xl shadow-2xl font-Inter bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent absolute bottom-24 font-bold">{username}</h1>
        <p>{badges}</p>
        <p>{global_name}</p>
      </div>
    </div>
  )
}