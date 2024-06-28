import { Progress } from "./progress";

const PilarKeBerapa = ({ angka, className }: { angka: number; className: string }) => {
  return (
    <div>
      <p className="font-bold text-xl">
        <div>
            {/* <div className="w-full rounded-xl bg-[#fcedd8] border border-[#f8d6b0]">
              <div className={`rounded-xl  w-1/2 h-4 ${className}`}></div>
            </div> */}
            <Progress value={angka} />
            <div className="text-center text-xs mt-2">
              <p>{angka}%</p>
            </div>
          </div>
          </p>
    </div>
  );
};



export default PilarKeBerapa