import { Poppins } from 'next/font/google';
import React from 'react'
import TeamCard from '../TeamCard';
import { TeamMembers } from '@/constants';
const poppins = Poppins({ subsets: ["latin"],weight: '700' });

const Team = () => {
  return (
    <section id='team' className='h-max flex flex-col py-10 px-4 sm:px-14 lg:px-24'>
      <h1 className={`${poppins.className} text-4xl sm:text-6xl`}>Meet Our Team</h1>
      <p className='mt-2 sm:mt-4'>
      Get to know the talented individuals behind Redd Matrix.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
        {
          TeamMembers.map((member, index)=>(
            <TeamCard key={index} name={member.name} position={member.position} description={member.description} image={member.image} />
          ))
        }
      </div>
    </section>
  )
}

export default Team
