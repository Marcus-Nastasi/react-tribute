import React, { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
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

   let userTheme = 'bg-slate-900';

   (theme === 'light') ? userTheme = 'bg-slate-200' : 0;

   var userClasses = `
      flex flex-col items-center pt-10 min-h-screen max-h-fit transition-all ease-in-out duration-500 ${userTheme}
   `;

   return(
      <main className={userClasses}>

         <section className="flex justify-center items-center w-screen mb-10">
            <h1 className="text-8xl font-bold text-slate-100">
               Feed
            </h1>
         </section>

         <section className="flex justify-evenly flex-wrap w-screen">

            {

            loading

            ?

            <section className="mt-36">
               <HashLoader
                  cssOverride={true}
                  color="#E2E8F0"
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
                           bg={'bg-slate-200'} 
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

