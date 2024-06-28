import Pilar from "../ui/pilar";
import PilarKeBerapa from "../ui/pilarKeBerapa";

const HasilKuis = () => {
  return (
    <div className="rounded-t-2xl sm:rounded-xl sm:rounde bg-white mt-8 border border-white ">
      <div className="w-full sm:w-full  px-12 pb-8">
        <div className="justify-center flex mt-2 mb-4">
          <div className="bg-slate-200 h-1.5 rounded-xl w-1/5 sm:hidden"></div>
        </div>
        <div className="text-center">
          <p className="font-bold text-lg text-[#a36205] sm:text-2xl">
            Berikut Hasil Tes Mu
          </p>
        </div>
        <div className="mt-9">
          <div>
            <Pilar angka={1} hasil={5} className="text-[#432005]" />
            <PilarKeBerapa angka={5} className="bg-[#432005]" />
          </div>

          <div>
            <Pilar angka={2} hasil={5} className="text-[#723f11]" />
            <PilarKeBerapa angka={5} className="bg-[#732f11]" />
          </div>

          <div>
            <Pilar angka={3} hasil={5} className="text-[#ed8f45]" />
            < PilarKeBerapa angka={5} className="bg-[#ed8f45]" />
          </div>

          <div>
            <Pilar angka={4} hasil={5} className="text-[#cc8b02]" />
            < PilarKeBerapa angka={5} className="bg-[#cc8b02]" />
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
