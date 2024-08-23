import React, { useState } from 'react'
import axios from 'axios'

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    //just simulation
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('', { name, email, phone });
            if (response.data === 'Successfully submitted') {
                alert('Submission was successfull')
            } else if (response.data === 'Incorrect data') {
                alert('Incorrect data, email does not exist')
            }
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className='bg-gray-300 relative'>
            <section id='contact' className='min-h-screen flex items-center ml-4'>
                <div className='ml-4 flex flex-col space-y-4'>
                    <h1 className='text-3xl font-inconsolata'>Contact Us</h1>
                </div>
                <div className='bg-white p-8 rounded-lg shadow-lg space-y-5 absolute top-[18rem] left-[45rem] text-3xl font-inconsolata'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Name: </label>
                            <input type='text' required placeholder='Yenlik' className='rounded-md bg-slate-200 mb-4' onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <label>Email: </label>
                            <input type='text' required placeholder='yenlik@dop.com' className='rounded-md bg-slate-200 mb-4 ' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label>Phone Number: </label>
                            <input type='tel' required placeholder='7777777777' className='rounded-md bg-slate-200' onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <button
                            type="submit"
                            className='bg-gray-400 mt-10 ml-[24rem] rounded-md p-2 hover:bg-neutral-500 hover:scale-105'
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Form
