import React, { useState, useEffect } from 'react';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import Header from '../components/Header/Header';
import Post from '../components/Post/Post';
import Button from '../components/Button/Button';
import BarLoader from 'react-spinners/BarLoader';

export default function Users() {
   const [dados, setDados] = useState([]);
   const [ loading, setLoading ] = useState(false);

   useEffect(() => {
      async function load() {
         return await handleClick();
      };
      load();
   }, []);

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

   return (
      <div className='flex flex-col items-center w-screen min-h-screen max-h-fit bg-slate-900'>

         <Header />

         <h1 className='p-16 text-6xl font-semibold text-slate-100'>
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
               color="#E2E8F0"
               size={60}
            />
         </section>

         :
            
         <div className='flex flex-wrap justify-center rounded-md md:p-3 lg:p-4 xl:p-5'>
            {dados.map(d => {
               return(
                  <div className='p-3 w-fit rounded-lg md:w-5/6 lg:w-1/2 xl:w-2/6'>

                     <ul className='flex xl:flex-col'>

                        <li key={d._id} className='flex justify-center text-lg font-semibold text-slate-900'>

                           <Post bg={'bg-slate-200'} title={d.title} content={d.content} src={d.base64}  />

                           <section className='ml-6'>
                              <a 
                                 className='m-2'
                                 href={`/publi/apis/edit/?id=${d._id}`}>
                                 <FaPencilAlt className='text-2xl transition-all ease-in-out duration-0 text-slate-400 hover:text-slate-100 hover:cursor-pointer' />
                              </a>

                              <a
                                 href={`/publi/apis/delete/${d._id}`}>
                                 <FaTrash className='text-2xl transition-all ease-in-out duration-0 text-slate-400 hover:text-slate-100 hover:cursor-pointer' />
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

