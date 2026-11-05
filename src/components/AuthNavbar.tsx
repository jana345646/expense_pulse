import Logo from "./Logo";

export default function AuthNavbar() {
  return (
    <div className="flex justify-between items-center bg-[#101039] pt-10 px-10">
      <Logo />
      <p className="font-outfit font-normal text-[#9999B7] text-xs">
        The modern way to manage your financial flow
      </p>
    </div>
  );
}
