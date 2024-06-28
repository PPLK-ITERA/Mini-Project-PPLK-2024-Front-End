'use client';
import { Button } from '../ui/button';
import { Montserrat } from 'next/font/google';
import { Macondo } from 'next/font/google';
import { LogOut } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useRouter } from "next/navigation";

const montserrat = Montserrat({subsets:["latin"]})
const macondo = Macondo({weight:"400", subsets:["latin"]})

const Navbar = () => {
    const pathname = usePathname();
    const isLogin = true;
    const router = useRouter();
    const access_token = window.localStorage.getItem("access_token");
    const username = window.localStorage.getItem("username");

    async function handleLogOut() {
      const response = await fetch(
        "https://c0c7-110-137-38-231.ngrok-free.app/api/v1/logout",
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${access_token}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
          }
        }
      );
      if (response.ok) {
        localStorage.removeItem("access_token")
        localStorage.removeItem("username")
        localStorage.removeItem("email")
        router.push("/");
      }
    }

    return (
      <div>
        {(pathname !== '/') && (isLogin) ? (
          <nav className="bg-gradient-to-r from-candlelight-800 to-candlelight-950 px-2 py-2 w-full">
            <div className='flex justify-between items-center w-full'>
              <h2 className={`${montserrat.className} text-white text-center `}>Welcome, {username}</h2>
              <h2 className={`${macondo.className} hidden md:block text-white text-center flex-grow mb-1 md:mb-0`}>Pillar of Personality PPLK 2024</h2>
              <Button className={`${montserrat.className} bg-transparent text-white flex items-center hover:bg-transparent p-0`} type="button" onClick={() => handleLogOut()}>
                <LogOut className="mr-2" />Keluar
              </Button>
            </div>
          </nav>
        ) : null}
      </div>
    );
  };
  
  export default Navbar;