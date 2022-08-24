/* eslint-disable react/no-unescaped-entities */
import { Degrees as DegreesType } from '@data/degrees'
import {
  Box,
  BoxProps,
  Divider,
  SxProps,
  Theme,
  Typography,
} from '@mui/material'

export default function Degrees({
  sx,
  degrees,
  ...props
}: { degrees: DegreesType[]; sx?: SxProps<Theme> } & BoxProps) {
  return (
    <Box className="bordered" sx={sx} {...props}>
      <Typography className="section-caption">Education</Typography>
      <Typography className="university">Saint Mary's University</Typography>
      <Typography className="location">Bayombong, Nueva Vizcaya</Typography>
      <Divider
        sx={{
          my: 1,
        }}
      />
      {degrees.map(({ date, name }) => (
        <Box key={name} className="degree-container sub-bordered">
          <Typography className="name">
            {name.includes('Undergrad')
              ? name.replace(/\( Undergrad \)/, '')
              : name}
          </Typography>
          {name.includes('Undergrad') ? (
            <Typography className="extra">Undergraduate</Typography>
          ) : (
            <Typography className="extra">Graduate</Typography>
          )}

          <Typography className="date">{date}</Typography>
        </Box>
      ))}
    </Box>
  )
}
