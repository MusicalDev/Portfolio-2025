import React, { useState, useRef, useEffect } from 'react';

const DownloadButton = ({ text = "Documents" }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setDropdownOpen((prev) => !prev);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    const handleEscapeKey = (event) => {
        if (event.key === 'Escape') {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, []);

    return (
        <div className="relative inline-block mt-20 mb-60 " ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="group flex items-center justify-start w-fit h-[45px]  px-4 rounded-xl bg-gray/30 backdrop-blur-sm dark:bg-graylight gap-2.5 cursor-pointer  duration-300 transition-transform hover:scale-[98%] border-[1px] border-light/70 hover:bg-gray dark:hover:bg-lightyel/60 "
            >
                <span className="w-10 h-fit flex flex-col items-center justify-end relative">
                    {/* File Back */}
                    <svg
                        className="z-10 w-4/5 h-auto"
                        width="146"
                        height="113"
                        viewBox="0 0 146 113"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 4C0 1.79086 1.79086 0 4 0H50.3802C51.8285 0 53.2056 0.627965 54.1553 1.72142L64.3303 13.4371C65.2799 14.5306 66.657 15.1585 68.1053 15.1585H141.509C143.718 15.1585 145.509 16.9494 145.509 19.1585V109C145.509 111.209 143.718 113 141.509 113H3.99999C1.79085 113 0 111.209 0 109V4Z"
                            fill="url(#paint0_linear_117_4)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_117_4"
                                x1="0"
                                y1="0"
                                x2="72.93"
                                y2="95.4804"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#fef08a" />
                                <stop offset="1" stopColor="#b88d14" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* File Page */}
                    <svg
                        className="w-1/2 h-auto absolute z-20 transition-all duration-300 ease-out group-hover:-translate-y-[5px]"
                        width="88"
                        height="99"
                        viewBox="0 0 88 99"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="88" height="99" fill="url(#paint0_linear_117_6)" />
                        <defs>
                            <linearGradient
                                id="paint0_linear_117_6"
                                x1="0"
                                y1="0"
                                x2="81"
                                y2="160.5"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="#686868" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* File Front */}
                    <svg
                        className="w-[85%] h-auto absolute z-30 opacity-95 origin-bottom transition-all duration-300 ease-out group-hover:rotate-x-12"
                        width="160"
                        height="79"
                        viewBox="0 0 160 79"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.29306 12.2478C0.133905 9.38186 2.41499 6.97059 5.28537 6.97059H30.419H58.1902C59.5751 6.97059 60.9288 6.55982 62.0802 5.79025L68.977 1.18034C70.1283 0.410771 71.482 0 72.8669 0H77H155.462C157.87 0 159.733 2.1129 159.43 4.50232L150.443 75.5023C150.19 77.5013 148.489 79 146.474 79H7.78403C5.66106 79 3.9079 77.3415 3.79019 75.2218L0.29306 12.2478Z"
                            fill="url(#paint0_linear_117_5)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_117_5"
                                x1="38.7619"
                                y1="8.71323"
                                x2="66.9106"
                                y2="82.8317"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#fef08a" />
                                <stop offset="1" stopColor="#b88d14" />
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                <p className="text-dark dark:text-light2 hover:text-light dark:hover:text-dark text-lg font-semibold tracking-wider">{text}</p>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
                <div className="absolute top-14 left-0 dark:bg-graylight  bg-gray/30 backdrop-blur-sm border-light/70 border-[1px] shadow-md rounded-xl p-2 space-y-2 w-full">
                    <a
                        href="/path/to/cv-spanish.pdf"
                        download
                        className="flex px-4 py-2 text-dark font-500 hover:bg-gray hover:text-lightviolet dark:text-light dark:hover:bg-lightyel/60 dark:hover:text-dark rounded-[10px] justify-center items-center"
                    >
                        Descargar CV &nbsp; <svg width="14" height="14" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_0_1)">
                            <path d="M0 256C0 287.314 5.633 317.31 15.923 345.043L256 367.304L496.077 345.043C506.367 317.31 512 287.314 512 256C512 224.686 506.367 194.69 496.077 166.957L256 144.696L15.923 166.957C5.633 194.69 0 224.686 0 256H0Z" fill="#FFDA44" />
                            <path d="M496.077 166.957C459.906 69.473 366.071 0 256 0C145.929 0 52.094 69.473 15.923 166.957H496.077Z" fill="#D80027" />
                            <path d="M15.923 345.043C52.094 442.527 145.929 512 256 512C366.071 512 459.906 442.527 496.077 345.043H15.923Z" fill="#D80027" />
                        </g>
                            <defs>
                                <clipPath id="clip0_0_1">
                                    <rect width="512" height="512" fill="white" />
                                </clipPath>
                            </defs></svg>
                    </a>
                    <a
                        href="/path/to/cv-english.pdf"
                        download
                        className="flex px-4 py-2 text-dark font-500 hover:bg-gray hover:text-lightviolet dark:text-light dark:hover:bg-lightyel/60 dark:hover:text-dark rounded-[10px] justify-center items-center"
                    >
                        Download CV &nbsp; <svg width="14" height="14" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_0_1)">
                            <path d="M256 511.999C397.385 511.999 512 397.384 512 255.999C512 114.614 397.385 -0.000976562 256 -0.000976562C114.615 -0.000976562 0 114.614 0 255.999C0 397.384 114.615 511.999 256 511.999Z" fill="#F0F0F0" />
                            <path d="M244.87 255.999H512C512 232.893 508.92 210.509 503.181 189.216H244.87V255.999Z" fill="#D80027" />
                            <path d="M244.87 122.434H474.426C458.755 96.862 438.718 74.259 415.356 55.651H244.87V122.434Z" fill="#D80027" />
                            <path d="M256 511.999C316.249 511.999 371.626 491.175 415.356 456.347H96.644C140.374 491.175 195.751 511.999 256 511.999Z" fill="#D80027" />
                            <path d="M37.574 389.564H474.426C487.007 369.035 496.764 346.595 503.181 322.781H8.819C15.236 346.595 24.993 369.035 37.574 389.564V389.564Z" fill="#D80027" />
                            <path d="M118.584 39.977H141.913L120.213 55.742L128.502 81.251L106.803 65.486L85.104 81.251L92.264 59.214C73.158 75.129 56.412 93.775 42.612 114.551H50.087L36.274 124.586C34.122 128.176 32.058 131.823 30.08 135.524L36.676 155.825L24.37 146.884C21.311 153.365 18.513 159.992 15.998 166.757L23.265 189.125H50.087L28.387 204.89L36.676 230.399L14.977 214.634L1.979 224.078C0.678 234.536 0 245.188 0 255.999H256C256 114.615 256 97.947 256 -0.000976562C205.428 -0.000976562 158.285 14.669 118.584 39.977V39.977ZM128.502 230.399L106.803 214.634L85.104 230.399L93.393 204.89L71.693 189.125H98.515L106.803 163.616L115.091 189.125H141.913L120.213 204.89L128.502 230.399ZM120.213 130.316L128.502 155.825L106.803 140.06L85.104 155.825L93.393 130.316L71.693 114.551H98.515L106.803 89.042L115.091 114.551H141.913L120.213 130.316ZM220.328 230.399L198.629 214.634L176.93 230.399L185.219 204.89L163.519 189.125H190.341L198.629 163.616L206.917 189.125H233.739L212.039 204.89L220.328 230.399ZM212.039 130.316L220.328 155.825L198.629 140.06L176.93 155.825L185.219 130.316L163.519 114.551H190.341L198.629 89.042L206.917 114.551H233.739L212.039 130.316ZM212.039 55.742L220.328 81.251L198.629 65.486L176.93 81.251L185.219 55.742L163.519 39.977H190.341L198.629 14.468L206.917 39.977H233.739L212.039 55.742Z" fill="#0052B4" />
                        </g>
                            <defs>
                                <clipPath id="clip0_0_1">
                                    <rect width="512" height="512" fill="white" transform="translate(0 -0.000976562)" />
                                </clipPath>
                            </defs> </svg>
                    </a>
                </div>
            )}
        </div>
    );
};

export default DownloadButton;
