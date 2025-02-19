import { getSession } from "@/lib/session";
import Link from "next/link";
import { Button } from "./ui/button";

const SignInButton = async () => {
  const session = await getSession();
  return (
    <div className="flex items-center gap-2 ml-auto">
      {!session || !session.user ? (
        <>
          <Link href={"/auth/signin"}>
            <Button>Sign In</Button>
          </Link>
          <Link href={"/auth/signup"}>
            <Button>Sign Up</Button>
          </Link>
        </>
      ) : (
        <>
          <p>{session.user.name}</p>
          <a href={"/api/auth/signout"}>
            <Button>Sign Out</Button>
          </a>
        </>
      )}
    </div>
  );
};

export default SignInButton;
