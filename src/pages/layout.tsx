import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <>
      <Head>
        <title>Leonardo Jordano</title>
      </Head>
      <div
        className={`${inter.className} bg-gradient-to-br to-slate-600 from-slate-800 h-screen w-screen flex justify-center items-center`}
      >
        <div className="z-10 container-md bg-slate-600 p-5 rounded-md flex gap-4  w-fit transition-width">
          <Navbar></Navbar>
          <div className="content bg-slate-800 h-100 min-w-content p-5 w-fit rounded-md transition-width">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
