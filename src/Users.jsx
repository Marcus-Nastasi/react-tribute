import React, { useEffect, useState } from 'react';

export default function Users() {
   const [dados, setDados] = useState([]);

   useEffect(() => {
      async function fetchData() {
         try {
            const response = await fetch('/contato');
            console.log('renderizando')

            setDados(JSON.stringify(response.data));
         } catch(error) {
            console.error('Erro ao buscar os dados:', error);
         }
      }

      fetchData();
   }, []);

   return (
      <div>
         <h1>Users</h1>
         <ul>
            {dados.map((item, index) => (
               <li key={index}>
                  <strong>Nome:</strong> {item.name}, <strong>Email:</strong> {item.email}
               </li>
            ))}
         </ul>
      </div>
   );
}

