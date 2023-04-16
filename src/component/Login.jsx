import React, { useState } from 'react';

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // validation
        setError('');

        if(!/(?=.*[A-Z])/.test(password)){
            setError('Please add at least two uppercase');
            return;
        }
        else if (!/(?=.*[!@#$&*])/.test(password)){
            setError('Please add a special character');
            return;
        }
    }


    return (
        <div className='mx-auto w-1/4 bg-white rounded-lg shadow-md p-8 mt-10'>

            <form onSubmit={handleLogin} className="w-full max-w-sm mx-auto">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input type="email" name='email' id="email" placeholder="Enter your email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
                </div>
                <div className="mb-2">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                    <input type="password" name='password' id="password" placeholder="Enter your password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
                </div>
                <div className='text-center mt-2 mb-6'>
                    <p className='text-lg font-medium text-red-900'>{error}</p>
                    <p className='text-lg font-medium text-green-800'>{success}</p>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Sign In
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                    </a>
                </div>
            </form>

        </div>
    );
};

export default Login;