/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/3kxgOkIzrR1
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"
import { LayoutGridIcon } from "../ui/icon"
import { useState } from "react"
import Dashboard from "./dashboard"
import AlertRecord from "./alertRecord";

export function Main() {
  const [mode, setMode] = useState("dashboard");
  let mainComponent
  switch(mode) {
    case "dashboard" :
      mainComponent = <Dashboard navigate={() => setMode("alertrecord")}/>
      break;
    case "alertrecord" :
      mainComponent = <AlertRecord />
      break;
    default :
      mainComponent = <div />
      break;
  }
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="flex items-center justify-between bg-gray-900 px-6 py-4 text-white">
        <div className="flex items-center gap-4">
          <LayoutGridIcon className="h-6 w-6" />
          <h1 className="text-xl font-bold">Alert Dashboard</h1>
        </div>

      </header>
      <div className="flex h-full">

        {/* Left Tab */}
        <div className="flex flex-col gap-4 w-12 md:w-[15%] pl-6 py-6 font-bold items-end md:place-items-start">
          <span className={(mode == "dashboard" ? "bg-gray-100 dark:bg-gray-800" : "") + " text-black dark:text-white flex md:w-full text-wrap [writing-mode:vertical-rl] md:[writing-mode:horizontal-tb] rotate-180 md:rotate-0 p-2 rounded-lg rounded-l-none md:rounded-l-lg md:rounded-r-none hover:cursor-pointer "} onClick={() => {setMode("dashboard")}}>
            Dashboard
          </span>
          <span className={(mode == "alertrecord" ? "bg-gray-100 dark:bg-gray-800" : "") + " text-black dark:text-white flex md:w-full text-wrap [writing-mode:vertical-rl] md:[writing-mode:horizontal-tb] rotate-180 md:rotate-0 p-2 rounded-lg rounded-l-none md:rounded-l-lg md:rounded-r-none hover:cursor-pointer "} onClick={() => {setMode("alertrecord")}}>
            Alert Record
          </span>
        </div>

        {/* Right Tab */}
        <div className="flex-1 flex-col bg-gray-100 p-6 dark:bg-gray-800 dark:text-white gap-4 min-h-svh">
          {mainComponent}
        </div>

      </div>
    </div>
  )
}





