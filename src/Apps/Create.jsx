import React from "react";
import Form from '../components/Form/Form';
import Header from '../components/Header/Header';

export default function Cont() {
   return(
      <>
         <Header />

         <section className="min-h-screen max-h-fit bg-slate-900">

            <section className="p-10 py-16 text-center text-5xl font-semibold font-sans">
               <h1 className="text-6xl text-slate-100">Criar publicação</h1>
            </section>

            <Form />

         </section>
      </>
   );
};

