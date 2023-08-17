import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], style: "normal" });

export default function Home() {
  return (
    <>
      <div
        className="fade-blur fixed w-full top-0 h-[20rem] z-10 pointer-events-none opacity-95"
        style={{
          maskImage: "linear-gradient(to bottom,#000 25%, transparent)",
          backdropFilter: "blur(5px)",
        }}
      />

      <main
        className={`flex h-auto flex-col items-center justify-start text-white overflow-y-scroll snap-y snap-mandatory`}
      >
        <div className="h-screen flex flex-col items-center justify-center w-min gap-2">
          <h1 className="font-extralight text-[13rem] h-min leading-none">
            SPHERUS.
          </h1>
          <h2 className="text-zinc-200 font-light text-3xl tracking-widest">
            a collection of attempts to convey ineffable emotions.
          </h2>
          <h3 className="text-zinc-400 font-light text-xl flex w-full justify-between px-4 tracking-wider">
            <div>
              <span className="text-zinc-200 font-normal text-2xl mr-2">
                sphe·ra
              </span>
              globe, sphere, orb, ball.
            </div>
            <div>
              <span className="text-zinc-200 font-normal text-2xl mr-2">
                sēn·sus
              </span>
              perception, feeling, sensation, sense.
            </div>
          </h3>
        </div>

        <div className="h-[100vh] w-[10rem] flex items-center justify-center">
          test
        </div>
      </main>
    </>
  );
}
