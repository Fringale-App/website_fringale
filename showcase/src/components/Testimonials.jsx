import React from 'react'
import '../css/testimonial.css'
import Card from './Card';

function Testimonials() {

    const foodHashtags = [
        '#Foodie',
        '#Yummy',
        '#Delicious',
        '#FoodLover',
        '#InstaFood',
        '#Tasty',
        '#Foodstagram',
        '#Eats',
        '#FoodieLife',
        '#HealthyEating',
        '#FoodPhotography',
        '#FoodieFeatures',
        '#HomeCooking',
        '#ChefMode',
        '#FoodBlogger',
        '#FoodAddict',
        '#RecipeOfTheDay',
        '#CookAtHome',
        '#FoodGram',
        '#Gourmet',
        '#FoodPics',
        '#EatingForTheGram',
        '#FoodForThought',
        '#FoodHeaven',
        '#Yum',
        '#NomNom',
        '#FoodIsLife',
        '#FoodGoals',
        '#FoodLovers',
        '#CulinaryDelights',
        '#FoodArt',
        '#FoodInspiration',
        '#FoodLove',
        '#FoodJourney',
        '#TasteOfHome'
    ];

    const testimonials = [
        {
            name: 'John Doe',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_W6uTt4zmRdO6Gc-AFIGflHAHoaZ8Ajdu8Q&s',
            description: 'John is a passionate student who loves coding and exploring new technologies.',
            designation: 'Student'
        },
        {
            name: 'Jane Smith',
            image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            description: 'Jane enjoys learning about different programming languages and working on innovative projects.',
            designation: 'Student'
        },
        {
            name: 'Alex Johnson',
            image: 'https://cdn.pixabay.com/photo/2024/02/21/14/53/ai-generated-8587845_640.png',
            description: 'Alex is dedicated to his studies and is always looking for new challenges to solve.',
            designation: 'Student'
        },
        {
            name: 'Emily Davis',
            image: 'https://static.vecteezy.com/system/resources/previews/007/486/093/non_2x/portrait-of-happy-redhaired-woman-employee-in-optical-glasses-has-satisfied-expression-works-with-modern-gadgets-waits-for-meeting-with-colleague-prepares-accounting-report-sits-in-own-cabinet-free-photo.jpg',
            description: 'Emily is a creative individual who thrives in collaborative environments and loves problem-solving.',
            designation: 'Student'
        },
        {
            name: 'Michael Brown',
            image: 'https://img.freepik.com/free-photo/happy-employee-with-tablet-getting-good-news_74855-2260.jpg',
            description: 'Michael is a motivated student with a keen interest in software development and web technologies.',
            designation: 'Student'
        },
        {
            name: 'Alex Johnson',
            image: 'https://cdn.pixabay.com/photo/2024/02/21/14/53/ai-generated-8587845_640.png',
            description: 'Alex is dedicated to his studies and is always looking for new challenges to solve.',
            designation: 'Student'
        },
        {
            name: 'Alex Johnson',
            image: 'https://cdn.pixabay.com/photo/2024/02/21/14/53/ai-generated-8587845_640.png',
            description: 'Alex is dedicated to his studies and is always looking for new challenges to solve.',
            designation: 'Student'
        }
    ];

    return (
        <div className='sm:pl-36 sm:p-0 p-6 mt-4 sm:mt-0'>
            <div className='flex flex-col gap-4'>
                <div>
                    <p className='text-4xl text-center sm:text-start font-semibold'>TESTIMONIALS</p>
                </div>
                <div className='flex justify-end mt-6'>
                    <div className='scroll-container w-full sm:w-[70vw] text-[#575756] text-2xl font-semibold overflow-x-auto flex gap-3'>
                        {foodHashtags.map((hashtag, index) => (
                            <div key={index} className='flex-shrink-0'>
                                <span className='text-lg'>{hashtag}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='mt-4 flex flex-col gap-3 sm:flex-row sm:gap-2'>
                    <div className='flex justify-center sm:items-center sm:justify-start'>
                        <div className='w-64 p-3 h-[301px] text-2xl font-medium text-[#3d3d3d] flex items-center justify-center rounded-lg bg-[#FA9269] '>
                            <p className='text-center'>What Our Happy Users Says</p>
                        </div>

                    </div>
                    <div className='flex w-full justify-center items-center'>
                        <div className='sm:w-5/6 w-full scroll-container flex items-center justify-start gap-3 overflow-x-scroll py-1 px-4 sm:px-10 h-[340px] rounded-3xl bg-[#ECF3F1]'>
                            {
                                testimonials.map((card, index) => (
                                    <Card
                                        key={index}
                                        name={card.name}
                                        img={card.image}
                                        description={card.description}
                                        designation={card.designation}
                                    />
                                ))
                            }
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Testimonials