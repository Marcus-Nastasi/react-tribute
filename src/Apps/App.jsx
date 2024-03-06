import React, { useEffect } from 'react';
import { useState } from 'react';
import { FaCircleHalfStroke } from "react-icons/fa6";
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';

function App() {
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

   return (
      <section className='overflow-x-hidden'>

         <section className='absolute top-4 right-5'>
            <FaCircleHalfStroke onClick={handleTheme} className='text-3xl p-1 hover:cursor-pointer' />
         </section>

         <Header theme={theme} />

         <Home theme={theme} />

      </section>
   );
};

export default App;


