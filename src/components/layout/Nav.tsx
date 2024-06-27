'use client';

import React, { useState } from 'react';

const Nav = () => {
    const isLoggedIn = true;
  
    return (
      <nav className="bg-blue-400 p-4 w-full">
        <ul className="flex gap-4 ">
            {isLoggedIn ? (
                <div className='flex space-between w-full'>
                    <h2>Website Kuis PPLK</h2>
                    <button className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded">
                    Logout
                    </button>
                </div>
            ) : (
                <div className='flex justify-center'>
                    <h2>Website Kuis PPLK</h2>
                </div>
            )}
        </ul>
      </nav>
    );
  };
  
  export default Nav;