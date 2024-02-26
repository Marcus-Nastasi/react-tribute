import React from "react";
import Form from './components/Form/Form';

export default function Cont() {
   return(
      <section className="min-h-screen max-h-fit bg-slate-300">

         <section className="p-10 py-16 text-center text-5xl font-semibold font-sans">
            <h1>Contato</h1>
         </section>

         <Form />

      </section>
   );
};

