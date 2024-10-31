import React, { useState } from 'react';
import rest from '../../Images/Mask group.png';

const restaurantsData = [
  {
    name: 'Mr. Burger',
    description: 'Lorem ipsum dolor sit amet consectetur. Duis in duis faucibus cras',
    rating: 4,
    image: '/path_to_images/mr_burger.png',
  },
  {
    name: 'Swadu Cafe',
    description: 'Duis in duis faucibus cras ac quis aliquet dolor. Amet urna quam nunc sit .',
    rating: 5,
    image: '/path_to_images/swadu_cafe.png',
  },
  {
    name: 'BLT Cafe',
    description: 'Amet urna quam nunc sit velit faucibus id. Lectus facilisis volutpat neque amet non.',
    rating: 3,
    image: '/path_to_images/blt_cafe.png',
  },
  {
    name: 'Snacks Adda',
    description: 'Lorem ipsum dolor sit amet consectetur. Lectus facilisis volutpat neque amet non.',
    rating: 4,
    image: '/path_to_images/snacks_adda.png',
  },
];

const RestaurantOnboard = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurantsData[0]);

  return (
    <div className="sm:p-8 p-4  md:p-12 lg:p-16 xl:p-24 max-w-screen-xl mx-auto">
      <h2 className="sm:text-2xl md:text-5xl font-bold mb-6 text-xl sm:text-center">RESTAURANTS ONBOARD</h2>

      {/* Restaurant Info */}
      <div className="flex sm:flex-col lg:flex-row items-center justify-between gap-0 sm:gap-8">
        <div className="flex-1">
          <h3 className="sm:text-2xl text-base uppercase md:text-3xl font-semibold text-[#ff7a59] mb-4">{selectedRestaurant.name}</h3>
          <p className="text-gray-600 text-sm md:text-lg mb-4">{selectedRestaurant.description}</p>

          {/* Rating Stars */}
          <div className="flex items-center mb-6">
            {[...Array(5)].map((_, index) => (
              <span key={index} className={`text-2xl ${index < selectedRestaurant.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Restaurant Image with Peach Shape */}
        <div className="mt-6 ml-6 relative flex-1">
          {/* Peach-colored shape */}
          {/* <div className="absolute -left-4 -top-4 md:-left-8 md:-top-8 bg-[#FAD9C1] w-16 h-24 md:w-24 md:h-32 rounded-br-lg z-10"></div> */}
          {/* Restaurant Image */}
          <img src={rest} alt={selectedRestaurant.name} className="relative z-20 sm:w-full sm:h-auto w-[168px] h-[126px] rounded-lg md:w-80 lg:w-96" />
        </div>
      </div>

      {/* Restaurant Buttons */}
      <div className="flex flex-wrap gap-4 mt-6">
        {restaurantsData.map((restaurant, index) => (
          <button
            key={index}
            onClick={() => setSelectedRestaurant(restaurant)}
            className={`py-2 px-4 rounded-lg shadow-md ${selectedRestaurant.name === restaurant.name ? 'bg-[#00643c] text-white' : 'bg-white text-black'
              }`}
          >
            {restaurant.name}
          </button>
        ))}
        <button
          className="py-2 px-4 rounded-lg shadow-md bg-[#00643c] text-white flex items-center justify-center"
          onClick={() => alert('Next button clicked!')} // Replace with your functionality
        >
          ➔
        </button>
      </div>
    </div>
  );
};

export default RestaurantOnboard;
