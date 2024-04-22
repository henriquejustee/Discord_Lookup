import { User } from "../types/User"

const badgeIcons = {
  'HOUSE_BRAVERY': 'https://img.icons8.com/fluency/48/dsicord-hypesquad-brilliance-house-badge.png',
  'ACTIVE_DEVELOPER': 'https://img.icons8.com/fluency/48/discord-active-developer-badge.png',
  'EARLY_VERIFIED_BOT_DEVELOPER': 'https://img.icons8.com/fluency/48/discord-early-verified-bot-developer-badge.png',
  'PARTNERED_SERVER_OWNER': 'https://img.icons8.com/fluency/48/discord-partner-server-owner-badge.png'
  // ...
};

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
        <img src={avatar?.link} className="absolute top-28 transform -translate-y-1/2 md:mt-2 h-24 w-24 rounded-full shadow-2xl shadow-black/70 mb-4" alt="avatar" />

        <h1 className="absolute text-2xl shadow-2xl font-Inter bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent top-8 md:top-8 font-bold">{username}</h1>

        <div className="flex space-x-2">
        {badges && badges.length > 0 ? (
          badges.map((badge, index) => (
            <img key={index} src={badgeIcons[badge]}/>
          ))
        ) : (
          <p className="py-1">No badges available</p>
        )}
        </div>
        <p>{global_name}</p>
      </div>
    </div>
  )
}