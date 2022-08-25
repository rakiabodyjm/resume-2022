import { BoxProps } from '@mui/system'
import { Box, Theme, Typography, TypographyProps, SxProps } from '@mui/material'
import { Fragment } from 'react'
const RenderArrayOrString = ({
  content,
  sub,
  ...restProps
}: {
  content: string | (string | string[])[]
  sub?: true
} & TypographyProps) => {
  return (
    <>
      {Array.isArray(content) && typeof content !== 'string' ? (
        content.map((cont) => (
          <Fragment key={cont.toString()}>
            {Array.isArray(cont) && typeof cont !== 'string' ? (
              <ul>
                <RenderArrayOrString sub content={cont} {...restProps} />
              </ul>
            ) : sub ? (
              <li>
                <Typography {...restProps}>{cont}</Typography>
              </li>
            ) : (
              <Typography {...restProps}>{cont}</Typography>
            )}
          </Fragment>
        ))
      ) : (
        <Typography {...restProps}>{content}</Typography>
      )}
    </>
  )
}

export default function Summary({
  summary,
  sx,
  ...restProps
}: {
  summary: (string | string[])[]
  sx: SxProps<Theme>
} & Omit<BoxProps, 'sx'>) {
  return (
    <Box sx={sx} className="bordered" {...restProps}>
      <Typography variant="h5" className="section-caption">
        About Me
      </Typography>
      <RenderArrayOrString
        className="summary-text"
        content={summary.join(' ')}
      />
    </Box>
  )
}
