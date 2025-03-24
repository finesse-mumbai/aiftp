'use client'
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderContent from './ImageSliderContent';


const PrevArrow = ({ className, style, onClick }) => (
    <button
        className={`${className} slick-prev`}
        style={{ ...style, zIndex: 10, left: '10px', width: '40px', height: '40px', background: 'rgba(0,0,0,0.7)', borderRadius: '50%' }}
        onClick={onClick}
    >
        <span className="sr-only">Previous</span>
    </button>
);

const NextArrow = ({ className, style, onClick }) => (
    <button
        className={`${className} slick-next`}
        style={{ ...style, zIndex: 10, right: '10px', width: '40px', height: '40px', background: 'rgba(0,0,0,0.7)', borderRadius: '50%' }}
        onClick={onClick}
    >
        <span className="sr-only">Next</span>
    </button>
);

function ImageSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <div className="mx-auto w-full max-w-screen-2xl">
            <Slider {...settings}>
                {sliderContent.map((slide) => (
                    <div key={slide.id} className="relative">
                        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                            <img
                                src={slide.img}
                                alt={slide.caption}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 text-gray-300 p-4 bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-black">
                                <p className="text-sm md:text-base lg:text-lg text-center">
                                    {slide.caption}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ImageSlider;