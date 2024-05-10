import { Poppins } from 'next/font/google';
import React from 'react'
import TeamCard from '../TeamCard';
const poppins = Poppins({ subsets: ["latin"],weight: '700' });

const Team = () => {
  return (
    <section id='team' className='h-max flex flex-col py-10 px-4 sm:px-14 lg:px-24'>
      <h1 className={`${poppins.className} text-6xl sm:text-6xl`}>Meet Our Team</h1>
      <p className='mt-4'>
      Get to know the talented individuals behind Redd Matrix.
      </p>
      <div className='flex flex-col md:flex-row justify-between gap-6 mt-8'>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
      </div>
    </section>
  )
}

export default Team
