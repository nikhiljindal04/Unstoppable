import React from 'react'
import Navbar from '../components/Navbar'

const ExploreAllModels = () => {
  return (
    <div>
       <div className="flex flex-col flex-items-center min-h-screen bg-gradient-to-b from-[#102116] via-[#102116] to-[#151816] text-white text-center p-6">
       <Navbar />
        <div className="ml-auto mr-auto mt-8 max-w-3xl">
          <h1 className='text-6xl font-bold'>Explore All Models</h1>
          <p className='mt-8 text-lg text-[#7a8089]'>Discover the full range of Electra's electric vehicles, each designed to meet diverse needs and preferences. From compact city cars to spacious family SUVs, explore the features, specifications, and benefits of each model.</p>
        </div>
       </div>
    </div>
  )
}

export default ExploreAllModels
