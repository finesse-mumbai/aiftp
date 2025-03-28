import React from 'react';
import { TextHoverEffect } from '../Heading/TextHoverEffect';

function JointAIFTP() {
  return (
    <div className=" bg-white relative md:py-16 py-8 overflow-hidden border">
      {/* Grid Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="w-full h-full origin-center"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px", // More refined grid
            transform: "perspective(800px) rotateX(45deg) scaleY(0.5)", // Adjusted perspective
            maskImage: "radial-gradient(circle, rgba(0, 0, 0, 0.7), transparent 70%)"
          }}
        ></div>
      </div>

      {/* Content with Hover Effect */}
      <div>
        <TextHoverEffect text="JOIN AIFTP" />
      </div>
    </div>
  );
}

export default JointAIFTP;
