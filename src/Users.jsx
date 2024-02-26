import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

export default function Users() {
   const [dados, setDados] = useState([]);

   const handle = async () => {
      try {
         const response = await fetch('/getUsr');

         const data = await response.json();

         return setDados(data);
      } catch(e) {
         console.error('Erro ao buscar os dados:', e);
      }
   }

   return (
      <div className='flex flex-col items-center w-screen h-screen bg-slate-300'>
         <h1 className='p-16 text-4xl font-semibold text-slate-500'>
            Users
         </h1>
         <button className='px-10 py-2 mb-20 rounded-md bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-100' 
            onClick={handle}>
            Resgatar
         </button>
         <div className='rounded-md bg-slate-400'>

            {dados.map(d => {
               return(
                  <div className='p-5'>
                     <ul>
                        <li key={d._id} className='flex items-center text-lg font-semibold text-slate-900'>

                           <section>
                              Nome: {d.name} <br />
                              E-mail: {d.email}
                           </section>

                           <section className='pl-6 hover:cursor-pointer'>
                              <a href={`/delete/${d._id}`}>
                                 <FaTrash />
                              </a>
                           </section>

                        </li>
                     </ul>
                  </div> 
               )
            })}

         </div>
      </div>
   );
};

