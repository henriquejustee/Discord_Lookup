import { SearchInput } from './components/Search_Input'
import { SearchButton } from './components/Search_Button';
import { Footer } from './components/Footer';


export default function App () {


  return (
    <>
    <div  className="h-screen w-screen font-Inter bg-fixed bg-cover pt-20 bg-[url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6d66e85e-f832-4fe9-b642-1ecddde1a3a9/dg1vi34-67d81e1a-678a-4afc-acdd-91761b20ed62.png/v1/fill/w_1192,h_670,q_70,strp/nature___from_up_on_poppy_hill_by_tsuyoiiii_dg1vi34-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvNmQ2NmU4NWUtZjgzMi00ZmU5LWI2NDItMWVjZGRkZTFhM2E5XC9kZzF2aTM0LTY3ZDgxZTFhLTY3OGEtNGFmYy1hY2RkLTkxNzYxYjIwZWQ2Mi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.9IQi1TeVzj_br8nsFndKFL6P3_1MfkL8Vny-EZ5nln8')]">
      <div className='backdrop-blur-xl shadow-2xl shadow-black/50 mx-auto w-fit p-6 rounded-2xl'>
      <div className=" text-center pt-5">
        <h1 className="underline decoration-sky-500 text-2xl bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent font-light pb-1">Discord ID Lookup</h1>
        <p className='text-sm text-white/80 font-extralight'>Search for an user stats only using a Discord ID.</p>
      </div>

      <div className='justify-evenly flex pt-5'>
      <SearchInput/>  
      <SearchButton/>
      </div>

     
      </div>

     
    </div>
    <Footer></Footer>
    </>
  );
};


