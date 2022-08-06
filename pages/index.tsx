import type { NextPage } from "next";
import { Divider, Grid, Paper, Typography, Box, Slide } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment } from "react";
import JaneoDevLogo from "src/components/molecules/JaneoDevLogo";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Box
        sx={{
          margin: "auto",
          maxWidth: "max-content",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              display: "inline",
              color: (theme) => theme.palette.text.secondary,
            }}
            fontWeight={700}
          >
            Welcome to{" "}
          </Typography>
        </motion.div>

        <AnimatePresence>
          <motion.div
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            exit={{
              opacity: 0,
            }}
            transition={{
              type: "spring" as const,
              duration: 2,
              delay: 1,
            }}
          >
            <JaneoDevLogo />
          </motion.div>
        </AnimatePresence>
      </Box>
    </Fragment>
  );
};

export default Home;
