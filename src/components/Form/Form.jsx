import React from "react";
import { useState } from "react";

export default function Form() {
   return(
      <form action="/pst" method="post">

         <section className="p-16">

            <section>

               <section>

                  <label htmlFor="name"></label>
                  <input itemType="text" name="name" id="name" />

                  <label htmlFor="E-mail"></label>
                  <input itemType="email" name="email" id="email" />

               </section>

               <section>
                  <button type="submit">Enviar</button>
               </section>

            </section>

         </section>

      </form>
   );
};

