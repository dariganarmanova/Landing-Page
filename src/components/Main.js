import React from 'react'

const Main = () => {
    return (
        <div className='flex items-center justify-between p-4 bg-gray-200'>
            <h2 className="font-inconsolata text-2xl">LumionousAI</h2>
            <nav className='flex space-x-8 font-robotoMono'>
                <a href='#home' className='text-gray-700 hover:text-blue-600'>Home</a>
                <a href='#about' className='text-gray-700 hover:text-blue-600'>About</a>
                <a href='#services' className='text-gray-700 hover:text-blue-600'>Services</a>
                <a href='#contact' className='text-gray-700 hover:text-blue-600'>Contact</a>
            </nav>
        </div>
    )
}

export default Main
