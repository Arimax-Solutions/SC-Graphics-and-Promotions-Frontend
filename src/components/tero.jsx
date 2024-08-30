import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import comma from '../assets/comma.png';

const testimonials = [
    {
        quote: "SC graphics joined us as the gift partner for a project launched by Leo club of University of Kelaniya. They made souvenirs for our project's resource persons. They made the souvenirs very creatively and beautifully. Their products are top quality. SC graphics is highly recommended!",
        name: "Vidura Senevirathne",
        title: "University of Kelaniya",
    },
    {
        quote: "Highly recommended for any wooden work and advertising. Good job SC graphics. Thank you for done my name board beautifully.",
        name: "Chathuranga Wimalasena",
        title: "University of Kelaniya",
    },
    {
        quote: "Highly recommended for any wooden work and advertising. Good job SC graphics. Thank you for done my name board beautifully.",
        name: "Chathuranga Wimalasena",
        title: "University of Kelaniya",
    },
];

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,  
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 640, 
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1,
                    arrows: true, 
                },
            },
        ],
    };

    return (
        <div className="flex items-center justify-center py-12">
            <div className="w-full max-w-4xl px-4 sm:px-0">
                <h2 className="text-3xl font-bold text-left mb-8">Testimonials from our customers</h2>
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-4">
                            <div className="bg-white shadow-lg p-6 rounded-lg h-full">
                                <div className="text-lg leading-relaxed mb-4 flex-grow">
                                    <img src={comma} className="w-10 h-10 sm:w-14 sm:h-14" alt="Comma Image" />
                                    <p className="italic mt-4">"{testimonial.quote}"</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonials;
