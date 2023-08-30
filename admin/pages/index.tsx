import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="bg-blue-300 w-screen h-screen flex items-center">
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
      <div className="bg-blue-300 w-screen h-screen">
        <Nav></Nav>
        <p>You are logged in as {session.user?.name}</p>
        <br />
        <button
          className="bg-white p-2 px-4 rounded-lg"
          onClick={() => signOut()}
        >
          Log out
        </button>
      </div>
    );
  }
}
