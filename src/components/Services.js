import React from 'react'
import Animation from './AnimateText'
import AnimatedText from './Animate'

const Services = () => {
    return (
        <div className='bg-gray-300 relative'>
            <section id='services' className='min-h-screen flex items-center ml-4'>
                <div className='ml-4 flex flex-col space-y-4'>
                    <h1 className='text-3xl font-inconsolata'>Get familiar with our numbers!</h1>
                </div>
                <div className='space-y-5 absolute top-[18rem] left-[45rem] text-3xl font-inconsolata'>
                    <ul>
                        <AnimatedText text="300+ projects delivered end to end" />
                        <AnimatedText text="25 successful trainings for Junior Developers" />
                        <AnimatedText text="3 branches in Almaty" />
                        <AnimatedText text="50+ knowledgeable employees" />
                        <AnimatedText text="20+ years of experience in the Industry of Software" />
                        <AnimatedText text="5+ open-source projects and continuous contributions to Research and Development" />
                    </ul>
                </div>
            </section >

        </div >
    )
}

export default Services
