import React, { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        console.log(event.target.value)
        setEmail(event.target.value);
    }

    const handlePasswordBlur = (event) => {
        console.log(event.target.value)
    }

    return (
        <div className='bg-fuchsia-600 p-5 rounded-lg mt-8'>
            <h4 className='text-3xl font-semibold mb-5'>Please Register</h4>
            <form className='w-80 mx-auto'>
                <input onChange={handleEmailChange} className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50' type="email" name='email' placeholder='Your Email' />
                
                <input className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50' type="password" name='password' id='password' placeholder='Your password' />
                <input className='bg-blue-600 mt-5 text-white rounded-xl px-5 py-3' type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;