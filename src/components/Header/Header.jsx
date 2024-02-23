import React from "react";
import viteLogo from '../../../public/vite.svg';

export default function Header() {
   return(
      <section className="flex flex-row justify-between">

         <section className="p-10">
            <img className="w-12" src={viteLogo} alt="" />
         </section>

         <section className="p-10">

            <ul className="flex flex-row text-2xl font-semibold text-slate-600">
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
   );
}

