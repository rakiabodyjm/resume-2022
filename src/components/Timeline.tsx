import { Paper, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";
// import { v4 } from "uuidv4";
import { v4 } from "uuid";
import timelineEntries from "@data/timeline";

const StyledBox = styled(Box)((theme) => ({
  marginLeft: 32,
  // position: "relative",
  // ":before": {
  //   content: "''",
  //   position: "absolute",
  //   width: 8,
  //   background: "currentColor",
  //   left: -16,
  //   bottom: 64,
  //   top: 20,
  //   borderRadius: 8,
  //   opacity: 0.4,
  // },

  // ".project": {
  //   position: "relative",
  //   ":before": {
  //     content: '""',
  //     position: "absolute",
  //     width: 4,
  //     background: "currentColor",
  //     left: -8,
  //     top: 0,
  //     bottom: 0,
  //   },
  // },
}));
export default function Timeline() {
  return (
    <>
      {timelineEntries.map((timeline) => (
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            mb: 2,
            ":nth-last-of-type(1)": {
              // background: "red",
              mb: 0,
            },
          }}
          key={v4()}
        >
          <Typography variant="h6" fontWeight={600}>
            {timeline.position}
          </Typography>
          <Typography variant="body1">{timeline.company}</Typography>

          <Typography variant="caption" color="textSecondary">
            {timeline.date}
          </Typography>

          <Box
            sx={{
              p: 2,
              mt: 1,
            }}
          >
            {timeline.projects.map((project) => (
              <Box
                sx={{
                  marginTop: 2,
                }}
                key={project.technologies.join(",")}
                className="project"
              >
                <Typography fontWeight={600} variant="body1">
                  {project.name}
                </Typography>
                <Typography variant="body2">{project.description}</Typography>

                <ul>
                  {project.responsibilities.map((responsibility, index) =>
                    Array.isArray(responsibility) ? (
                      <Fragment key={`${responsibility}-${index}`}>
                        <li>{responsibility[0]}</li>
                        <ul>
                          {responsibility[1].map((res, index) => (
                            <li key={`${res}${index}`}>{res}</li>
                          ))}
                        </ul>
                      </Fragment>
                    ) : (
                      <li key={responsibility}>{responsibility}</li>
                    )
                  )}
                </ul>

                <Box
                  sx={{
                    p: 2,
                  }}
                >
                  <Typography
                    sx={{
                      mb: 1,
                    }}
                    variant="body2"
                    fontWeight={600}
                  >
                    Technologies:
                  </Typography>
                  <Box
                    display="flex"
                    alignItems="center"
                    flexWrap={"wrap"}
                    gap={1}
                  >
                    {project.technologies.map((tech, index) => (
                      <Typography
                        key={`${tech}-${index}`}
                        variant="body2"
                        sx={{
                          display: "inline",
                          //   mr: 0.5,
                          border: (theme) =>
                            `1px solid ${theme.palette.getContrastText(
                              theme.palette.background.paper
                            )}`,
                          px: 1,
                          lineHeight: 1.6,
                          borderRadius: 4,
                        }}
                      >
                        {tech}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Paper>
      ))}
    </>
  );
}
