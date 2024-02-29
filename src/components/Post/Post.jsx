import React from "react";

export default function Post({ bg, title, content, src }) {
   const classes = `p-10 m-5 my-20 rounded-md shadow-xl shadow-slate-600 ${bg}`;
   // p-10 m-5 my-20 w-2/5 rounded-md shadow-xl shadow-slate-600 ${bg}
   return(
      <section className={classes}>
         <h1 className="text-5xl pb-7 pt-5">{title}</h1>
         <p className="text-lg mb-10">{content}</p>
         <img className="w-58" src={src} />
      </section>
   );
};

