import React, { useState, useEffect } from 'react';

const RandomGif = ({ theme }) => {
    const [gifSrc, setGifSrc] = useState(null);

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
        <div className="relative w-[200px] h-[200px] md:w-[130px] md:h-[130px] bg-transparent overflow-hidden rounded-xl m-4">
            {gifSrc ? (
                <img
                    src={gifSrc}
                    alt="Random GIF"
                    className="absolute w-[200px] h-full md:w-[130px] md:h-[130px] object-cover"
                />
            ) : (

                <div className="w-[200px] h-full animate-pulse bg-gray-700" />
            )}
        </div>
    );
};

export default RandomGif;