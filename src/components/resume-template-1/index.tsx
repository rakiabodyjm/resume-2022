import { gql, useQuery } from '@apollo/client'
import { CircularProgress, Grid, SxProps } from '@mui/material'
import Header from 'src/components/resume-template-1/Header'
import Summary from 'src/components/resume-template-1/Summary'
import { PersonalInformation } from 'src/graphql/resolvers/profile'
import { Theme } from '@mui/material/styles'
import Skills from 'src/components/resume-template-1/Skills'
import { RefinedSkills, Skills as SkillType } from 'src/graphql/resolvers/skill'
import { TimelineEntry } from '@data/timeline'
import Timeline from 'src/components/resume-template-1/Timeline'
import { PersonalProjects } from '@data/personal-projects'
import PersonalTimeline from 'src/components/resume-template-1/PersonalProjects'
import {
  Certificates,
  Tickets,
} from 'src/components/resume-template-1/Certificates'
import { Certificate } from '@data/certificates'
import theme from 'src/theme'
import Degrees from './Degrees'
import { Degrees as DegreesType } from '@data/degrees'

const GET_RESUME = gql`
  query GetResume($ticketType: CertType, $certType: CertType) {
    timelines {
      position
      company
      date
      projects {
        name
        description
        responsibilities
        technologies
        summarizedResponsibilities
      }
    }
    profile {
      name
      title
      summary
      genericData {
        title
        description
        iconString
      }
      profiles {
        title
        description
        iconString
      }
    }
    skills {
      languages
      orm
      dataLib
      uiLibraries
      microServices
      saas
      dbms
      auth
      otherNode
      testing
      tools
      environments
      webServer
      otherLibs
    }
    skillsv2 {
      Technologies
      UI_Libraries
      Frontend_Libraries
      Backend_Libraries
      Databases
      Other_Software
      Services
      Process
      Tools
      Environments
    }
    personal_projects {
      name
      description
      technologies
    }
    tickets: certificates(type: $ticketType) {
      name
      date
      description
      image
    }
    certificates: certificates(type: $certType) {
      name
      date
      description
      image
    }
    degrees {
      name
      date
    }
  }
`
type GetResumeQuery = {
  timelines: TimelineEntry[]
  profile: PersonalInformation
  skills: SkillType
  skillsv2: RefinedSkills
  personal_projects: PersonalProjects[]
  certificates: Certificate[]
  tickets: Certificate[]
  degrees: DegreesType[]
}

const styling: { [key: string]: SxProps<Theme> } = {
  header: {
    display: 'flex',
    background: (theme) => `linear-gradient(225deg, #4b6cb7 0%, #182848 100%)`,
    border: 'none !important',
    color: (theme) =>
      theme.palette.getContrastText(theme.palette.secondary.main),
    '.title-container': {
      flexBasis: '70%',
      display: 'flex',
      flexFlow: 'column nowrap',
    },
    '.header-title': {
      fontWeight: 700,
      fontFamily: 'Montserrat, sans-serif',
    },
    '.header-subtitle': {
      mt: -1,
    },
    '.profile-container': {
      display: 'flex',
      flexBasis: '30%',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    '.account-container': {
      mt: 2,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      gap: 1,
    },
    '.header-profile': {
      fontSize: (theme) => theme.typography.body1.fontSize,
      px: 3,
      py: 0.5,
      borderRadius: '4px',
      '.label': {
        display: 'none',
      },
      '.icon': { mr: 1 },
    },

    '.background': {
      background: (theme) => theme.palette.secondary.light,
    },

    '.inline': {
      display: 'inline-flex',
      alignItems: 'center',
      width: 'max-content',

      '.icon': {
        fontSize: 20,
      },
      '.label': {},
    },
  },

  summary: {
    position: 'relative',
    p: 2,
    ul: {
      my: 1,
      mb: 0,
    },
    '.summary-text': {
      textIndent: (theme) => theme.spacing(4),
      fontSize: (theme) => theme.typography.body1.fontSize,
    },
  },

  skills: {
    display: 'flex',
    flexDirection: 'column',
    '.skills-container': {
      position: 'relative',
      display: 'flex',
      flexWrap: 'wrap',
      ':not(:last-child)': {
        mb: 1,
      },

      pt: 3,

      '.skill-title': {
        position: 'absolute',
        top: 0,
        fontWeight: 600,
        mb: 2,
        ':after': {
          position: 'absolute',
          content: '":"',
          right: -3,
        },
      },
      '.skill': {
        ml: 1,
      },
    },
  },
  timelines: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    '.timeline-entry-container': {
      position: 'relative',
      ':last-child': {
        mb: -1,
      },

      '.position': {
        fontWeight: 700,
        fontSize: (theme) => theme.typography.h6.fontSize,
      },
      '.company': {
        fontSize: (theme) => theme.typography.body2.fontSize,
      },
      '.date': {
        fontSize: (theme) => theme.typography.caption.fontSize,
      },
      '.projects-container': {
        m: 1,
        my: 2,
        p: 1,
        pl: 4,
        borderTop: 'none',
        borderBottom: 'none',
        position: 'relative',

        '.name': {
          fontWeight: 700,
        },
        '.description': {
          display: 'none',
          fontSize: (theme) => theme.typography.body2.fontSize,
        },

        '.responsibilities-container': {
          m: 0,

          '.responsibility': {},
        },
        '.technologies-container': {
          mt: 1,
          fontSize: (theme) => theme.typography.body2.fontSize,

          '.technologies-title': {
            display: 'inline',
            fontWeight: 700,
            fontSize: 'inherit',
          },
          '.technology': {
            display: 'inline',
            ml: 1,
            fontSize: 'inherit',
          },
        },
      },
    },
  },
  personal_timelines: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    '.section-caption': {
      fontSize: (theme) => `${theme.typography.h6.fontSize} !important`,
      top: (theme) => theme.typography.h6.fontSize,
      transform: 'translateY(15%)',
    },

    '.personal-project-container': {
      p: 1,
      '.title': {
        fontWeight: 700,
      },
      '.description': {
        mt: 1,
        fontSize: (theme) => `${theme.typography.body2.fontSize} !important`,
      },
      '.tech-container': {
        display: 'flex',
        flexWrap: 'wrap',
      },
      '.technology-title': {
        mt: 0.5,
        fontWeight: 700,
        fontSize: (theme) => `${theme.typography.caption.fontSize} !important`,
      },

      '.technology': {
        mr: 1,
        fontSize: (theme) => `${theme.typography.caption.fontSize} !important`,
      },
    },
  },
  certificates: {
    display: 'grid',
    p: (theme) => `${theme.spacing(3)} !important`,
    '.container': {
      pt: 1,
      display: 'flex',
      gap: 2,
    },
    '.certificate-container': {
      flexBasis: '50%',
      p: 1,

      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      textAlign: 'center',
    },
    '.title': {
      fontWeight: 700,
      fontSize: (theme) => theme.typography.h6.fontSize,
    },
    '.date': {
      fontSize: (theme) => theme.typography.body2.fontSize,
      color: (theme) => theme.palette.grey['A400'],
      mt: -1,
    },

    '.image-container': {
      display: 'block',
      position: 'relative',
      width: '100%',

      height: 146,
    },
  },
  tickets: {
    '.container': {},
    '.certificate-container': {
      p: 1,
      textAlign: 'center',
      ':not(:last-child)': {
        mb: 2,
      },

      '.title': {
        fontWeight: 700,
      },
      '.date': {
        fontSize: (theme) => theme.typography.caption.fontSize,
        color: (theme) => theme.palette.grey['A400'],
        mb: -1,
      },
      '.description': {
        fontSize: (theme) => theme.typography.body2.fontSize,
      },
    },

    '.image-container': {
      mt: 2,
      display: 'block',
      position: 'relative',
      width: '100%',
      height: (theme) => theme.spacing(21),
      padding: '54% 0 0 0',
    },
  },
  degrees: {
    '.degree-container': {
      p: 1,
      ':not(:last-child)': {
        mb: 1,
      },
    },
    '.name': {
      fontSize: (theme) => theme.typography.body2.fontSize,
      fontWeight: 600,
    },
    '.date': {
      fontSize: (theme) => theme.typography.caption.fontSize,
      color: (theme) => theme.palette.grey['A400'],
    },
    '.extra': {
      fontSize: (theme) => theme.typography.caption.fontSize,
    },
    '.university': {
      fontWeight: 700,
      fontSize: (theme) => theme.typography.body1.fontSize,
    },
    '.location': {
      fontSize: (theme) => theme.typography.caption.fontSize,
      color: (theme) => theme.palette.grey['A400'],
    },
  },
  __global: {
    '.skills-container .skill-title': {
      color: 'transparent',
      background: (theme) => theme.palette.secondary.gradient,
      backgroundClip: 'text',
    },
    ...[
      '.personal-project-container .title',
      '.timeline-entry-container .position',
      '.certificate-container .title',
      '.degree-container .university',
    ].reduce(
      (gradientedClasses, selector) => ({
        ...gradientedClasses,
        [selector]: {
          color: 'transparent',
          background: (theme) => theme.palette.secondary.gradient,
          backgroundClip: 'text',
          display: 'inline-flex',
        },
      }),
      {}
    ),

    '.bordered': {
      p: 2,
      position: 'relative',
      borderRadius: 0.5,
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: '#8aacc890',

      '> .section-caption': {
        color: (theme) => theme.palette.secondary.light,
        fontSize: (theme) => theme.typography.h5.fontSize,
        fontWeight: 600,
        position: 'absolute',
        display: 'inline',
        top: '-1rem',
        left: (theme) => theme.spacing(2),
        zIndex: 2,

        ':after': {
          content: "''",
          position: 'absolute',
          zIndex: -1,
          top: '40%',
          left: '-0.2rem',
          right: '-0.2rem',

          background: (theme) => theme.palette.background.default,
          height: '0.5rem',
          borderRadius: '4px',
          opacity: 1,
        },
      },
    },
    '.dividered:not(:last-child)': {
      position: 'relative',
      ':after': {
        background: (theme) => theme.palette.secondary.light,
        content: '""',
        position: 'absolute',
        height: '0.1rem',
        borderRadius: 0.5,
        left: 0,
        right: 0,
        bottom: '-0.5rem',
      },
    },
    '.commad': {
      position: 'relative',
      ':not(:last-child):after': {
        position: 'absolute',
        content: '","',
        bottom: 0,
        right: -2,
      },
    },
    '.stacked': {
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      justifyContent: 'space-between',
    },
    '.sub-bordered': {
      borderColor: '#8aacc8',
      borderWidth: 2,
      borderStyle: 'dashed',
      borderRadius: 0.5,
      boxSizing: 'border-box',
    },
  },
}
export default function ResumeTemplate1() {
  const { data, loading, error } = useQuery<GetResumeQuery>(GET_RESUME, {
    variables: {
      ticketType: 'TICKET',
      certType: 'CERTIFICATE',
    },
  })

  if (!data || loading) {
    return (
      <CircularProgress
        sx={{
          m: 'auto',
          position: 'relative',
          top: '50%',
        }}
      />
    )
  }
  return (
    <Grid spacing={3} sx={styling.__global} container>
      <Grid item xs={12}>
        <Header sx={styling.header} headerDetails={data?.profile} />
      </Grid>
      <Grid item xs={12}>
        <Summary
          sx={styling.summary}
          summary={
            JSON.parse(data.profile.summary as string) as (string | string[])[]
          }
        />
      </Grid>

      <Grid className="stacked" item xs={3}>
        <Skills skills={data.skillsv2} sx={styling.skills} />

        <PersonalTimeline
          personalProjects={data.personal_projects}
          sx={styling.personal_timelines}
        />

        <Tickets sx={styling.tickets} tickets={data.tickets} />
        <Degrees sx={styling.degrees} degrees={data.degrees} />
      </Grid>
      <Grid className="stacked" item xs={9}>
        <Timeline sx={styling.timelines} timeLines={data.timelines} />
        <Certificates
          sx={styling.certificates}
          certificates={data.certificates}
        />
      </Grid>
    </Grid>
  )
}
