import { Box, Typography } from "@mui/material";
import techStacks from "../data/tech-stacks";

export default function Technologies() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
      }}
    >
      {techStacks.flat().map((tech) => (
        <Typography
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
