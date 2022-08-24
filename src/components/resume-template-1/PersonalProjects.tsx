import { PersonalProjects as PersonalProjectType } from '@data/personal-projects'
import { Box, BoxProps, SxProps, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { Fragment } from 'react'
export default function PersonalProjects({
  sx,
  personalProjects,
  ...props
}: { sx: SxProps<Theme>; personalProjects: PersonalProjectType[] } & BoxProps) {
  return (
    <Box sx={sx} className="bordered" {...props}>
      <Typography className="section-caption">Personal Projects</Typography>
      {personalProjects.map(({ name, description, technologies }) => (
        <Box className="personal-project-container sub-bordered" key={name}>
          <Typography className="title">{name}</Typography>
          <Typography className="description">{description}</Typography>

          <Typography className="technology-title">Technologies: </Typography>
          <Box className="tech-container">
            {technologies.map((tech) => (
              <Typography key={tech} className="technology commad">
                {tech}
              </Typography>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  )
}
