import HasilKuis from "@/components/fragments/hasilKuis";
import Image from "next/image";

const Page = () => {
  return (
    <div className="py-1 sm:pt-3 sm:pb-24 bg-center bg-cover relative h-screen">
      <Image
        src="/assets/background-quiz.png"
        alt="bg"
        width={425}
        height={601}
        quality={100}
        className="absolute inset-0 w-full h-full -z-10 zoom-in-50 object-top bg-jaffa-400"
      />

      <div className="sm:flex sm:justify-evenly z-20 ">
        <div className=" sm:w-[40%] sm:mx-[10%]">
          <div>
            <div className="text-center max-w-xs mt-10 mb-4 mx-auto">
              <p className="font-bold text-xl text-[#a36205] sm:text-2xl sm:text-white">
                Anda Memiliki Karakter Pilar Pertama
              </p>
              <Image
                src="/assets/pilar.png"
                alt="Logo"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>

            <div className="sm:py-2 sm:px-3 p-4 bg-[#a36205] hover:animate-pulse cursor-pointer hover:bg-transparent hover:border w-full  text-white text-center sm:rounded-lg ">
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                eligendi impedit praesentium, pariatur magni a nam odio incidunt
                nemo quis minus repellat nostrum dicta ratione, quibusdam
                sapiente tempora? Ipsum, beatae?
              </p>
            </div>
          </div>
        </div>

        <div className="sm:w-[80%]">
          <div className="sm:w-[80%] ">
            <HasilKuis />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
