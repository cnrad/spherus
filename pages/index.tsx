import { spherusData } from "@/public/spherus/spherusData";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const variants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut", staggerChildren: 0.1 },
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
    <main className="max-h-screen min-h-screen flex flex-col items-center overflow-y-scroll">
      <motion.div
        initial={"initial"}
        animate={"animate"}
        variants={variants}
        className={`flex min-h-[35rem] flex-col items-center justify-center text-white mb-16 w-min gap-2`}
      >
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
      </motion.div>

      <motion.div
        initial={"initial"}
        animate={"animate"}
        variants={variants}
        className="h-auto grid grid-cols-2 gap-28 mb-32"
      >
        {spherusData.map((spherus) => (
          <motion.div
            key={spherus.word}
            variants={variants}
            className="w-min flex flex-row items-start justify-evenly gap-12 h-[20rem]"
          >
            <img
              alt={spherus.word}
              src={`/spherus/${spherus.word}.jpg`}
              className="relative min-w-[20rem] rounded-md cursor-pointer transition-all duration-150 hover:brightness-75"
              onClick={() => setCurrentModal(spherus.word)}
            />
            <div className="flex flex-col min-w-[25rem] h-full">
              <h1 className="text-[3rem] leading-none font-semibold capitalize mb-2">
                {spherus.word}
              </h1>
              <h3 className="text-2xl text-zinc-300 mb-4 italic font-light">
                {spherus.meta}
              </h3>
              <p className="text-xl text-zinc-300 font-light">{spherus.desc}</p>

              <a
                href={`https://cnrad.darkroom.com/`}
                rel="noreferrer noopener"
                className="mt-auto text-center px-3 py-2 bg-zinc-900 text-zinc-400 rounded-md hover:bg-zinc-800 border border-zinc-900 hover:border-zinc-700 hover:text-white transition-colors duration-150"
              >
                Purchase Print
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <footer className="py-4 flex items-center justify-center text-sm text-zinc-500 w-full">
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
                className="relative h-[80vh] w-auto rounded-md"
                src={`/spherus/${currentModal}.jpg`}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
