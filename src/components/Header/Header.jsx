import React from "react";
import viteLogo from '../../../public/vite.svg';

export default function Header({ theme }) {
   let userTheme = 'bg-slate-300';
   let menu = 'text-slate-600';

   if(theme === 'light') {
      userTheme = 'bg-slate-500';
      menu = 'text-slate-50';
   }

   const userClasses = `h-fit w-screen transition-all ease-in-out duration-500 ${userTheme}`;
   const menuClasses = `flex flex-row text-2xl font-semibold transition-all ease-in-out duration-300 ${menu}`; 

   return(
      <header className={userClasses}>
      <section className="flex flex-row justify-between">

         <section className="p-10">
            <img className="w-12" src={viteLogo} alt="" />
         </section>

         <section className="p-10">

            <ul className={menuClasses}>
               <li className="p-5">
                  <a className="hover:text-blue-400 transition-all ease-in-out duration-500" href="">
                     Home
                  </a>
               </li>
               <li className="p-5">
                  <a className="hover:text-blue-400 transition-all ease-in-out duration-500" href="">
                     Sobre
                  </a>
               </li>
               <li className="p-5">
                  <a className="hover:text-blue-400 transition-all ease-in-out duration-500" href="">
                     História
                  </a>
               </li>
               <li className="p-5">
                  <a className="hover:text-blue-400 transition-all ease-in-out duration-500" href="/contato">
                     Contato
                  </a>
               </li>
            </ul>

         </section>

      </section>
      </header>
   );
}


