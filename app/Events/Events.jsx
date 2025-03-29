'use client';
import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Heading from '../components/Heading/Heading';

// Dummy data for events
const events = [
    {
        heading: "National Tax Conference, Pune",
        startDate: "2025-04-10",
        endDate: "2025-04-12",
        imageUrl: "https://aiftponline.org/wp-content/uploads/2025/02/IMG-20250221-WA0072.jpg",
    },
    {
        heading: "National Tax Conference, Indore (Central Zone)",
        startDate: "2025-04-15",
        endDate: "2025-04-16",
        imageUrl: "https://aiftponline.org/wp-content/uploads/2024/12/IMG-20241202-WA0135-512x1024.jpg",
    },
    {
        heading: "National Tax Conference, Nellore (Southern Zone)",
        startDate: "2025-04-20",
        endDate: "2025-04-22",
        imageUrl: "https://aiftponline.org/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-27-at-15.55.30-768x1086.jpeg",
    },
    {
        heading: "Space Exploration Expo",
        startDate: "2025-04-25",
        endDate: "2025-04-27",
        imageUrl: "https://aiftponline.org/wp-content/uploads/2025/02/IMG-20250221-WA0072.jpg",
    },
    {
        heading: "National Tax Conference, Nellore (Southern Zone)",
        startDate: "2025-04-20",
        endDate: "2025-04-22",
        imageUrl: "https://aiftponline.org/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-27-at-15.55.30-768x1086.jpeg",
    },
    {
        heading: "Welcome back friends after a successful first National Tax Conference and N",
        startDate: "2025-05-05",
        endDate: "2025-05-06",
        imageUrl: "https://aiftponline.org/wp-content/uploads/2025/02/IMG-20250221-WA0072.jpg",
    },
];

function Events() {
    // Settings for react-slick slider
    const settings = {
        dots: false, // No pagination dots
        infinite: true, // Loop the slider
        speed: 500, // Transition speed
        slidesToShow: 4, // Show 4 cards at a time
        slidesToScroll: 1, // Scroll 1 card at a time
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024, // Below 1024px (lg)
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768, // Below 768px (md)
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640, // Below 640px (sm)
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className='relative mx-auto w-full max-w-screen-2xl pricing-container'>
       
       <div className="absolute inset-0" style={{
                backgroundImage: `
    linear-gradient(to right, #00000020 1px, transparent 1px),
    linear-gradient(to bottom, #00000020 1px, transparent 1px)
  `,
                backgroundSize: "60px 60px",
                maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, black, transparent)"
            }}></div>
        <div className="max-w-7xl mx-auto ">
            <h1 className="text-3xl font-bold  mb-10 text-center"><Heading headingText="Forthcoming Programs" size='large' /></h1>
            <Slider {...settings}>
                {events.map((event, index) => (
                    <div key={index} className="px-3">
                        <div className="bg-white rounded-lg px-1 py-1 border border-gray-200  overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <img
                                src={event.imageUrl}
                                alt={event.heading}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-gray-800 mb-3 truncate">{event.heading}</h2>
                                <div className="flex justify-between items-center">
                                    <button className="flex border border-gray-200 justify-center items-center gap-2 px-4 py-2 bg-[#0369a1]/2 text-black rounded-full hover:bg-[#0369a1] hover:text-white transition-colors duration-200 text-sm font-medium">
                                        <a href="#" className="">
                                            Register Now
                                        </a>
                                        <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                                    </button>
                                    <p className="text-sm text-[#868686]">{event.startDate}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
        <div className='w-full h-10 bg-[#0369a1]/10 absolute bottom-0 blur-3xl'>

        </div>
        </div>
    );
}

export default Events;
