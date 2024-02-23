import React from "react";

export default function Post({ bg, title, content }) {
   const classes = `p-10 m-3 ${bg} rounded-md`;

   return(
      <section className={classes}>
         <h1 className="text-4xl py-3">{title}</h1>
         <p className="text-lg">{content}</p>
      </section>
   );
}

