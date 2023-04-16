import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleEmailChange = (event) => {
        // console.log(event.target.value)
        // setEmail(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)


        // validate
        if(!/(?=.*[A-Z])/.test(password)){
            setError('Please add at least one uppercase');
            return;
        }
        else if(!/(?=.*[0-9].*[0-9.])/.test(password)){
            setError('please add at least two numbers');
            return;
        }
        else if (password.length<6){
            setError('please add at least 6 characters in your password')
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const logUser = result.user;
            console.log(logUser);
            setError('');
            event.target.reset();
            setSuccess('User has create succesfully')
        })
        .catch(error => {
            console.log(error.message);
            setError(error.message)
        })
    }

    const handlePasswordBlur = (event) => {
        // console.log(event.target.value)
    }

    return (
        <div className='bg-fuchsia-600 p-5 rounded-lg mt-8'>

            <h4 className='text-3xl font-semibold mb-5'>Please Register</h4>

            <form className='w-80 mx-auto' onSubmit={handleSubmit}>
                <input onChange={handleEmailChange} className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50' type="email" name='email' placeholder='Your Email' required/>
                
                <input className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50' type="password" name='password' id='password' placeholder='Your password' required/>
                {/* <input className='bg-blue-600 mt-5 text-white rounded-xl px-5 py-3' type="submit" value="Register" /> */}

                <div className='text-center mt-4'>
                    <p className='text-lg font-medium text-red-900'>{error.slice(10, 50)}</p>
                    <p className='text-lg font-medium text-green-800'>{success}</p>
                </div>

                <div className="flex justify-start">
                                <label className="text-gray-500 font-bold my-4 flex items-center">
                                    <input className="leading-loose text-pink-600 top-0" type="checkbox"/>
                                    <span className="ml-2 text-sm py-2 text-gray-600 text-left">Accept the
                                          <a href="#"
                                             className="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500">
                                           Terms and Conditions of the site
                                          </a>and
                                          <a href="#"
                                             className="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500">
                                            the information data policy.</a>
                                    </span>
                                </label>
                            </div>
                            <button className="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black" type="submit" value="Register">
                                Register
                            </button>
            </form>
        </div>
    );
};

export default Register;