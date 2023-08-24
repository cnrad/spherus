import { spherusData } from "@/public/spherus/spherusData";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const variants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0, 0.5, 0.5, 1],
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const [currentModal, setCurrentModal] = useState<string | null>(null);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setCurrentModal(null);
    });

    return window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setCurrentModal(null);
    });
  });

  return (
    <main className="h-auto flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="w-full min-h-[30rem] lg:min-h-[40rem] bg-gradient-to-b from-[#0e111a] to-[#080808] absolute -z-10"
      />

      <motion.div
        initial={"initial"}
        animate={"animate"}
        variants={variants}
        className={`flex min-h-[35rem] flex-col items-center justify-center text-white md:mb-16 w-min gap-2`}
      >
        <h1 className="font-extralight text-[4rem] md:text-[8rem] lg:text-[13rem] h-min leading-none">
          SPHERUS.
        </h1>
        <h2 className="text-zinc-200 font-light text-center text-xl md:text-3xl tracking-widest">
          a collection of attempts to convey ineffable emotions.
        </h2>
        <h3 className="text-zinc-400 font-light text-lg text-center lg:text-start md:text-xl flex flex-col lg:flex-row w-full justify-between px-4 tracking-wider">
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
      </motion.div>

      <motion.div
        initial={"initial"}
        animate={"animate"}
        variants={variants}
        className="h-auto flex flex-col 2xl:grid 2xl:grid-cols-2 gap-28 mb-32"
      >
        {spherusData.map((spherus) => (
          <motion.div
            key={spherus.word}
            variants={variants}
            className="w-min h-auto flex flex-col items-center md:flex-row md:items-start justify-evenly md:gap-12 md:h-[20rem]"
          >
            <Image
              alt={spherus.word}
              src={`/spherus/${spherus.word}.jpg`}
              className="relative min-w-[20rem] rounded-md cursor-pointer transition-all duration-150 hover:brightness-75"
              onClick={() => setCurrentModal(spherus.word)}
              width={320}
              height={320}
              quality={100}
            />
            <div className="flex mt-8 md:mt-0 flex-col min-w-[80vw] md:min-w-[25rem] h-full">
              <h1 className="text-[3rem] leading-none font-semibold capitalize mb-2">
                {spherus.word}
              </h1>
              <h3 className="text-2xl text-zinc-300 mb-4 italic font-light">
                {spherus.meta}
              </h3>
              <p className="text-xl text-zinc-300 font-light">{spherus.desc}</p>

              <a
                href={`https://cnrad.darkroom.com/products/spherus/${spherus.id}`}
                rel="noreferrer noopener"
                className="mt-4 md:mt-auto text-center px-3 py-2 bg-zinc-900 text-zinc-400 rounded-md hover:bg-zinc-800 border border-zinc-900 hover:border-zinc-700 hover:text-white transition-colors duration-150"
              >
                Purchase Print
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <footer className="py-4 text-sm text-zinc-500 w-full text-center px-4">
        All works © Conrad Crawford 2023. Please do not reproduce without the
        expressed written consent of Conrad Crawford
      </footer>

      <AnimatePresence>
        {currentModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center"
          >
            <div
              className="absolute w-screen min-h-screen bg-black opacity-80"
              onClick={() => setCurrentModal(null)}
            />
            {currentModal && (
              <img
                alt={currentModal}
                className="relative w-[80vw] h-auto md:max-w-[50rem] md:w-auto md:min-h-[50rem] rounded-md"
                src={`/spherus/${currentModal}.jpg`}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
