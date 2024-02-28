import React, { useState, useEffect } from 'react';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import HashLoader from 'react-spinners/HashLoader';
import Header from '../components/Header/Header';
import Post from '../components/Post/Post';

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

         <button 
            className='btnPubliAnimation px-10 py-2 mb-20 font-semibold rounded-md bg-slate-700 text-slate-200 hover:bg-slate-800 hover:text-slate-50 hover:px-12 ' 
            onClick={handleClick}>
            Atualizar
         </button>

         {
         
         loading 
         
         ?

         <section className='flex justify-center w-screen h-fit mt-20'>
            <HashLoader
               cssOverride={true}
               color="#E2E8F0"
               size={60}
            />
         </section>

         :
            
         <div className='flex flex-wrap justify-center rounded-md'>
            {dados.map(d => {
               return(
                  <div className='p-3 w-1/2 rounded-lg'>

                     <ul className='flex'>

                        <li key={d._id} className='flex justify-center text-lg font-semibold text-slate-900'>

                           <Post bg={'bg-slate-200'} title={d.title} content={d.content} src={d.base64}  />

                           <section className='ml-6 hover:cursor-pointer'>
                              <a 
                                 className='m-2 text-slate-400 hover:text-slate-100' 
                                 href={`/publi/apis/edit/?id=${d._id}`}>
                                 <FaPencilAlt />
                              </a>

                              <a 
                                 className=' text-slate-400 hover:text-slate-100' 
                                 href={`/publi/apis/delete/${d._id}`}>
                                 <FaTrash />
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

