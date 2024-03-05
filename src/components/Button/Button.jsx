import React from "react";

export default function Button({ title, func }) {
   return(
      <>
         <button 
            className='btnPubliAnimation px-10 py-2 mb-20 font-semibold rounded-md bg-slate-700 text-slate-200 hover:bg-slate-800 hover:text-slate-50 hover:px-12 ' 
            onClick={func}>
            {title}
         </button>
      </>
   );
};

