'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';

const Navbar = () => {
    const isLoggedIn = false;
  
    return (
      <nav className="bg-blue-400 px-2 py-2 w-full">
        <div>
            {isLoggedIn ? (
                <div className='flex justify-between items-center w-full'>
                  <h2 className='font-bold'>Website Kuis PPLK</h2>
                        
                  <Button className="px-4 rounded-md" type="submit">Logout</Button>
                </div>
            ) : (
                <div className='flex justify-center items-center w-full'>
                    <h2 className='font-bold'>Website Kuis PPLK</h2>
                </div>
            )}
        </div>
      </nav>
    );
  };
  
  export default Navbar;