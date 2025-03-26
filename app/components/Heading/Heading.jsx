import React from 'react';


export default function Heading({ headingText, size = 'medium' }) {
    return (
        <div className="masking-container">
            <h1 className={`masked-text ${size}`}>
                {headingText}
            </h1>
        </div>
    );
}