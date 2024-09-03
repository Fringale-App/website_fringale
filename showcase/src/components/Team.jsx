import React from 'react'
import TeamCard from './TeamCard';

const team = [
    {
      name: "Alice Johnson",
      role: "UI/UX",
      image: "https://images.unsplash.com/photo-1599824701954-d1d141704de9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVpJTIwdXglMjBkZXNpZ25lcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Michael Smith",
      role: "GRAPHIC",
      image: "https://plus.unsplash.com/premium_photo-1683121527037-fc05cf650133?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdyYXBoaWMlMjBkZXNpZ25lcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Emily Davis",
      role: "DEVELOPER",
      image: "https://plus.unsplash.com/premium_photo-1661371243525-d02768a7feee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29mdHdhcmUlMjBkZXZlbG9wZXIlMjBtZW58ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "David Brown",
      role: "MARKETING",
      image: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE1hcmtldGluZyUyMGd1eXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "Alice Johnson",
        role: "UI/UX",
        image: "https://images.unsplash.com/photo-1599824701954-d1d141704de9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVpJTIwdXglMjBkZXNpZ25lcnxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        name: "Alice Johnson",
        role: "UI/UX",
        image: "https://images.unsplash.com/photo-1599824701954-d1d141704de9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVpJTIwdXglMjBkZXNpZ25lcnxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        name: "Alice Johnson",
        role: "UI/UX",
        image: "https://images.unsplash.com/photo-1599824701954-d1d141704de9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVpJTIwdXglMjBkZXNpZ25lcnxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        name: "Alice Johnson",
        role: "UI/UX",
        image: "https://images.unsplash.com/photo-1599824701954-d1d141704de9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVpJTIwdXglMjBkZXNpZ25lcnxlbnwwfHwwfHx8MA%3D%3D"
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
