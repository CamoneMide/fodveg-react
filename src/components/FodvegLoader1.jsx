import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const FodvegLoader1 = ({ onComplete }) => {
  const [phase, setPhase] = React.useState(0); // 0: circle, 1: F, 2: pulse, 3: circle exit, 4: typing, 5: exit
  const [displayText, setDisplayText] = React.useState("");
  const [shouldExit, setShouldExit] = React.useState(false);

  React.useEffect(() => {
    const timeline = [
      // Phase 0: Circle drawing (1.5s)
      () => new Promise((resolve) => setTimeout(resolve, 1750)),

      // Phase 1: Show F
      () => {
        setPhase(1);
        return Promise.resolve();
      },

      // Phase 2: Heartbeat (1.5s)
      () =>
        new Promise((resolve) => {
          setPhase(2);
          setTimeout(resolve, 1750);
        }),

      // Phase 3: Circle exit
      () =>
        new Promise((resolve) => {
          setPhase(3);
          setTimeout(resolve, 800); // Circle scales down
        }),

      // Phase 4: Typing animation
      () =>
        new Promise((resolve) => {
          setPhase(4);
          const fullText = "Fodveg";
          let currentText = "";
          const interval = setInterval(() => {
            currentText = fullText.substring(0, currentText.length + 1);
            setDisplayText(currentText);
            if (currentText === fullText) {
              clearInterval(interval);
              setTimeout(() => {
                setPhase(5);
                setShouldExit(true);
                setTimeout(() => {
                  if (onComplete) onComplete();
                  resolve();
                }, 900); // Time for fade-up animation
              }, 1000); // Pause at end
            }
          }, 90); // Typing speed
        }),
    ];

    const runTimeline = async () => {
      for (const step of timeline) {
        await step();
      }
    };

    runTimeline();

    return () => {};
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!shouldExit && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(38,70,83,0.9)] backdrop-blur-md"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          exit={{
            // opacity: 0,
            y: "-105%", // Moves up while fading out
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
        >
          {/* Circle - only visible in phases 0-3 */}
          <AnimatePresence>
            {phase < 4 && (
              <motion.svg
                className="absolute w-24 h-24"
                viewBox="0 0 100 100"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: phase >= 0 ? 1 : 0,
                  scale: phase === 3 ? 0 : phase === 2 ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  opacity: { duration: 0.3 },
                  scale: {
                    duration: phase === 2 ? 1 : 0.5,
                    repeat: phase === 2 ? Infinity : 0,
                  },
                }}
                exit={{ scale: 0, opacity: 0 }}
              >
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#FFF"
                  strokeWidth="6"
                  strokeDasharray="283"
                  initial={{ strokeDashoffset: 283 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </motion.svg>
            )}
          </AnimatePresence>

          {/* Text */}
          <motion.div
            className={`fontPop font-bold text-[#FEC740] ${
              phase < 4 ? "text-[40px]" : "text-[34px]"
            }`}
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              opacity: phase >= 1 ? 1 : 0,
              scale: phase === 2 ? [1, 1.2, 1] : 1,
              y: phase === 5 ? -50 : 0, // Apply fade-up to text as well
            }}
            transition={{
              opacity: { duration: 0.5 },
              scale: phase === 2 ? { duration: 1, repeat: Infinity } : {},
              y: { duration: 1, ease: "easeInOut" },
            }}
          >
            {phase < 4 ? "F" : displayText}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FodvegLoader1;
