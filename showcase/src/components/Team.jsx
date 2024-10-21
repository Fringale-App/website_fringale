import React from 'react'
import TeamCard from './TeamCard';
import vaibhav from '../assets/Vaibhav.jpg'
import Saurabh from '../assets/Saurabh.jpg'
import Simran from '../assets/Simran.jpeg'
import Devraj from '../assets/Devraj.jpg'
import Aakanksha from '../assets/Aakanksha.jpg'

const team = [
  {
    name: "Vaibhav Madaan",
    role: "Developer",
    image: vaibhav,
  },

    {
      name: "Saurabh Mishra",
      role: "Developer",
      image: Saurabh,
    },
    {
      name: "Aakansha Mahajan",
      role: "UI/UX",
      image: Aakanksha,
    },
    {
      name: "Devraj Rathore",
      role: "UI/UX",
      image: Devraj,
    },
    {
        name: "Simran Mehta",
        role: "UI/UX",
        image: Simran,
      },
  ];

  function Team() {
    return (
      <div className='sm:pl-20 mt-60 sm:flex-row p-4 sm:p-0 flex flex-col gap-5 sm:mt-8'>
        <div className='sm:text-5xl text-4xl flex flex-col font-semibold'>
          <p>MEET</p>
          <p className='sm:ml-10'>THE <span className='text-[#00643c]'>TEAM</span></p>
        </div>
        <div className='flex gap-3 overflow-x-auto no-scrollbar'>
          {
            team.map((member, key) => (
              <TeamCard member={member} key={key} />
            ))
          }
        </div>
      </div>
    );
  }

export default Team;
