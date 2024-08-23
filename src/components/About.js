import React from 'react'
import AnimatedText from './Animate'
const About = () => {
    return (
        <div className='bg-gray-300'>
            <section id='about' className='min-h-screen flex items-center ml-4'>
                <div className='flex flex-col space-y-4 ml-4'>
                    <h1 className='text-3xl font-inconsolata'>About our company: </h1>
                </div>
                <div className='flex justify-center ml-20 text-3xl font-inconsolata'>
                    <AnimatedText text="We provide service that makes your business grow and develop! " />
                </div>
            </section>
        </div>
    )
}

export default About
