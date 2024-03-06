import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import viteLogo from '../../../public/vite.svg';

export default function Header({ theme }) {
   const [ menu, setMenu ] = useState('hidden');

   let [ headerBg, menuColors ] = [ 'bg-slate-500', 'text-slate-800 bg-slate-500' ]

   if(theme === 'light') {
      headerBg = 'bg-slate-300';
      menuColors = 'text-slate-500 bg-slate-300';
   }

   const headerClasses = `h-fit w-screen transition-all ease-in-out duration-500 ${headerBg}`;

   const menuClasses = `
      ${menu} flex flex-col absolute top-22 right-6 text-xl font-semibold 
      rounded-sm transition-all ease-in-out duration-300 ${menuColors}
      md:flex md:flex-row md:text-2xl md:sticky)
   `;

   const handleMenu = () => (menu === 'hidden') ? setMenu('') : setMenu('hidden');

   return(
      <header className={headerClasses}>
         <section className="flex flex-row justify-between">

            <section className="p-10">
               <a href="/">
                  <img className="w-12" src={viteLogo} />
               </a>
            </section>

            <section className="p-10">

               <section className="text-3xl mt-6 md:mt-1">

                  <FaBars 
                     onClick={handleMenu} 
                     className="md:hidden" 
                  />

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
};


