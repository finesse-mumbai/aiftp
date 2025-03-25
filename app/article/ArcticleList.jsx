import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faShareAlt, faBookOpen  } from '@fortawesome/free-solid-svg-icons';

const articles = [
    {
        heading: "The Future of Artificial Intelligence",
        postDate: "2025-03-25",
        content: "Artificial Intelligence (AI) is transforming industries by automating tasks, enhancing decision-making, and improving user experiences. From chatbots to self-driving cars, AI is becoming a crucial part of our daily lives. Artificial Intelligence (AI) is transforming industries by automating tasks, enhancing decision-making, and improving user experiences. From chatbots to self-driving cars, AI is becoming a crucial part of our daily lives."
    },
    {
        heading: "Understanding Quantum Computing",
        postDate: "2025-03-24",
        content: "Quantum computing is a revolutionary field that leverages quantum mechanics to perform computations at unprecedented speeds. Researchers are exploring its potential to solve complex problems that classical computers cannot handle efficiently."
    },
    {
        heading: "The Impact of Climate Change",
        postDate: "2025-03-23",
        content: "Climate change is a pressing global issue affecting weather patterns, ecosystems, and sea levels. Immediate actions, including reducing carbon emissions and promoting renewable energy, are necessary to mitigate its effects."
    },
    {
        heading: "Exploring Space: The Next Frontier",
        postDate: "2025-03-22",
        content: "Space exploration has always fascinated humanity. With advancements in technology, missions to Mars and beyond are becoming a reality, opening doors for new scientific discoveries and potential human colonization."
    },
    {
        heading: "The Rise of Electric Vehicles",
        postDate: "2025-03-21",
        content: "Electric vehicles (EVs) are gaining popularity as a sustainable alternative to traditional gasoline-powered cars. With improved battery technology and charging infrastructure, EVs are set to dominate the future of transportation."
    },
    {
        heading: "The Importance of Mental Health Awareness",
        postDate: "2025-03-20",
        content: "Mental health is just as important as physical health. Raising awareness, reducing stigma, and providing access to mental health resources can significantly improve the well-being of individuals and communities."
    },
    {
        heading: "Blockchain and Its Applications",
        postDate: "2025-03-19",
        content: "Blockchain technology is more than just cryptocurrency. It offers secure and transparent solutions for finance, supply chain management, and data security, revolutionizing multiple industries."
    },
    {
        heading: "The Evolution of Smartphones",
        postDate: "2025-03-18",
        content: "Smartphones have come a long way from simple communication devices to powerful computing tools. Innovations in mobile technology continue to enhance connectivity, productivity, and entertainment."
    },
    {
        heading: "Healthy Eating Habits for a Better Life",
        postDate: "2025-03-17",
        content: "A balanced diet plays a crucial role in maintaining overall health. Consuming nutritious foods, staying hydrated, and avoiding processed meals contribute to long-term well-being and disease prevention."
    },
    {
        heading: "The Role of 5G in Modern Communication",
        postDate: "2025-03-16",
        content: "5G technology is revolutionizing communication by providing faster internet speeds, lower latency, and improved connectivity. It is paving the way for smart cities, IoT, and enhanced digital experiences."
    }
];

function ArticleList() {
    return (
        <div className="max-w-6xl mx-auto p-5">

            <div className="flex items-center gap-3 mb-8">
                    <div className="bg-blue-500/10 p-2 rounded-full">
                      <FontAwesomeIcon icon={faBookOpen} className="h-6 w-6 text-[#0369a1]" />
                    </div>
                    <h1 className="text-3xl font-bold text-black text-center md:text-left">
                      President's Message
                    </h1>
                  </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-10">
                {articles.slice(0, 2).map((article, index) => (
                    <div className="relative">
                    {/* Left Gradient Line - Positioned Outside */}
                    <span className="rotate-90 absolute left-21.5 bottom-24  transform -translate-x-full bg-gradient-to-r from-transparent via-blue-600 to-transparent h-px w-1/4"></span>
                
                    <div
                        key={index}
                        className="relative bg-white rounded border border-gray-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">{article.heading}</h2>
                        <p className="text-sm text-[#868686] mb-3">{article.postDate}</p>
                        <p className="text-[#868686] mb-4 line-clamp-3">
                            {article.content}
                        </p>
                        <div className="flex gap-3">
                            <button className="flex border border-gray-200 justify-center items-center gap-2 px-4 py-2 bg-[#0369a1]/10 text-black rounded-4xl hover:bg-warm-coral transition-colors duration-200 text-sm font-medium hover:bg-[#0369a1] hover:text-white">
                                <a href="#" className="">
                                    Read More
                                </a>
                                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                            </button>
                            <button className="flex justify-center items-center gap-2 px-8 py-2 border border-gray-200 bg-gray-50 rounded-4xl hover:bg-gray-300 transition-colors duration-200 text-sm font-medium">
                                <a href="#" className="">
                                    Share
                                </a>
                                <FontAwesomeIcon icon={faShareAlt} className="text-sm" />
                            </button>
                        </div>
                
                        {/* Right Gradient Line - Inside the Box */}
                        <span className="absolute right-0 bottom-0 bg-gradient-to-r from-transparent via-blue-600 to-transparent h-px w-1/4"></span>
                    </div>
                </div>
                
                ))}
            </div>
            <div className="mt-6 text-center">
                <button className="px-6 py-3 bg-[#0369a1] text-white rounded-full hover:bg-[#0483c8] transition-colors duration-200 text-sm font-medium">
                    View All Articles
                </button>
            </div>
        </div>
    );
}

export default ArticleList;