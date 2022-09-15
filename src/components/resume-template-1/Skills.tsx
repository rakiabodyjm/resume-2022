import { Box, BoxProps, SxProps, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { useEffect, useMemo, useRef, useState } from 'react'
import {
  RefinedSkills,
  Skills as TypeSkills,
} from '../../graphql/resolvers/skill'

export default function Skills({
  sx,
  skills,
  ...props
}: { skills: TypeSkills | RefinedSkills; sx?: SxProps<Theme> } & Omit<
  BoxProps,
  'sx'
>) {
  const containerRef = useRef<HTMLDivElement | undefined>()
  const lastRef = useRef<HTMLDivElement | undefined>()

  return (
    <Box
      ref={containerRef}
      sx={{
        ...sx,
      }}
      className="bordered"
      {...props}
    >
      <Typography variant="h5" className="section-caption">
        Skills
      </Typography>
      {Object.entries(reduceSkills(skills)).map(([title, skills]) => (
        <Box key={title} className="skills-container" ref={lastRef}>
          <Typography className="skill-title" variant="body1">
            {title.split('_').join(' ')}
          </Typography>
          {skills?.map((skill, index, array) => (
            <Typography variant="body2" key={skill} className="skill">
              {skill}
              {index === array.length - 1 ? '' : ','}
            </Typography>
          ))}
        </Box>
      ))}
    </Box>
  )
}

function reduceSkills(skills: TypeSkills | RefinedSkills) {
  // let returnObject
  if (
    Object.keys(skills).filter((ea) => !/A-Z/.test(ea.charAt(0))).length > 0
  ) {
    console.log('found')
    return skills as RefinedSkills
    // const {
    //   Backend_Libraries,
    //   Databases,
    //   Environments,
    //   Frontend_Libraries,
    //   Other_Software,
    //   Process,
    //   Services,
    //   Technologies,
    //   Tools,
    //   UI_Libraries,
    // } = skills as RefinedSkills;
    // return Object.entries(skills as RefinedSkills).reduce(
    //   (acc, [title, skills]) => {
    //     return {
    //       ...acc,
    //       [title.split("_").join(" ")]: skills,
    //     };
    //   },
    //   {}
    // );
  } else {
    const {
      auth,
      dataLib,
      dbms,
      environments,
      languages,
      microServices,
      orm,
      otherLibs,
      otherNode,
      saas,
      testing,
      tools,
      uiLibraries,
      webServer,
    } = skills as TypeSkills

    return {
      Technologies: languages,
      Authentication: auth,
      Frontend_Libraries: dataLib,
      Database: dbms,
      Environments: environments,
      MicroServices: microServices,
      ORM: orm,
      Other_Libraries: otherLibs,
      Node_Libraries: otherNode,
      Services: saas,
      Testing: testing,
      Tools: tools,
      UI_Libraries: uiLibraries,
      Web_Server: webServer,
    }
  }
}
