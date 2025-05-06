// import React from 'react'

// const ProjectDescriptions = ({ data, selectedProject }) => {
//   const crop = (string, maxLength) => {
//     return string.substring(0, maxLength);
//   }

//   return (
//     <div className="absolute top-[0px] h-full w-full z-[2] pointer-events-none">
//       {data.map((project, i) => {
//         const { title, description } = project;
//         return (
//           <div
//             key={i}
//             className="bg-lightred  dark:bg-lightviolet flex justify-between items-center px-[10%] transition-[clip-path] duration-500"
//             style={{
//               clipPath: selectedProject === i
//                 ? "inset(0 0 0)"
//                 : "inset(50% 4% 50%)"
//             }}
//           >
//             <p className="flex  text-dark uppercase font-bold text-[7.3vw]  leading-[8.5vw] md:leading-[13vw] m-0 relative z-[1]">
//               {crop(title, 10)}
//             </p>
//             <p className=" flex text-dark font-mono w-[10%] text-[1vw] md:text-sm font-bold">
//               {description}
//             </p>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default ProjectDescriptions

"use client";
import React from 'react';

const ProjectDescriptions = ({ data, selectedProject }) => {
  // Función para recortar texto si es demasiado largo
  const crop = (string, maxLength) => {
    if (!string) return "";
    return string.substring(0, maxLength);
  };

  // Verificación defensiva para asegurar que data es un array
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div className="text-center p-4">No hay proyectos disponibles</div>;
  }

  return (
    <div className="absolute top-[0px] h-full w-full z-[2] pointer-events-none">
      {data.map((project, i) => {
        // Verificación defensiva para cada proyecto individual
        if (!project) return null;
        
        // Desestructuración con valores por defecto
        const { title = "", description = "" } = project;
        
        return (
          <div
            key={i}
            className="bg-lightred dark:bg-lightviolet flex justify-between items-center px-[10%] transition-[clip-path] duration-500"
            style={{
              clipPath: selectedProject === i
                ? "inset(0 0 0)"
                : "inset(50% 4% 50%)"
            }}
          >
            <p className="flex text-dark uppercase font-bold text-[7.3vw] leading-[8.5vw] md:leading-[13vw] m-0 relative z-[1]">
              {crop(title, 10)}
            </p>
            <p className="flex text-dark font-mono w-[10%] text-[1vw] md:text-sm font-bold">
              {description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectDescriptions;
