import { TimelineEntry } from '@data/timeline'
import { Box, BoxProps, SxProps, Theme, Typography } from '@mui/material'
import { Fragment } from 'react'

export default function Timeline({
  sx,
  timeLines,
  ...restProps
}: {
  timeLines: TimelineEntry[]
  sx?: SxProps<Theme>
} & BoxProps) {
  return (
    <Box sx={sx} className="bordered" {...restProps}>
      <Typography className="section-caption">Employment</Typography>

      {timeLines.map(({ position, company, date, projects }) => (
        <Box
          className="timeline-entry-container"
          key={position + company + date}
        >
          <Typography className="position ">{position}</Typography>
          <Typography className="company">{company}</Typography>

          <Typography className="date">{date}</Typography>

          {projects.map(
            ({
              name,
              responsibilities,
              summarizedResponsibilities,
              description,
              technologies,
            }) => (
              <Box
                className="projects-container sub-bordered"
                key={name + technologies.toString()}
              >
                <Typography className="name">{name}</Typography>
                <Typography className="description">{description}</Typography>

                <Box component="ul" className="responsibilities-container">
                  {summarizedResponsibilities?.map((task) => (
                    <Typography
                      component="li"
                      className="responsibility"
                      key={task}
                    >
                      {task}
                    </Typography>
                  ))}
                </Box>

                <Box className="technologies-container">
                  <Typography className="technologies-title">
                    Technologies:
                  </Typography>

                  {technologies.map((tech, index, array) => (
                    <Typography className="technology" key={tech}>
                      {tech}
                      {index === array.length - 1 ? '' : ','}
                    </Typography>
                  ))}
                </Box>
              </Box>
            )
          )}
        </Box>
      ))}
    </Box>
  )
}
