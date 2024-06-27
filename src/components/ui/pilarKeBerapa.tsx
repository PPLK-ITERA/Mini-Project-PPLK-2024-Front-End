const PilarKeBerapa = ({ angka, className }: { angka: number; className: string }) => {
  return (
    <div className={` ${className}`}>
      <p className="font-bold text-xl">Anda Memiliki Pilar ke {angka}</p>
    </div>
  );
};

export default PilarKeBerapa