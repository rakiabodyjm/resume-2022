import { ContainerProps } from "@mui/material";
import { Container } from "@mui/material";

export default function GlobalContainer({
  children,
  sx,
  ...restProps
}: ContainerProps) {
  return (
    <Container
      disableGutters
      sx={{
        p: {
          xs: 1,
          sm: 2,
        },
        // ...(restProps?.sx && restProps?.sx),
        ...sx,
      }}
      {...restProps}
    >
      {children}
    </Container>
  );
}
