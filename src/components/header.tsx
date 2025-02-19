import Link from "next/link";
import SignInButton from "./signInButton";

const HeaderPage = () => {
  return (
    <div className="p-6 shadow flex gap-3 bg-black text-white border-b border-gray-800">
      <Link href={"/"}>Home</Link>
      <Link href={"/dashboard"}>Dashboard</Link>
      <Link href={"/profile"}>Profile</Link>
      <SignInButton />
    </div>
  );
};

export default HeaderPage;
