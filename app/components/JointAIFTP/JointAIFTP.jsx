import React from 'react'
import { TextHoverEffect } from '../Heading/TextHoverEffect'

function JointAIFTP() {
  return (
    <div className="min-h-screen bg-white relative md:py-16 py-8 overflow-hidden border">
      {/* Flat ground grid */}
      <div className="absolute inset-0 overflow-hidden border">
        <div 
          className="w-full h-full origin-center border"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00000020 1px, transparent 1px),
              linear-gradient(to bottom, #00000020 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            transform: "perspective(500px) rotateX(60deg) scaleY(0.2)",
            maskImage: "radial-gradient(ellipse at end, black, transparent)"
          }}
        ></div>
      </div>
      
      <div className="relative z-10">
        <TextHoverEffect text="ARMAN" />
      </div>
    </div>
  )
}

export default JointAIFTP