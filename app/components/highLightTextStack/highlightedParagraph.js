'use client';
import React from 'react';
import HighlightText from './highLightTextStack';


const HighlightedParagraph = () => {
    return (
        <div className="content__inner p-6">
            <p className="font-suse uppercase  text-[150px] md:text-7xl mb-32 md:mb-10 bg-transparent">
                <HighlightText text="Stack" />
            </p>
        </div>
    );
};

export default HighlightedParagraph;