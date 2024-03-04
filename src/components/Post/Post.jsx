import React, { useState } from "react";

export default function Post({ bg, title, content, src }) {
   const [ imgHidden, setImgHidden ] = useState('hidden');

   function handleImgClick() {
      return setImgHidden('');
   }

   function handleOutImgClick() {
      if(imgHidden === '') return setImgHidden('hidden');
      return 
   }

   const classes = `p-10 m-5 my-20 rounded-md shadow-xl shadow-slate-600 ${bg}`;
   // p-10 m-5 my-20 w-2/5 rounded-md shadow-xl shadow-slate-600 ${bg}
   return(
      <section onClick={handleOutImgClick} className={classes}>
         <section className={`${imgHidden} flex items-center justify-center grow w-screen overflow-x-hidden fixed top-0 left-0 bg-slate-900 bg-opacity-60`}>
            <div className="flex items-center justify-center w-8/12 h-screen">
               <img src={src} />
            </div>
         </section>

         <h1 className="text-5xl pb-7 pt-5">{title}</h1>
         <p className="text-lg mb-10">{content}</p>
         <img onClick={handleImgClick} className="imgHover w-58 hover:cursor-pointer)" src={src} />
      </section>
   );
};

