import React, { useState } from "react";
import Post from "../Post/Post";

const [ content1, content2 ] = [
   `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nostrum adipisci corrupti et 
   dolor fuga vitae totam. Cum impedit molestias atque iure consectetur iusto id. 
   Similique saepe repellendus minima at.`,

   `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nostrum adipisci corrupti et 
   dolor fuga vitae totam. Cum impedit molestias atque iure consectetur iusto id. 
   Similique saepe repellendus minima at.`
];

export default function Home({ theme }) {
   let userTheme = 'bg-slate-800';

   (theme === 'light') ? userTheme = 'bg-slate-200' : 0;

   var userClasses = `flex justify-center items-center h-screen ${userTheme}`;

   return(
      <main className={userClasses}>

         <section className="flex justify-evenly p-10 w-9/12">

            <Post bg={'bg-red-400'} title={'Post do Blog 1'} content={content1} />

            <Post bg={'bg-blue-400'} title={'Post do blog 2'} content={content2} />

         </section>

      </main>
   );
};

