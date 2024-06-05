import React from 'react';

const Navbar = () => {
    return (
        <nav className='bg-blue-900 text-white flex justify-between items-center px-4 h-16'>
            <div className="logo font-bold text-2xl">GetMeaChai!</div>
            <ul className='flex justify-between gap-10'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Sign Up</li>
                <li>Login</li>
            </ul>
        </nav>
    );
}

export default Navbar;
