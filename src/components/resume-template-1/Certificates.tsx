import { Certificate } from '@data/certificates'
import { Box, BoxProps, SxProps, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import Image from 'next/image'
import { useMemo } from 'react'
export function Certificates({
  sx,
  certificates,
  ...props
}: { sx: SxProps<Theme>; certificates: Certificate[] } & BoxProps) {
  return (
    <Box className="bordered" sx={sx} {...props}>
      <Typography className="section-caption">Certificates</Typography>
      <Box className="container">
        <RenderCertificates certificates={certificates} />
      </Box>
    </Box>
  )
}

export function Tickets({
  sx,
  tickets,
  ...props
}: { sx: SxProps<Theme>; tickets: Certificate[] } & BoxProps) {
  return (
    <Box className="bordered" sx={sx} {...props}>
      <Typography className="section-caption">Conferences</Typography>
      <Box className="container">
        <RenderCertificates certificates={tickets} />
      </Box>
    </Box>
  )
}
const RenderCertificates = ({
  certificates,
}: {
  certificates: Certificate[]
}) => {
  return (
    <>
      {[...certificates].map(({ date, description, image, name }) => (
        <Box key={date} className="certificate-container sub-bordered">
          <Typography className="title">{name}</Typography>
          <Typography className="date">{date}</Typography>
          <Box className="image-container">
            <Image
              priority
              // placeholder="blur"
              // blurDataURL={`/${image}`}

              src={`/${image}`}
              alt={name}
              layout="fill"
              objectFit="contain"
            />
          </Box>
          {/* <Typography className="description">{description}</Typography> */}
        </Box>
      ))}
    </>
  )
}
