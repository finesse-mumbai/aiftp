import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Heading from '../Heading/Heading';

function WhatsNewCard({ title, icon, newtext }) {
    return (
        <div className="relative w-full max-w-sm ">
            <div 
                className="relative rounded-xl p-3 border border-l-emerald-700/20 border-r-blue-500/20 border-t-emerald-700/20 border-b-blue-700/20 group hover:shadow-lg transition-shadow duration-300"
                style={{
                    background: "linear-gradient(135deg, rgba(16, 185, 129, 0.04), rgba(59, 130, 246, 0.08))",
                    backdropFilter: "blur(3px)"
                }}
            >

                {/* New Badge */}
                {newtext && (
                    <div className="absolute -top-4 font-medium -right-2 bg-black/90 border border-gray-200 px-3 py-1 rounded-3xl">
                        <Heading headingText={newtext} size="tosmall" />
                    </div>
                )}

                {/* Title & Icon */}
                <div className="flex flex-col gap-2 mb-4">
                    <div className=" bg-white p-2 w-10 h-10 rounded-full">
                        <FontAwesomeIcon icon={icon} className="h-6 w-6 text-[#0369a1]" />
                    </div>

                    <h3 className="text-md text-gray-800 font-semibold">{title}</h3>
                </div>

                {/* Button */}
                <button className="inline-flex items-center text-sm font-medium  text-black/70 hover:text-black transition-colors group/button">
                    <span className="mr-2">Click here</span>
                    <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
}

export default WhatsNewCard;
