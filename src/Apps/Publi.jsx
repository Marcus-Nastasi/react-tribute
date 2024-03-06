import React, { useState, useEffect } from 'react';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import { FaCircleHalfStroke } from "react-icons/fa6";
import Header from '../components/Header/Header';
import Post from '../components/Post/Post';
import Button from '../components/Button/Button';
import BarLoader from 'react-spinners/BarLoader';

export default function Users() {
   const [theme, setTheme] = useState('def');
   const [dados, setDados] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      async function load() {
         return await handleClick();
      };
      load();

      const getTheme = () => (localStorage.getItem('theme')) ? setTheme(localStorage.getItem('theme')) : 0;
      getTheme();
   }, []);
   // 

   async function handleClick(e) {
      if(e) {
         e.target.style.animationPlayState = 'running';
      };

      setLoading(true);

      try {
         const response = await fetch('/publis/apis/publications');
         const data = await response.json();

         setLoading(false);

         return setDados(data);
      } catch(e) {
         console.error('Erro ao buscar os dados:', e);
      }
   };

   function handleTheme() {
      if(theme === 'def') {
         setTheme('light');
         return localStorage.setItem('theme', 'light');
      };

      setTheme('def');
      return localStorage.setItem('theme', 'def');
   };

   let [ superDivBg, textPubli, postBg, loaderColor, iconsColor ] = [
      'bg-slate-900', 
      'text-slate-300',
      'bg-slate-400',
      '#E2E8F0',
      'text-slate-400 hover:text-slate-100'
   ];

   if(theme === 'light') {
      superDivBg = 'bg-slate-200';
      textPubli = 'text-slate-700';
      postBg = 'bg-slate-500 text-slate-100';
      loaderColor = '#000000',
      iconsColor = 'text-slate-500 hover:text-slate-700'
   };

   return (
      <div className={`flex flex-col items-center w-screen min-h-screen max-h-fit overflow-x-hidden ${superDivBg}`}>

         <section className='absolute top-4 right-5'>
            <FaCircleHalfStroke onClick={handleTheme} className='text-3xl p-1 hover:cursor-pointer' />
         </section>

         <Header theme={theme} />

         <h1 className={`p-16 text-3xl font-semibold ${textPubli} md:text-4xl lg:text-5xl xl:text-6xl`}>
            Publicações
         </h1>

         <Button 
            title={'Atualizar'} 
            func={handleClick} 
         />

         {
         loading
         ?
            <section className='flex justify-center w-screen h-fit mt-20'>
               <BarLoader
                  cssOverride={true}
                  color={loaderColor}
                  size={60}
               />
            </section>
         :
            <div className='flex flex-wrap justify-center rounded-md md:p-3 lg:p-4 xl:p-5'>
               {dados.map(d => {
                  return(
                     <div className='p-3 w-full rounded-lg md:w-5/6 lg:w-1/2 xl:w-2/6'>
                        <ul className='flex justify-center xl:flex-col'>

                           <li key={d._id} className='flex flex-col-reverse justify-center text-lg font-semibold text-slate-900 md:flex-row'>
                              <Post 
                                 bg={postBg} 
                                 title={d.title} 
                                 content={d.content} 
                                 src={d.base64}  
                              />

                              <section className='flex ml-6 md:flex-col'>
                                 <a className='m-2 -mb-10 md:mb-2' href={`/publi/apis/edit/?id=${d._id}`}>
                                    <FaPencilAlt 
                                       className={`text-2xl transition-all ease-in-out duration-0 ${iconsColor} hover:cursor-pointer`} 
                                    />
                                 </a>

                                 <a className='m-2 -mb-10 md:mb-0' href={`/publi/apis/delete/${d._id}`}>
                                    <FaTrash 
                                       className={`text-2xl transition-all ease-in-out duration-0 ${iconsColor} hover:cursor-pointer`} 
                                    />
                                 </a>
                              </section>

                           </li>

                        </ul>
                     </div> 
                  );
               })}
            </div>
         }
      </div>
   );
};

