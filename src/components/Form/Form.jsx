import React from "react";
import { useState } from "react";

export default function Form() {
   return(
      <form action="/pst" method="post" className="p-10 px-0 rounded-md bg-slate-500">

         <section className="flex flex-col p-6 rounded-lg bg-slate-900">

            <section className="flex flex-col items-center p-2 w-screen bg-slate-500">

               <section className="flex flex-col">

                  <label htmlFor="name" className="mb-2 text-xl font-semibold text-slate-200">Nome:</label>
                  <input itemType="text" name="name" id="name" className="mb-6 p-2 rounded-md text-slate-900 bg-slate-600 focus:bg-slate-200" />

                  <label htmlFor="email" className="mb-2 text-xl font-semibold text-slate-200">E-mail:</label>
                  <input itemType="email" name="email" id="email" className="mb-6 p-2 rounded-md text-slate-900 bg-slate-600 focus:bg-slate-200" />

               </section>

               <section>
                  <button type="submit" className="my-3 p-3 px-6 text-lg font-semibold rounded-md text-slate-300 bg-slate-700">
                     Enviar
                  </button>
               </section>

            </section>

         </section>

      </form>
   );
};

