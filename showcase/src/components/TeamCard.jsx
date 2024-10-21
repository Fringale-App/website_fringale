import React from 'react';

function TeamCard({ member }) {
  const handleImageError = (e) => {
    console.error(`Failed to load image: ${member.image}`);
    e.target.src = 'https://via.placeholder.com/300'; // Fallback image
  };

  return (
    <div className='sm:w-72 w-full h-96 relative shadow-lg overflow-hidden flex-shrink-0'>
      <div className='w-full h-full'>
        <img 
          className='h-full w-full object-cover' 
          src={member.image} 
          alt={member.name} 
          onError={handleImageError} 
        />
      </div>
      <p className='absolute top-2 left-1/2 transform -translate-x-1/2 text-3xl text-cyan-500 font-bold'>{member.role}</p>
      <p className='absolute bottom-0 right-1 text-2xl font-bold text-white'>{member.name}</p>
    </div>
  );
}

export default TeamCard;
