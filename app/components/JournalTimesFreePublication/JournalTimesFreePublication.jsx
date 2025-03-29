"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import April_20 from "../../../public/journalImage/April_20.jpg";
import June_20 from "../../../public/journalImage/June_20.jpg";
import May_20 from "../../../public/journalImage/May_20.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Heading from "../Heading/Heading";

export default function JournalTimesFreePublication() {
    return (
        <div className="md:p-10 p-2">
            <div className="min-h-screen bg-white relative md:py-10 py-8 rounded-3xl border border-gray-200 overflow-clip">
                <div className="absolute inset-0 bg-[radial-gradient(#00000020_1px,transparent_1px)] [background-size:10px_10px]"></div>
                <div className="flex justify-center text-3xl font-bold mb-8 ">
                  <div className="bg-white relative text-center border shadow rounded-4xl py-2 border-gray-200  w-1/2"><Heading headingText="AIFTP Journals, Times & Publications"  /></div>
                </div>
                {/* Desktop View */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {/* Journal 1 */}
                    <div className="flex relative flex-col items-center bg-[#f9fafb] p-3 rounded-lg hover:shadow-xl transition-transform duration-300 ease-in-out border border-gray-200">

                        <div className="w-full bg-white border py-6 px-2 rounded-lg flex justify-center">
                            <Image src={May_20} alt="AIFTP Times" width={200} height={200} className="object-contain" />
                        </div>
                        <h2 className="text-lg font-bold text-gray-800 mt-4 text-center mb-3">AIFTP Journals</h2>
                        <Link href="#" >
                            <div className="flex justify-between items-center">
                                <button className="flex border border-gray-200 justify-center items-center gap-2 px-10 py-3 bg-white text-black rounded-full hover:bg-[#0369a1] hover:text-white transition-colors duration-200 text-sm font-medium">
                                    <a href="#" className="">
                                        Click Here to View All
                                    </a>
                                    <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                                </button>

                            </div>
                        </Link>

                    </div>

                    <div className="flex relative flex-col items-center bg-[#f9fafb] p-3 rounded-lg hover:shadow-xl transition-transform duration-300 ease-in-out border border-gray-200">

                        <div className="w-full bg-white border py-6 px-2 rounded-lg flex justify-center">
                            <Image src={April_20} alt="AIFTP Times" width={200} height={200} className="object-contain" />
                        </div>
                        <h2 className="text-lg font-bold text-gray-800 mt-4 text-center mb-3">AIFTP Free Publications</h2>
                        <Link href="#" >
                            <div className="flex justify-between items-center">
                                <button
                                
                                style={{
                                    position: "relative",
                                    background: "white",
                                    borderRadius: "100px",
                                    border: "1px solid transparent",
                                    backgroundImage:
                                      "linear-gradient(white, white), linear-gradient(to right, rgba(250, 204, 21, 0.8), rgba(239, 68, 68, 0.8), rgba(59, 130, 246, 0.8))",
                                    backgroundOrigin: "border-box",
                                    backgroundClip: "padding-box, border-box",}}
                                
                                className="flex border border-gray-200 justify-center items-center gap-2 px-10 py-3 bg-white text-black rounded-full hover:bg-[#0369a1]  transition-colors duration-200 text-sm font-medium">
                                    <a href="#" className="">
                                        Click Here to View All
                                    </a>
                                    <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                                </button>

                            </div>
                        </Link>

                    </div>

                    {/* Journal 3 */}
                    <div className="flex relative flex-col items-center bg-[#f9fafb] p-3 rounded-lg hover:shadow-xl transition-transform duration-300 ease-in-out border border-gray-200">

                        <div className="w-full bg-white border py-6 px-2 rounded-lg flex justify-center">
                            <Image src={June_20} alt="AIFTP Times" width={200} height={200} className="object-contain" />
                        </div>
                        <h2 className="text-lg font-bold text-gray-800 mt-4 text-center mb-3">AIFTP Times</h2>
                        <Link href="#" >
                            <div className="flex justify-between items-center">
                                <button className="flex border border-gray-200 justify-center items-center gap-2 px-10 py-3 bg-white text-black rounded-full hover:bg-[#0369a1] hover:text-white transition-colors duration-200 text-sm font-medium">
                                    <a href="#" className="">
                                        Click Here to View All
                                    </a>
                                    <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                                </button>

                            </div>
                        </Link>

                    </div>



                </div>
            </div>
        </div>
    );
}
