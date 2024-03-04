import React from "react";
import { useState, useEffect } from "react";
import { CircleLoader } from 'react-spinners';

export default function Edit() {
   const [ image, setImage ] = useState('');
   const [ noteData, setNoteData ] = useState('');
   const [ loading, setLoading ] = useState(false);
  
   useEffect(() => {
      async function getId() {
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

   return(
      <section
       className="flex flex-col min-h-screen max-h-fit px-5 py-10 bg-slate-400">

         {
            loading
            ?
            <>
               <section className="flex justify-center w-screen h-screen mt-52 overflow-x-hidden font-semibold text-6xl">
                  
                  <CircleLoader
                     cssOverride={true}
                     size={120}
                     color="#000f94"
                  />
                  
               </section>
            </>
            :
            <form method="post" action={`/publi/apis/edit/post/${noteData._id}`} className="flex justify-center flex-wrap p-3 rounded-md shadow-xl shadow-slate-600 text-slate-100 bg-slate-900">

            <label className="p-5 text-2xl" htmlFor="title">Novo título:</label>
            <input
               placeholder={noteData.title}
               className="p-2 self-center font-semibold text-slate-900 rounded-sm bg-slate-100" 
               type="text" 
               name="title" 
               id="title" 
            />

            <label className="p-5 text-2xl" htmlFor="email">Novo conteúdo:</label>
            <input 
               placeholder={noteData.content} 
               className="p-2 self-center font-semibold text-slate-900 rounded-sm bg-slate-100" 
               type="text" 
               name="content" 
               id="content" 
            />

            <label className="p-5 text-2xl" htmlFor="foto">Nova imagem:</label>
            <input
               onChange={handleFileUpload}
               className="p-2 self-center font-semibold text-slate-100 rounded-sm" 
               type="file" 
               name="foto" 
               id="foto" 
            />

            <input value={image} type="hidden" name="base64" id="base64" />

            <button 
               className="px-4 py-2 m-5 self-center text-2xl font-semibold rounded-md text-slate-600 bg-slate-300
               hover:bg-slate-400 hover:text-slate-800" 
               type="submit">
               Send
            </button>

            </form>
         }

      </section>
   );
};



