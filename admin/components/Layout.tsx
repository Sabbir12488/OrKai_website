import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react";
import { ReactNode } from "react";

interface Props{
    children: ReactNode;
}

export default function Layout({children}: Props) {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="bg-blue-500 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            className="bg-white p-2 px-4 rounded-lg"
            onClick={() => signIn("google")}
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-orange-500 w-screen h-screen flex">
        <Nav></Nav>
        <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
          <p>{children}</p>
        </div>
      </div>
    );
  }
}
