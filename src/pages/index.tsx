// import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
import { useAuthLoginMutation } from "~/app/services/authService";
export default function Home() {
  // const [login, { isLoading }] = useAuthLoginMutation();
  const handleLogin = async () => {
    // const result = await login({
    //   email: "lappham1408@gmail.com",
    //   password: "Lappham1408",
    // });
    // console.log("result", result);
  };
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      test
    </main>
  );
}
