import React from 'react'
import Image from 'next/image'
import globe from '../../../public/Global network icon.png'
import handshake from '../../../public/Join AIFTP icon.png'
import people from '../../../public/Members icon.png'
import AIFTP_Times_Icon from '../../../public/AIFTP-Times-Icon.png'
import indirect_tax_journal from '../../../public/indirect_tax_journal.png'
import journal_icon from '../../../public/journal_icon.png'
import newsletter_icon from '../../../public/newsletter_icon.png'
import online_journal_icon from '../../../public/online_journal_icon.png'
import tax from '../../../public/tax.png'
import webinar from '../../../public/webinar.png'

import Heading from '../Heading/Heading'

function LastSection() {
  const cardData = [
    {
      id: 1,
      image: globe,
      alt: "Global Network",
      title: "AIFTP Members Search",
    },
    {
      id: 2,
      image: handshake,
      alt: "Join AIFTP",
      title: "Join Membership",
    },
    {
      id: 3,
      image: people,
      alt: "Members",
      title: "AIFTP Members Directory",
    },
    {
      id: 4,
      image: indirect_tax_journal,
      alt: "Global Network",
      title: "AIFTP Indirect Tax Journal",
    },
    {
      id: 5,
      image: online_journal_icon,
      alt: "Join AIFTP",
      title: "Subscribe AIFTP Journal",
    },
    {
      id: 6,
      image: AIFTP_Times_Icon,
      alt: "Members",
      title: "AIFTP Times",
    },
    {
      id: 7,
      image: webinar,
      alt: "Global Network",
      title: "Webinar & Conferences",
    },
    {
      id: 8,
      image: tax,
      alt: "Join AIFTP",
      title: "Direct & Indirect Tax Representation",
    },
    {
      id: 9,
      image: journal_icon,
      alt: "Members",
      title: "AIFTP Journal",
    },
    {
      id: 10,
      image: newsletter_icon,
      alt: "Global Network",
      title: "AIFTP Newsletter",
    },
  ];


  return (
    <div className="min-h-screen bg-[#0369a1]/5 py-12 px-4">
      <h1 className='text-center font-bold'>
        <Heading headingText="AIFTP Archive" size='large' />
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-items-center p-10">
        {cardData.map((card) => (
          <div key={card.id} className="flex flex-col items-center">
            {/* Ensure image is properly contained */}
            <div className="relative md:w-36 md:h-36 w-60 h-60 bg-white rounded-full shadow flex items-center justify-center border border-gray-100 hover:shadow-xl hover:scale-110 transition-transform duration-500 ease-in-out p-3">
              <Image
                src={card.image}
                alt={card.alt}

                className="object-contain"
              />
            </div>
            <p className="mt-4 text-center text-[#0369a1]/90 font-bold">
              <em>{card.title}</em>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LastSection