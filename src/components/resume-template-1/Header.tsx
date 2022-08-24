import { Box, SvgIconProps, SxProps, Typography } from '@mui/material'
import { Fragment } from 'react'
import { PersonalInformation } from 'src/graphql/resolvers/profile'
import {
  LocationOnOutlined,
  Email,
  SmartphoneOutlined,
  GitHub,
  LinkedIn,
  SvgIconComponent,
  LocationOn,
} from '@mui/icons-material'
import { Theme } from '@mui/material/styles'

const RenderIcon = ({
  iconName,
  ...restProps
}: { iconName: string } & SvgIconProps) => {
  const iconList: Record<string, SvgIconComponent> = {
    LocationOn,
    Email,
    SmartphoneOutlined,
    GitHub,
    LinkedIn,
  }

  const Component = iconList[iconName]
  return <Component {...restProps} />
}

export default function Header({
  headerDetails,
  sx,
}: {
  headerDetails: PersonalInformation
  sx?: SxProps<Theme>
}) {
  return (
    <>
      <Box
        sx={{
          ...sx,
        }}
        className="bordered"
      >
        <Box className="title-container">
          <Typography className="header-title" variant="h4">
            {headerDetails.name.toUpperCase()}
          </Typography>
          <Typography className="header-subtitle" variant="h6">
            {headerDetails.title}
          </Typography>
          <Box className="account-container">
            {headerDetails.profiles.map(
              ({ description, iconString, title }) => (
                <Box className="header-profile inline background" key={title}>
                  <RenderIcon className="icon" iconName={iconString} />

                  <Typography className="label" variant="body2">
                    {title}:
                  </Typography>
                  <Typography variant="body2" className="text">
                    {description}
                  </Typography>
                </Box>
              )
            )}
          </Box>
        </Box>
        <Box className="profile-container">
          {headerDetails.genericData.map(
            ({ title, description, iconString }) => (
              <Box className="header-profile  personal inline" key={title}>
                <RenderIcon className="icon" iconName={iconString} />
                <Typography className="label" variant="body2">
                  {title}:
                </Typography>
                <Typography variant="body2" className="text">
                  {description}
                </Typography>
              </Box>
            )
          )}
        </Box>
      </Box>
    </>
  )
}
