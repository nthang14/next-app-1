// import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
import {
  useAuthLoginMutation,
  useGetStoreQuery,
} from "~/app/services/authService";
import { setAuthState } from "~/app/slices/authSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useAuthLoginMutation();
  console.log("login 1", useAuthLoginMutation);
  const handleLogin = async () => {
    const result: any = await login({
      email: "lappham1408@gmail.com",
      password: "Lappham1408",
    });
    console.log("result", result);
    dispatch(setAuthState(result?.data));
    // const store = await getStore({});
    // console.log("store", store);

    router.push("/store");
  };
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div onClick={handleLogin}>Login</div>
      <div>Get store</div>
    </main>
  );
}
