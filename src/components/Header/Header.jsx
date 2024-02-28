import React from "react";
import { FaBars } from "react-icons/fa";
import viteLogo from '../../../public/vite.svg';

export default function Header({ theme }) {
   let userTheme = 'bg-slate-300';
   let menu = 'text-slate-600';

   if(theme === 'light') {
      userTheme = 'bg-slate-500';
      menu = 'text-slate-50';
   }

   const userClasses = `h-fit w-screen transition-all ease-in-out duration-500 ${userTheme}`;
   const menuClasses = `flex flex-row text-2xl font-semibold transition-all ease-in-out duration-300 ${menu} md:flex`; 

   return(
      <header className={userClasses}>
      <section className="flex flex-row justify-between">

         <section className="p-10">
            <a href="/">
               <img className="w-12" src={viteLogo} />
            </a>
         </section>

         <section className="p-10">

            <section className="text-3xl m-3">
               <FaBars />
            </section>

            <ul className={menuClasses}>
               <li className="p-5">
                  <a className="hover:text-blue-400 transition-all ease-in-out duration-500" href="/">
                     Home
                  </a>
               </li>
               <li className="p-5">
                  <a className="hover:text-blue-400 transition-all ease-in-out duration-500" href="/publis">
                     Publicações
                  </a>
               </li>
               <li className="p-5">
                  <a className="hover:text-blue-400 transition-all ease-in-out duration-500" href="/create">
                     Criar
                  </a>
               </li>
            </ul>

         </section>

      </section>
      </header>
   );
}


