import React, { useState } from "react";
import { FaX } from 'react-icons/fa6'

export default function Post({ bg, title, content, src }) {
   const [ imgHidden, setImgHidden ] = useState('hidden');

   const handleImgClick = () => setImgHidden('');

   const handleOutImgClick = () => (imgHidden === '') ? setImgHidden('hidden') : 0;

   const classes = `p-10 m-5 my-20 rounded-md shadow-xl shadow-slate-600 ${bg}`;

   return(
      <section onClick={handleOutImgClick} className={classes}>

         <section className={`${imgHidden} flex items-center justify-center grow w-screen overflow-x-hidden fixed top-0 left-0 bg-slate-900 bg-opacity-60`}>
            <div className="fixed top-6 right-6">

               <FaX className="text-3xl font-semibold text-slate-600 hover:text-slate-50 hover:cursor-pointer transition-all ease-in-out duration-0" />

            </div>

            <div className="flex items-center justify-center w-7/12 h-screen">

               <img src={src} />

            </div>
         </section>

         <h1 className="text-5xl pb-7 pt-5 font-semibold">{title}</h1>

         <p className="text-lg mb-10">{content}</p>
         
         <img onClick={handleImgClick} className="imgHover w-58)" src={src} />
      </section>
   );
};

