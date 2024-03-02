import React from 'react';
import { useState } from 'react';
import { FaCircleHalfStroke } from "react-icons/fa6";
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';

function App() {
   const [theme, setTheme] = useState('def');

   const handleTheme = () => (theme === 'def') ? setTheme('light') : setTheme('def');

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


