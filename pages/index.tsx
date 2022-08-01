import type { NextPage } from "next";
import Container from "@mui/material/Container";
import { Divider, Grid, Paper, Typography, Box } from "@mui/material";
import Header from "../src/components/Header";
import Technologies from "../src/components/Technologies";
import Timeline from "../src/components/Timeline";

const Home: NextPage = () => {
  return (
    <Paper
      sx={{
        p: 6,
      }}
      variant="outlined"
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Technologies />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            my: 2,
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            sx={{
              color: (theme) =>
                theme.palette.mode === "dark"
                  ? theme.palette.primary.main
                  : theme.palette.primary.main,
            }}
          >
            <Typography variant="h5" letterSpacing={0.7} fontWeight={900}>
              Employment Timeline
            </Typography>
            <Box
              sx={{
                // background: "red",
                // background: (theme) => theme.palette.divider,
                background: "currentColor",
                borderRadius: (theme) => theme.shape.borderRadius,
                height: 3,
                flexGrow: "1",
                position: "relative",
                top: "50%",
                ml: 2,
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Timeline />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Home;
