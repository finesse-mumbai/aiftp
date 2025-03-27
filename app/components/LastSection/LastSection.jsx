import React from 'react'
import Image from 'next/image'
import globe from '../../../public/Global network icon.png'
import handshake from '../../../public/Join AIFTP icon.png'
import people from '../../../public/Members icon.png'
import Heading from '../Heading/Heading'

function LastSection() {
  const cardData = [
    {
      image: globe,
      alt: "Global Network",
      title: "Global Network Connections",
      
    },
    {
      image: handshake,
      alt: "Join AIFTP",
      title: "Join Our Community",
    
    },
    {
      image: people,
      alt: "Members",
      title: "Active Members",
      
    },
    {
        image: globe,
        alt: "Global Network",
        title: "Global Network Connections",
        
      },
      {
        image: handshake,
        alt: "Join AIFTP",
        title: "Join Our Community",
      
      },
      {
        image: people,
        alt: "Members",
        title: "Active Members",
        
      },
      {
          image: globe,
          alt: "Global Network",
          title: "Global Network Connections",
          
        },
        {
          image: handshake,
          alt: "Join AIFTP",
          title: "Join Our Community",
        
        },
        {
            image: people,
            alt: "Members",
            title: "Active Members",
            
          },
          {
              image: globe,
              alt: "Global Network",
              title: "Global Network Connections",
              
            },
          
      
  ]

  return (
    <div className="min-h-screen bg-[#0369a1]/5 py-12 px-4">
        <h1 className='text-center font-bold'>
        <Heading headingText="AFTIP Archive" size='large' />
        </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-items-center p-10">
        {cardData.map((card, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-36 h-36 bg-white rounded-full shadow flex items-center justify-center p-4 border border-gray-100 hover:shadow-xl transition-shadow relative">
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