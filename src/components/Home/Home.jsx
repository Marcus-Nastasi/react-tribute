import React, { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import Post from "../Post/Post";

export default function Home({ theme }) {
   const [ dados, setDados ] = useState([]);
   const [ loading, setLoading ] = useState(false);

   useEffect(() => {
      async function handleFetch() {
         setLoading(true);
         try {
            const response = await fetch('/publis/apis/publications');
   
            const data = await response.json();
   
            setLoading(false);
   
            return setDados(data);
         } catch(e) {
            console.error('Erro ao buscar os dados na home:', e);
         }
      };
      handleFetch();
   }, []);

   let [ menuThemes, textHome, postBg, loaderColor ] = [ 
      'bg-slate-900', 
      'text-slate-300', 
      'bg-slate-400',
      '#E2E8F0' 
   ];

   if(theme === 'light') {
      menuThemes = 'bg-slate-200';
      textHome = 'text-slate-700';
      postBg = 'bg-slate-500 text-slate-100';
      loaderColor = '#000000'
   };

   let menuclasses = `
      flex flex-col items-center pt-10 min-h-screen max-h-fit 
      transition-all ease-in-out duration-500 ${menuThemes}
   `;

   return(
      <main className={menuclasses}>

         <section className="flex justify-center items-center w-screFeeden mb-10">
            <h1 className={`text-8xl font-bold ${textHome}`}>
               Feed
            </h1>
         </section>

         <section className="flex justify-evenly flex-wrap w-screen">
            {
            loading
            ?
               <section className="mt-36">
                  <BarLoader
                     cssOverride={true}
                     color={loaderColor}
                     size={60}
                     loading={loading}
                  /> 
               </section>
            :
            <>
               {dados.map(dado => {
                  return(
                     <section className="w-screen h-fit flex flex-col md:w-1/2 xl:w-2/6">
                        <Post
                           key={dado._id} 
                           bg={postBg} 
                           title={dado.title} 
                           content={dado.content} 
                           src={dado.base64} 
                        />
                     </section>
                  );
               })}
            </>
            }
         </section>
      </main>
   );
};

