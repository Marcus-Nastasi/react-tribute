import React from "react";
import { useState, useEffect } from "react";
import Button from "../components/Button/Button";
import Header from '../components/Header/Header';
import { BarLoader } from 'react-spinners';
import { FaCircleHalfStroke } from "react-icons/fa6";

export default function Edit() {
   const [theme, setTheme] = useState('def');
   const [ image, setImage ] = useState('');
   const [ noteData, setNoteData ] = useState('');
   const [ loading, setLoading ] = useState(false);

   useEffect(() => {
      function getId() {
         const searchParams = new URLSearchParams(window.location.search);
         const id = searchParams.get('id');
         return getData(id);
      };
      getId();

      async function getData(queryId) { 
         setLoading(true);
         const note = await fetch(`/publi/apis/search/${queryId}`);
         const nt = await note.json();      
         setLoading(false);

         return setNoteData(nt[0]);
      };

      const getTheme = () => (localStorage.getItem('theme')) ? setTheme(localStorage.getItem('theme')) : 0;
      getTheme();
   }, []);

   async function handleFileUpload(e) {
      const file = e.target.files[0];
      const base64 = await convertToBase64(file);
      return setImage(String(base64));
   }

   async function convertToBase64(file) {
      return new Promise((resolve, reject) => {
         const fileReader = new FileReader();

         fileReader.readAsDataURL(file);

         fileReader.onload = () => {
            resolve(fileReader.result);
         };
      });
   };

   function handleTheme() {
      if(theme === 'def') {
         setTheme('light');
         return localStorage.setItem('theme', 'light');
      };

      setTheme('def');
      return localStorage.setItem('theme', 'def');
   }

   return(
      <section
         className="flex flex-col items-center min-h-screen max-h-fit px-5 bg-slate-900"
      >
         {
            loading

            ?

            <>
               <section className="flex justify-center w-screen h-screen mt-52 overflow-x-hidden font-semibold text-6xl">
                  
                  <BarLoader
                     cssOverride={true}
                     size={120}
                     color="white"
                  />
                  
               </section>
            </>

            :

            <>
               <section>
                  <section className='absolute top-4 right-5'>
                     <FaCircleHalfStroke onClick={handleTheme} className='text-3xl p-1 hover:cursor-pointer' />
                  </section>
                  
                  <Header theme={theme} />
               </section>

               <section className="mt-16">
                  <h1 className="text-3xl font-semibold text-slate-100 md:text-4xl lg:text-5xl xl:text-6xl">Editar</h1>
               </section>
               
               <form
                  method="post" 
                  action={`/publi/apis/edit/post/${noteData._id}`} 
                  className="flex flex-col w-11/12 mt-20 justify-center items-center flex-wrap p-3 rounded-md shadow-xl shadow-slate-900 text-slate-100 bg-slate-800"
               >

                  <label className="p-5 text-2xl font-semibold lg:text-3xl" htmlFor="title">
                     Novo título:
                  </label>
                  <input
                     placeholder={noteData.title}
                     className="p-2 w-10/12 self-center font-semibold text-slate-900 rounded-sm bg-slate-100 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12" 
                     type="text" 
                     name="title" 
                     id="title" 
                  />

                  <label className="p-5 text-2xl font-semibold lg:text-3xl" htmlFor="content">
                     Novo conteúdo:
                  </label>
                  <input 
                     placeholder={noteData.content} 
                     className="p-2 w-10/12 self-center font-semibold text-slate-900 rounded-sm bg-slate-100 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12" 
                     type="text" 
                     name="content" 
                     id="content" 
                  />

                  <label className="p-5 text-2xl font-semibold lg:text-3xl" htmlFor="foto">
                     Nova imagem:
                  </label>
                  <input
                     onChange={handleFileUpload}
                     className="p-2 w-10/12 self-center font-semibold text-slate-100 rounded-sm md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12" 
                     type="file" 
                     name="foto" 
                     id="foto" 
                  />

                  <input value={image} type="hidden" name="base64" id="base64" />

                  <div className="-mb-10 mt-10">
                     <Button title={'Enviar'} />
                  </div>

               </form>
            </>
         }
      </section>
   );
};




