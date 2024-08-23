import React, { useEffect } from 'react';

function Header(props) {
    const authStatus = true;

    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Graphs",
            slug: "/all-graphs",
            active: authStatus,
        },
        {
            name: "Add Graph",
            slug: "/add-graph",
            active: authStatus,
        },
        {
            name: "Profile",
            sulg: "profile",
            active: authStatus,
        }
    ];

    return (
        <header className='bg-gray-800 text-white shadow-lg'>
            <nav className='container mx-auto p-4 flex items-center justify-between'>
                <div className='text-2xl font-bold'>
                    MyApp
                </div>
                <ul className='hidden md:flex space-x-4'>
                    {navItems.map((item) =>
                        item.active ? (
                            <li key={item.name}>
                                <button
                                    onClick={() => navigate(item.slug)}
                                    className='text-white hover:text-gray-300 transition duration-300'
                                >{item.name}</button>
                            </li>
                        ) : null
                    )}
                </ul>
                <div className="md:hidden flex items-center">
                    <button className="text-white focus:outline-none">
                        {/* Hamburger icon */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </nav>
            {/* Mobile Menu */}
            <div className="md:hidden">
                <ul className="bg-gray-800 space-y-2 p-4">
                    {navItems.map((item) =>
                        item.active ? (
                            <li key={item.name}>
                                <button
                                    onClick={() => navigate(item.slug)}
                                    className='block w-full text-left text-white hover:bg-gray-700 rounded-md px-4 py-2 transition duration-300'
                                >{item.name}</button>
                            </li>
                        ) : null
                    )}
                </ul>
            </div>
        </header>
    );
}

export default Header;
