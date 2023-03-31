import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import Providers from "@/redux/Providers";
import Login from "@/Login";
export default function Home() {
  return (
    <main>
      <Providers>
        <Login />
      </Providers>
    </main>
  );
}
