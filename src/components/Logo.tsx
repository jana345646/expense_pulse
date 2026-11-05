export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-14 h-14 rounded-2xl bg-[#FE981E] relative flex items-center justify-center">
        <p className="text-white font-bold text-3xl z-10 font-outfit">E</p>
        <div className="w-7 h-7 rounded-tr-xl rounded-bl-xl bg-[#FFBB6A] absolute bottom-0 left-0"></div>
      </div>
      <p className="text-white font-outfit font-medium text-xl leading-none tracking-tight">
        ExpensePulse
      </p>
    </div>
  );
}
