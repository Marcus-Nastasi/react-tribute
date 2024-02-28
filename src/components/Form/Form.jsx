import React, { useState } from "react";

export default function Form() {
   const [image, setImage] = useState('');

   function handleClick(e) {
      e.target.style.animationPlayState = 'running';
   };

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

   return(
      <form action="/create/apis/pst" method="post" className="flex justify-center p-10 px-0 rounded-md">

         <section className="flex flex-col py-6 w-screen sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12">

            <section className="flex flex-col items-center py-8 p-2 rounded-lg bg-slate-800">

               <section className="flex flex-col w-full px-10 sm:w-4/5 md:w-4/6 lg:w-7/12 xl:w-6/12 2xl:w-5/12">

                  <label htmlFor="title" className="mb-4 text-xl font-semibold text-slate-200 xl:text-4xl">
                     Título:
                  </label>

                  <input 
                     itemType="text" 
                     name="title" 
                     id="title" 
                     className="mb-6 p-2 rounded-md text-slate-900 bg-slate-600 focus:bg-slate-200 " />

                  <label htmlFor="content" className="mb-4 text-xl font-semibold text-slate-200 xl:text-4xl">
                     Conteúdo:
                  </label>

                  <input 
                     itemType="text" 
                     name="content" 
                     id="content" 
                     className="mb-9 p-2 rounded-md text-slate-900 bg-slate-600 focus:bg-slate-200 " />

                  <label htmlFor="foto" className="mb-5 text-xl font-semibold text-slate-200 xl:text-4xl">
                     Imagem:
                  </label>

                  <input
                     onChange={e => handleFileUpload(e)}
                     type="file"
                     accept=".png, .svg, .jpg, .jpeg" 
                     name="foto" 
                     id="foto" 
                     className="text-slate-100 mb-10" 
                  />

                  <input value={image} type="hidden" name="base64" id="base64" />

               </section>

               <section className="flex justify-center w-full">

                  <button
                     onClick={handleClick}
                     type="submit" 
                     className="btnPubliAnimation my-3 py-2 px-7 text-lg font-semibold rounded-md transition-all ease-in-out duration-300 text-slate-300 bg-slate-700 hover:bg-slate-900 hover:text-slate-100 hover:px-9">
                     Enviar
                  </button>

               </section>

            </section>

         </section>

      </form>
   );
};


