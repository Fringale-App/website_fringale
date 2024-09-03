import React from 'react';

function TeamCard({ member }) {
  return (
    <div className='sm:w-72 w-full h-96 relative shadow-lg overflow-hidden flex-shrink-0'>
      <div className='w-full h-full'>
        <img className='h-full w-full object-cover' src={member.image} alt={member.name} />
      </div>
      <p className='absolute left-1 text-3xl top-20 -rotate-90 text-white font-bold'>{member.role}</p>
      <p className='absolute bottom-0 right-1 text-2xl font-bold text-white'>{member.name}</p>
    </div>
  );
}

export default TeamCard;




