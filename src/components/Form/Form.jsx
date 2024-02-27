import React from "react";
import { useState } from "react";

export default function Form() {
   const [image, setImage] = useState('');

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

   return(
      <form action="/create/apis/pst" method="post"
         className="flex justify-center p-10 px-0 rounded-md bg-slate-500">

         <section className="flex flex-col py-6 w-screen rounded-lg bg-slate-900 sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12">

            <section className="flex flex-col items-center py-8 p-2">

               <section className="flex flex-col w-full px-10 sm:w-4/5 md:w-4/6 lg:w-7/12 xl:w-6/12 2xl:w-5/12">

                  <label htmlFor="name" className="mb-2 text-xl font-semibold text-slate-200">Nome:</label>
                  <input itemType="text" name="name" id="name" 
                     className="mb-6 p-2 rounded-md text-slate-900 bg-slate-600 focus:bg-slate-200 " />

                  <label htmlFor="email" className="mb-2 text-xl font-semibold text-slate-200">E-mail:</label>
                  <input itemType="email" name="email" id="email" 
                     className="mb-6 p-2 rounded-md text-slate-900 bg-slate-600 focus:bg-slate-200 " />

                  <label htmlFor="foto" className="mb-2 text-xl font-semibold text-slate-200">Foto:</label>
                  <input
                     onChange={e => handleFileUpload(e)}
                     type="file"
                     accept=".png, .svg, .jpg, .jpeg" 
                     name="foto" 
                     id="foto" 
                     className="text-slate-100 m-1" 
                  />

                  <input type="hidden" name="base64" id="base64" value={image} />

               </section>

               <section>

                  <button type="submit" className="my-3 p-3 px-6 text-lg font-semibold rounded-md text-slate-300 bg-slate-700">
                     Enviar
                  </button>
                  
               </section>

            </section>

         </section>

      </form>
   );
};


