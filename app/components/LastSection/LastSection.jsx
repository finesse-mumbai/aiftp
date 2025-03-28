import React from 'react'
import Image from 'next/image'
import globe from '../../../public/Global network icon.png'
import handshake from '../../../public/Join AIFTP icon.png'
import people from '../../../public/Members icon.png'
import Heading from '../Heading/Heading'

function LastSection() {
  const cardData = [
    {
      id: 1,
      image: globe,
      alt: "Global Network",
      title: "Global Network Connections",
    },
    {
      id: 2,
      image: handshake,
      alt: "Join AIFTP",
      title: "Join Our Community",
    },
    {
      id: 3,
      image: people,
      alt: "Members",
      title: "Active Members",
    },
    {
      id: 4,
      image: globe,
      alt: "Global Network",
      title: "Global Network Connections",
    },
    {
      id: 5,
      image: handshake,
      alt: "Join AIFTP",
      title: "Join Our Community",
    },
    {
      id: 6,
      image: people,
      alt: "Members",
      title: "Active Members",
    },
    {
      id: 7,
      image: globe,
      alt: "Global Network",
      title: "Global Network Connections",
    },
    {
      id: 8,
      image: handshake,
      alt: "Join AIFTP",
      title: "Join Our Community",
    },
    {
      id: 9,
      image: people,
      alt: "Members",
      title: "Active Members",
    },
    {
      id: 10,
      image: globe,
      alt: "Global Network",
      title: "Global Network Connections",
    },
  ];


  return (
    <div className="min-h-screen bg-[#0369a1]/5 py-12 px-4">
        <h1 className='text-center font-bold'>
        <Heading headingText="AIFTP Archive" size='large' />
        </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-items-center p-10">
        {cardData.map((card, index) => (
          <div key={card.id} className="flex flex-col items-center">
            <div className="md:w-36 md:h-36 w-44 h-44 bg-white rounded-full shadow flex items-center justify-center p-4 border border-gray-100 hover:shadow-xl transition-shadow relative">
              <Image 
                src={card.image}
                alt={card.alt}
                fill
                className="object-contain p-4"
              />
            </div>
            <p className="mt-4 text-center text-[#0369a1] font-stretch-75% font-bold">
              <em>{card.title}</em>
            </p>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default LastSection