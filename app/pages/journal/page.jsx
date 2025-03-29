'use client'
import Heading from '@/app/components/Heading/Heading'
import React, { useState } from 'react'
import Image from 'next/image.js'
import journalContent from '../../content/journalContent.js'

const page = () => {

  const [selectedYear, setSelectedYear] = useState('2025')

  const years = ['2025', '2024', '2023', '2022', '2021', '2020']

  // Filter journals based on selected year
   const filteredJournals = journalContent.filter(journal => journal.year === selectedYear)

  return (
    <div className='mx-auto w-full md:px-20 pt-12 px-4 mb-20'>
         <h1 className="text-center font-bold md:text-left">
             <Heading headingText="Journal" />
        </h1>
        <div className="py-6">
             <hr />
         </div>
 

              {/* Year Selector & Subscribe Button */}
        <div className="flex justify-center  items-center mb-6 gap-4">
          {/* Year Dropdown */}
          <div>
            <select
              className="px-6 py-2 border rounded bg-white text-[#0369a1] focus:outline-none focus:ring-2 focus:ring-[#0369a1]"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Subscribe Button */}
          <button className="px-4 py-2 bg-white text-[#0369a1] border rounded hover:bg-[#0369a1] hover:text-white transition-all duration-300 ease-in-out">
          For Latest Issue, Please Subscribe
          </button>
        </div>


              {/* Journal List */}
      <div className='grid md:grid-cols-4 grid-cols-2 gap-6 mt-10'>
        {filteredJournals.length > 0 ? (
          filteredJournals.map((journal) => (
            <div key={journal.id} className="p-4 border rounded hover:shadow-lg text-center flex md:flex-col justify-center items-center hover:transition-all duration-500 ease-in-out">
              <Image src={journal.img} width={200} height={150} alt={`Cover of ${journal.month} ${journal.year}`} />
              <p className="mt-3 font-normal  text-[#868686]">{journal.month} {journal.year}</p>
              <button className="mt-3 bg-[#0369a1] text-white px-4 font-normal py-1 rounded hover:bg-white hover:text-[#0369a1] hover:border transition-all duration-300 ease-in-out">
                <a href={journal.link} target="_blank" rel="noopener noreferrer" className='hover:text[#0369a1]'>
                  View Journal
                </a>
              </button>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600">No journals available for {selectedYear}.</p>
        )}
      </div>
    </div>
  )
}

export default page