import React, { useState } from "react";
import Post from "../Post/Post";

export default function Home({ theme }) {
   const [dados, setDados] = useState([]);

   async function handleFetch() {
      try {
         const response = await fetch('/publis/apis/publications');

         const data = await response.json();

         return setDados(data);
      } catch(e) {
         console.error('Erro ao buscar os dados na home:', e);
      }
   };

   let userTheme = 'bg-slate-800';

   (theme === 'light') ? userTheme = 'bg-slate-200' : 0;

   var userClasses = `flex flex-col items-center pt-10 min-h-screen max-h-fit transition-all ease-in-out duration-500 ${userTheme}`;

   return(
      <main onMouseOver={handleFetch} className={userClasses}>

         <section className="flex justify-center items-center w-screen mb-10">
            <h1 className="text-8xl font-bold text-slate-100">Feed</h1>
         </section>

         <section className="flex justify-evenly w-9/12">

            {dados.map(dado => {
               return(
                  <>
                     <Post bg={'bg-slate-200'} title={dado.title} content={dado.content} src={dado.base64} />
                  </>
               );
            })}

         </section>

      </main>
   );
};

