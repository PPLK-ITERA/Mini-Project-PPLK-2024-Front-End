'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Montserrat } from 'next/font/google';
import { Macondo } from 'next/font/google';
import { LogOut } from 'lucide-react';

const montserrat = Montserrat({subsets:["latin"]})
const macondo = Macondo({weight:"400", subsets:["latin"]})

const Navbar = () => {
    const isLoggedIn = true;
    return (
      <div>
        {isLoggedIn ? (
          <nav className="bg-gradient-to-r from-candlelight-800 to-candlelight-950 px-2 py-2 w-full">
            <div className='flex justify-between items-center w-full'>
              <h2 className={`${montserrat.className} text-white text-center `}>Welcome, User</h2>
              <h2 className={`${macondo.className} hidden md:block text-white text-center flex-grow mb-1 md:mb-0`}>Pillar of Personality PPLK 2024</h2>
              <Button className={`${montserrat.className} bg-transparent text-white flex items-center hover:bg-transparent p-0`} type="submit">
                <LogOut className="mr-2" />Keluar
              </Button>
            </div>
          </nav>
        ) : null}
      </div>
    );
  };
  
  export default Navbar;