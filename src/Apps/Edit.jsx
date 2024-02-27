import React from "react";
import { useState, useEffect } from "react";

function Edit() {
   const [ image, setImage ] = useState('');
   const [ queryId, setQueryId ] = useState(null);
   const [ noteData, setNoteData ] = useState(0);
  
   useEffect(() => {
      async function getId() {
         const searchParams = new URLSearchParams(window.location.search);

         const id = searchParams.get('id');
         
         setQueryId(id);
      };
      getId();
   }, []);

   async function handleInputs() {
      const note = await fetch(`/publi/apis/search/${queryId}`);
      const nt = await note.json();

      setNoteData(nt[0]);
      
      return noteData;
   };

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
      <section onMouseOver={handleInputs}
       className="flex flex-col min-h-screen max-h-fit px-5 py-10 bg-slate-400">

         <form method="post" action={`/publi/apis/edit/post/${noteData._id}`} className="flex justify-center flex-wrap p-3 rounded-md shadow-xl shadow-slate-600 text-slate-100 bg-slate-900">

            <label className="p-5 text-2xl" htmlFor="name">Novo nome:</label>
            <input
               placeholder={noteData.name}
               className="p-2 self-center font-semibold text-slate-900 rounded-sm bg-slate-100" 
               type="text" 
               name="name" 
               id="name" 
            />

            <label className="p-5 text-2xl" htmlFor="email">Novo e-mail:</label>
            <input 
               placeholder={noteData.email} 
               className="p-2 self-center font-semibold text-slate-900 rounded-sm bg-slate-100" 
               type="email" 
               name="email" 
               id="email" 
            />

            <label className="p-5 text-2xl" htmlFor="foto">Nova imagem:</label>
            <input
               onChange={handleFileUpload}
               className="p-2 self-center font-semibold text-slate-900 rounded-sm" 
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

      </section>
   );
};

export default Edit;

