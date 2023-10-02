"use client";

import Link from "next/link";


export default function Home() {

  return (
    <div className="w-screen h-screen bg-slate-700  overflow-hidden overscroll-none">
      <div className="w-full h-full flex-col items-center justify-center">        
        
        <div className="w-full h-1/2 flex items-center justify-center ">
          <h1 className="text-center text-white text-xl">start something epic. on campus</h1>
        </div>
      
        <div className="w-full h-1/2">
          <div className="w-full  flex items-center justify-center">
            <Link href={'/signup'} className="p-5 mt-10 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-white">create account</Link>
          </div>
          <div  className="p-10 w-full flex items-center justify-center">
            <Link href={'/signup'} className="p-5 px-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg"> log in </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
