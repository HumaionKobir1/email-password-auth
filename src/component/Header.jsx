import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex gap-5 text-lg font-semibold justify-center items-center'>
            <Link to='/'>Home</Link>

            <Link to='/login'>Login</Link>

            <Link to='/register'>Register</Link>

        </div>
    );
};

export default Header;