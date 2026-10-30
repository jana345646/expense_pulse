// () we use this Parentheses to can write a jsx code

// <> this is a react fragment we use it as any component returns only one element , so we wrap all the elements in it to can return multiple elements

export default function Sidebar() {
  return (
    <div className="w-2xs h-screen rounded-tr-3xl rounded-br-3xl bg-[#0F123F]">
      <div className="pt-16 pl-10 flex items-center gap-2">
        <div className="w-[55px] h-[55px] rounded-2xl bg-[#FE981E] relative flex items-center justify-center">
          <p className="text-white font-bold text-3xl z-10">E</p>
          <div className="w-[28px] h-[27px] rounded-tr-xl rounded-bl-xl bg-[#FFBB6A] absolute bottom-0 left-0"></div>
        </div>
        <p className="text-white font-outfit font-medium text-xl leading-none tracking-tight">
          ExpensePulse
        </p>
      </div>
    </div>
  );
}
