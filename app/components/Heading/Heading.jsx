import React from 'react'

export default function Heading( {headingText}) {
    return (
        <div className="masking-container">
            <h1 className="masked-text">{headingText}</h1>
        </div>
    )
}
