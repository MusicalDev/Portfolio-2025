// import React, { useState, useEffect } from 'react';

// const RandomGif = ({ theme }) => {
//     const [gifSrc, setGifSrc] = useState('');

//     const lightGifs = [
//         '/img/gif/light1.gif',
//         '/img/gif/light2.gif',
//         '/img/gif/light3.gif',
//         '/img/gif/light4.gif',
//         '/img/gif/light5.gif',
//         '/img/gif/light6.gif',
//         '/img/gif/light7.gif',
//         '/img/gif/light8.gif',
//     ];

//     const darkGifs = [
//         '/img/gif/dark1.gif',
//         '/img/gif/dark2.gif',
//         '/img/gif/dark3.gif',
//         '/img/gif/dark4.gif',
//         '/img/gif/dark5.gif',
//         '/img/gif/dark6.gif',
//         '/img/gif/dark7.gif',
//         '/img/gif/dark8.gif',
//         '/img/gif/dark9.gif',
//     ];

//     useEffect(() => {
//         const gifs = theme === 'light' ? lightGifs : darkGifs;
//         const randomIndex = Math.floor(Math.random() * gifs.length);
//         setGifSrc(gifs[randomIndex]);
//     }, [theme]);

//     return (
    
//         <div className="w-auto h-[200px] md:w-[130px] md:h-[130px] bg-dark overflow-hidden rounded-xl m-4">
//             <img 
//             src={gifSrc} 
//             alt="Random GIF" 
//             className=" w-[200px] h-[200px] md:w-[130px] md:h-[130px] object-cover" />
//         </div>

//     );
// };

// export default RandomGif;

import React, { useState, useEffect } from 'react';

const RandomGif = ({ theme }) => {
    const [gifSrc, setGifSrc] = useState(null); // Cambiado de '' a null

    const lightGifs = [
        '/img/gif/light1.gif',
        '/img/gif/light2.gif',
        '/img/gif/light3.gif',
        '/img/gif/light4.gif',
        '/img/gif/light5.gif',
        '/img/gif/light6.gif',
        '/img/gif/light7.gif',
        '/img/gif/light8.gif',
    ];

    const darkGifs = [
        '/img/gif/dark1.gif',
        '/img/gif/dark2.gif',
        '/img/gif/dark3.gif',
        '/img/gif/dark4.gif',
        '/img/gif/dark5.gif',
        '/img/gif/dark6.gif',
        '/img/gif/dark7.gif',
        '/img/gif/dark8.gif',
        '/img/gif/dark9.gif',
    ];

    useEffect(() => {
        const gifs = theme === 'light' ? lightGifs : darkGifs;
        const randomIndex = Math.floor(Math.random() * gifs.length);
        setGifSrc(gifs[randomIndex]);
    }, [theme]);

    return (
        <div className="w-auto h-[200px] md:w-[130px] md:h-[130px] bg-dark overflow-hidden rounded-xl m-4">
            {gifSrc ? (
                <img 
                    src={gifSrc} 
                    alt="Random GIF" 
                    className="w-[200px] h-[200px] md:w-[130px] md:h-[130px] object-cover" 
                />
            ) : (
                // Opcional: Puedes mostrar un placeholder mientras carga
                <div className="w-full h-full animate-pulse bg-gray-700" />
            )}
        </div>
    );
};

export default RandomGif;