"use client";

import * as React from "react";
import { useState } from "react";
import { Mail, LockKeyhole, Eye, EyeOff } from "lucide-react";

import Image from "next/image";
import { Montserrat } from "next/font/google";

import CarouselForm from "@/components/fragments/CarouselForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const montserrat = Montserrat({ subsets: ["latin"] });

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className={`${montserrat.className} flex flex-col md:flex-row w-full h-full font-medium overflow-hidden justify-center`}
    >
      <div className="w-full md:w-[60%] min-h-[70px] p-5 md:p-0 md:min-h-[100vh] object-cover flex justify-center md:items-center bg-[url('/assets/background-login.png')] bg-cover">
        <CarouselForm />
      </div>

      <div className="flex bg-gradient-to-tl from-jaffa-600/50 from-1% via-white via-20% to-transparent to-85% justify-center items-center flex-col w-full md:w-[40%] z-10">
        <Image
          src="/assets/logo-pplk-2024.png"
          className="w-36 h-36 -ml-48 lg:-ml-72 lg:-mt-[70px]"
          quality={100}
          alt="logo-pplk-2024"
          width={202}
          height={202}
        />

        <form className="flex flex-col items-center md:items-start justify-start p-2">
          <h1 className="text-2xl w-[300px] sm:w-[300px] sm:text-3xl lg:w-96 lg:text-4xl font-bold md:mb-8 text-jaffa-800 lg:mt-10">
            Selamat Datang
            <br className="hidden lg:block" /> Di Kuis Personality
            <br className="hidden lg:block" /> PPLK
          </h1>

          <div>
            <label htmlFor="inputEmail">Email</label>
            <div className="relative w-[300px] sm:w-[300px] lg:w-96">
              <Mail className="absolute top-3 left-2 text-jaffa-600" />
              <Input
                className="focus:ring-2 ring-jaffa-600 border-jaffa-600 h-12 mb-4 pl-10 rounded-md border"
                type="text"
                placeholder="Email anda"
                id="inputEmail"
              />
            </div>
          </div>

          <div>
            <label htmlFor="inputPass">Password</label>
            <div className="relative w-[300px] sm:w-[300px] lg:w-96">
              <div className="relative">
                <LockKeyhole
                  strokeWidth={1.5}
                  className="top-3 absolute left-2 text-jaffa-600"
                />
              </div>

              <Input
                className="bg-transparent focus:ring-2 ring-jaffa-600 border-jaffa-600 h-12 mb-4 pl-10 rounded-md border"
                type="text"
                placeholder="Password anda"
                id="inputPass"
              />

              {showPassword ? (
                <Eye
                  strokeWidth={1.5}
                  className="top-3 absolute right-2 text-jaffa-600 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <EyeOff
                  strokeWidth={1.5}
                  className="top-3 absolute right-2 text-jaffa-600 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
          </div>

          <Button className="w-[300px] sm:w-[300px] lg:w-96 h-12 mb-4 px-4 rounded-md border bg-jaffa-600 hover:bg-white hover:shadow-md focus:ring-2 focus:ring-jaffa-600 hover:text-jaffa-600 transition ease-out duration-300 text-white font-bold">
            Masuk
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
