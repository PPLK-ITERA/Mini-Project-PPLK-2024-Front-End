import Pilar from "../ui/pilar";
import DiagramBatang from "../ui/diagramBatang";
import PilarKeBerapa from "../ui/pilatKeBerapa";

const HasilKuis = () => {
  return (
    <div className="flex justify-center items-center align-center min-h-screen ">
      <div className="max-w-xl border border-black  rounded-lg  px-12 py-8">
        <PilarKeBerapa angka={1} className="flex justify-center items-center text-center pb-8" />
        <div>
          <div className="flex gap-2">
            <Pilar angka={1}  />
            <DiagramBatang  />
          </div>
          <div className="flex gap-2">
            <Pilar angka={2}  />
            <DiagramBatang  />
          </div>
          <div className="flex gap-2">
            <Pilar angka={3}  />
            <DiagramBatang  />
          </div>
          <div className="flex gap-2">
            <Pilar angka={4}  />
            <DiagramBatang  />
          </div>
        </div>
      </div>
    </div>
  );
};



export default HasilKuis;
