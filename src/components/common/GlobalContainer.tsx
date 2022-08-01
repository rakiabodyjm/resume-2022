import { ContainerProps } from "@mui/material";
import { Container } from "@mui/system";

export default function GlobalContainer({
  children,
  ...restProps
}: ContainerProps) {
  return (
    <Container
      sx={{
        p: {
          xs: 1,
          sm: 2,
        },
        ...restProps?.sx,
      }}
      disableGutters
      {...restProps}
    >
      {children}
    </Container>
  );
}
