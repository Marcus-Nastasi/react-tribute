import React, { useState } from "react";
import Button from "../Button/Button";

export default function Form({ theme }) {
   const [image, setImage] = useState('');

   const handleClick = e => e.target.style.animationPlayState = 'running';

   async function handleFileUpload(e) {
      const file = e.target.files[0];
      const base64 = await convertToBase64(file);

      return setImage(String(base64));
   };

   async function convertToBase64(file) {
      return new Promise((resolve, reject) => {
         const fileReader = new FileReader();

         fileReader.readAsDataURL(file);

         fileReader.onload = () => {
            resolve(fileReader.result);
         };
      });
   };

   let [ bgForm, textForm, bgInput ] = [ 'bg-slate-800', 'text-slate-200', 'bg-slate-600' ];

   if(theme === 'light') {
      bgForm = 'bg-slate-300';
      textForm = 'text-slate-700';
      bgInput = 'bg-slate-400';
   };

   return(
      <form action="/create/apis/pst" method="post" className="flex justify-center p-10 px-0 rounded-md">

         <section className="flex flex-col py-6 w-screen sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12">

            <section className={`flex flex-col items-center py-8 p-2 rounded-lg ${bgForm}`}>

               <section className="flex flex-col w-full px-10 sm:w-4/5 md:w-4/6 lg:w-7/12 xl:w-6/12 2xl:w-5/12">

                  <label htmlFor="title" className={`mb-4 text-xl font-semibold ${textForm} xl:text-4xl`}>
                     Título:
                  </label>

                  <input 
                     itemType="text" 
                     name="title" 
                     id="title" 
                     className={`mb-6 p-2 rounded-md text-slate-900 ${bgInput} focus:bg-slate-200 `} 
                  />

                  <label htmlFor="content" className={`mb-4 text-xl font-semibold ${textForm} xl:text-4xl`}>
                     Conteúdo:
                  </label>

                  <input 
                     itemType="text" 
                     name="content" 
                     id="content" 
                     className={`mb-9 p-2 rounded-md text-slate-900 ${bgInput} focus:bg-slate-200 `} 
                  />

                  <label htmlFor="foto" className={`mb-5 text-xl font-semibold ${textForm} xl:text-4xl`}>
                     Imagem:
                  </label>

                  <input
                     onChange={e => handleFileUpload(e)}
                     type="file"
                     accept=".png, .svg, .jpg, .jpeg" 
                     name="foto" 
                     id="foto" 
                     className={`${textForm} mb-10`} 
                  />

                  <input value={image} type="hidden" name="base64" id="base64" />

               </section>

               <section className="flex justify-center w-full -mb-12">

                  <Button
                     title={'Enviar'} 
                     func={handleClick} 
                  />

               </section>

            </section>

         </section>

      </form>
   );
};


