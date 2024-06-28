'use client'

import Pilar from "@/components/ui/pilar";
import PilarKeBerapa from "@/components/ui/pilarKeBerapa";
import { getResult } from "@/lib/data/result";
import { Result } from "@/lib/types/Result";
import { useEffect, useState } from "react";
import { useToast } from "../ui/use-toast";

const HasilKuis = () => {
  const { toast } = useToast();
  const [result, setresult] = useState<Result | null>(null)
  const [nilai1, setnilai1] = useState(0)
  const [nilai2, setnilai2] = useState(0)
  const [nilai3, setnilai3] = useState(0)
  const [nilai4, setnilai4] = useState(0)
  const [nilaiTotal, setnilaiTotal] = useState(0)
  
  const [loading, setloading] = useState(true)

  useEffect(() => {
    setloading(true)
    const token = window.localStorage.getItem("access_token")
    console.log(`TESTES ${token}`)

    if (token) {
      try {
        getResult(token).then((data) => {
          setresult(data)
          setnilai1(data.sifat1_score)
          setnilai2(data.sifat2_score)
          setnilai3(data.sifat3_score)
          setnilai4(data.sifat4_score)

          console.log("TESTES")
          console.log(data)
      })
      } catch (error) {
        console.log(error)
        toast({
          variant: "destructive",
          title: "Gagal mendapatkan hasil assesment kamu, mohon coba lagi hehe",
        });
      }
    }
    setloading(false)
  }, [])

  return (
    <div className="rounded-t-2xl sm:rounded-xl sm:rounde bg-white mt-8 border border-white ">
      <div className="w-full sm:w-full  px-12 pb-8">
        <div className="justify-center flex mt-2 mb-4">
          <div className="bg-slate-200 h-1.5 rounded-xl w-1/5 sm:hidden"></div>
        </div>
        <div className="text-center">
          <p className="font-bold text-lg text-[#a36205] sm:text-2xl">
            Berikut Hasil Tes Kamu
          </p>
        </div>

        <div className="mt-9">
          <div>
            <Pilar angka={1} hasil={nilai1} className="text-[#432005]" />
            <PilarKeBerapa angka={nilai1 * 100 / 18} className="bg-[#432005]" />
          </div>

          <div>
            <Pilar angka={2} hasil={nilai2} className="text-[#723f11]" />
            <PilarKeBerapa angka={nilai2 * 100 / 18} className="bg-[#732f11]" />
          </div>

          <div>
            <Pilar angka={3} hasil={nilai3} className="text-[#ed8f45]" />
            <PilarKeBerapa angka={nilai3 * 100 / 18} className="bg-[#ed8f45]" />
          </div>

          <div>
            <Pilar angka={4} hasil={nilai4} className="text-[#cc8b02]" />
            <PilarKeBerapa angka={nilai4 * 100 / 18} className="bg-[#cc8b02]" />
          </div>
        </div>
        
        

        <div className="text-center mt-6 sm:mt-14 mb-0.5">
          <p>Terimakasih telah mengikuti asessmen PPLK!</p>
        </div>
      </div>
    </div>
  );
};

export default HasilKuis;
