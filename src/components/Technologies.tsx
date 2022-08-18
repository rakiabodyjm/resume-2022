/* eslint-disable react/display-name */
import {
  Box,
  Typography as MuiTypography,
  TypographyProps,
} from "@mui/material";
import techStacks from "../data/tech-stacks";
import { motion } from "framer-motion";
import { ForwardedRef, forwardRef, RefObject, useRef, useState } from "react";

const ForwardRefMuiTypography = forwardRef(
  (props: TypographyProps, ref: ForwardedRef<HTMLParamElement>) => (
    <MuiTypography ref={ref} {...props}>
      {props?.children}
    </MuiTypography>
  )
);
const Typography = motion(ForwardRefMuiTypography);

export default function Technologies() {
  const ContainerRef = useRef<null | HTMLDivElement>(null);
  return (
    <Box
      ref={ContainerRef}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
      }}
    >
      {techStacks.flat().map((tech, index) => (
        <Typography
          // draggable
          // drag
          // onDragOver={() => {
          //   console.log("being dropped to ", index);
          // }}
          // onDrag={() => {
          //   setActiveDrag(index);
          //   console.log("being dragged ", index);
          // }}
          // onDragEnd={() => {
          //   console.log("drag end");

          // }}
          // whileDrag={{
          //   skewX: 4,
          // }}
          // dragConstraints={ContainerRef}
          key={tech}
          sx={{
            padding: "2px 8px",
            display: "inline",
            borderRadius: 4,
            border: (theme) =>
              `1px solid ${theme.palette.getContrastText(
                theme.palette.background.paper
              )}`,
          }}
          variant="body2"
          noWrap
        >
          {tech}
        </Typography>
      ))}
    </Box>
  );
}
