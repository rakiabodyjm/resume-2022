import { Typography } from "@mui/material";
import { motion } from "framer-motion";
export default function JaneoDevLogo() {
  return (
    <>
      <Typography
        sx={{
          background:
            "url('/api/external-image?url=https://i.stack.imgur.com/Kkxty.png') no-repeat",
          backgroundSize: "200% 200%",
          backgroundPosition: "100% 10%",
          backgroundClip: "text",
          color: "transparent",

          animation: (theme) =>
            "janeo-dev-rgb 3000ms " +
            theme.transitions.easing.sharp +
            " infinite",
          "@keyframes janeo-dev-rgb": {
            "0%": {
              backgroundPosition: "0% 10%",
            },
            "50%": {
              backgroundPosition: "0% 100%",
            },
            "100%": {
              backgroundPosition: "0% 10%",
            },
          },
          letterSpacing: -1,
          fontFamily: "DM Sans, sans-serif",
          transform: "translateY(-1.5rem)",
        }}
        fontWeight={700}
        variant="h2"
      >
        {"janeo.dev".split("").map((letter, index) => {
          return (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                // transform: 'scale(0.4)'
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1 + index * 0.2,
                // repeat: "loop" as const,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2,
              }}
            >
              {letter}
            </motion.span>
          );
        })}
      </Typography>
    </>
  );
}
