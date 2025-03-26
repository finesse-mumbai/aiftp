import React from 'react'
import WhatsNewCard from './WhatsNewCard'
import { faUsers, faFileAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const whatsNewItems = [
    { title: "Yearly Activity Report", label: "New", icon: faFileAlt },
    { title: "Current Office Bearers", icon: faUserFriends },
    { title: "Team AIFTP 2025 Directory", icon: faUsers },
    { title: "Sub-Committees - 2025", label: "Coming Soon", icon: faFileAlt },
    { title: "Zonal Managing Committee - 2025", icon: faUserFriends },
    { title: "Directory - correct / Edit", icon: faFileAlt },
    { title: "Past National Presidents and Secretary Generals", label: "New", icon: faUserFriends },
    { title: "National executive committee - 2025", label: "New", icon: faUsers },
    { title: "Subscribe to AIFTP Journal (Direct Taxes)", icon: faFileAlt },
];

function WhatsNewContainer() {
  return (
    <div className="min-h-screen bg-white relative flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(#00000020_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]"></div>
        
        <div className="mx-auto w-full max-w-screen-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 px-2 md:px-12 mt-6 md:mt-12">
            {whatsNewItems.map((item, index) => (
                <div key={index} className="flex justify-center">
                    <WhatsNewCard title={item.title} newtext={item.label} icon={item.icon} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default WhatsNewContainer;
