import React from 'react';
import { useState } from 'react';
import { FaCircleHalfStroke } from "react-icons/fa6";
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
   const [theme, setTheme] = useState('def');

   const handleTheme = () => (theme === 'def') ? setTheme('light') : setTheme('def');

   return (
      <section className='overflow-x-hidden'>

         <header className="h-fit w-screen bg-slate-300">

            <section className='absolute top-5 right-5'>
               <FaCircleHalfStroke onClick={handleTheme} className='text-2xl hover:cursor-pointer' />
            </section>

            <Header />

         </header>

         <Home theme={theme} />

      </section>
   );
};

export default App;


