import React, { useState } from 'react';

export default function Users() {
   const [dados, setDados] = useState([]);

   const handle = async () => {
      try {
         const response = await fetch('/getUsr');

         const data = await response.json();

         return setDados(data);
      } catch(error) {
         console.error('Erro ao buscar os dados:', error);
      }
   }

   return (
      <div className='flex flex-col items-center w-screen'>

         <h1 className='p-16'>Users</h1>

         <button className='px-10 py-2 mb-20 rounded-lg bg-slate-900 text-slate-400 hover:bg-slate-800
            hover:text-slate-100' 
            onClick={handle}>
            Resgatar
         </button>

         <div>
            {dados.map(d => {
               return(
                  <div>
                     <ul>
                        <li>
                           User: {d._id} <br />
                           E-mail: {d.email} <br />
                           Nome: {d.name} <br />
                        </li>
                     </ul>
                     <br />
                  </div> 
               )
            })}
         </div>

      </div>
   );
}

