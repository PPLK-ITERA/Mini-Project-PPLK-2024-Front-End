const Pilar = ({ angka, className, hasil }: { angka: number; className: string, hasil: number  }) => {
  return (
    <div>
      <div className="flex justify-between">
        <p className={`${className} font-bold text-lg`}>Pilar {angka} : </p>
        <p className="text-[#432005] text-xs self-end">{hasil}/18</p>
      </div>
    </div>
  );
};

export default Pilar;
