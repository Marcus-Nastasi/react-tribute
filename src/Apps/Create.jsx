import React, { useState, useEffect } from "react";
import Form from '../components/Form/Form';
import Header from '../components/Header/Header';
import { FaCircleHalfStroke } from "react-icons/fa6";

export default function Cont() {
   const [theme, setTheme] = useState('def');

   useEffect(() => {
      const getTheme = () => (localStorage.getItem('theme')) ? setTheme(localStorage.getItem('theme')) : 0;
      getTheme();
   });

   function handleTheme() {
      if(theme === 'def') {
         setTheme('light');
         return localStorage.setItem('theme', 'light');
      };

      setTheme('def');
      return localStorage.setItem('theme', 'def');
   }

   return(
      <>
         <section className='absolute top-4 right-5'>
            <FaCircleHalfStroke onClick={handleTheme} className='text-3xl p-1 hover:cursor-pointer' />
         </section>

         <Header theme={theme} />

         <section className="min-h-screen max-h-fit bg-slate-900">

            <section className="p-10 py-16 text-center text-5xl font-semibold font-sans">
               <h1 className="text-6xl text-slate-100">Criar publicação</h1>
            </section>

            <Form />

         </section>
      </>
   );
};

