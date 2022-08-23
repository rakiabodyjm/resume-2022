import {
  LocationOnOutlined,
  AlternateEmail,
  SmartphoneOutlined,
  GitHub,
  LinkedIn,
  SvgIconComponent,
} from "@mui/icons-material";

import { Box, Divider, Grid, GridProps, Typography } from "@mui/material";
import { Fragment } from "react";
import { TypographyProps } from "@mui/system";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import { PersonalInformation } from "src/graphql/resolvers/profile";

const RenderIcon = ({ iconName, ...restProps }: { iconName: string }) => {
  const iconList: Record<string, SvgIconComponent> = {
    LocationOnOutlined,
    AlternateEmail,
    SmartphoneOutlined,
    GitHub,
    LinkedIn,
  };

  const Component = iconList[iconName];
  return <Component {...restProps} />;
};

const StyledGrid = styled(Grid)(({ theme }) => ({
  ".MuiTypography-caption": {
    fontWeight: 800,
  },
  ".header-field": {
    display: "inline-flex",
    alignItems: "center",
    fontWeight: 600,
    "& svg": {
      marginRight: 4,
    },
  },
}));
export default function HeaderGraphQL({
  headerDetails,
}: {
  headerDetails: PersonalInformation;
}) {
  const theme = useTheme();
  const router = useRouter();
  return (
    <>
      <StyledGrid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight={900} letterSpacing={-1}>
            {headerDetails.name}
          </Typography>
          <Typography variant="body1">{headerDetails.title}</Typography>
        </Grid>
        <MobileDivider
          sx={{
            pt: 2,
          }}
        />
        <Grid item xs={12} sm={6}>
          {headerDetails.genericData.map(
            ({ iconString, description, title }) => {
              return (
                <Box
                  key={title}
                  sx={{
                    mb: 2,
                  }}
                >
                  <>
                    <Typography variant="body2" className="field">
                      <RenderIcon iconName={iconString} />
                      {title}
                    </Typography>
                    <Typography variant="body2">{description}</Typography>
                  </>
                </Box>
              );
            }
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          {headerDetails.profiles.map(({ iconString, description, title }) => {
            return (
              <Box
                key={title}
                sx={{
                  mb: 2,
                }}
              >
                <>
                  <Typography variant="body2" className="field">
                    <RenderIcon iconName={iconString} />
                    {title}
                  </Typography>
                  <Typography variant="body2">{description}</Typography>
                </>
              </Box>
            );
          })}
        </Grid>

        <MobileDivider />

        <MobileDivider />
        <Grid item xs={12}>
          <RenderArrayOrString content={headerDetails.summary} />
        </Grid>
      </StyledGrid>
    </>
  );
}

const RenderArrayOrString = ({
  content,
  sub,
  ...restProps
}: {
  content: (string | string[])[] | string;
  sub?: true;
} & TypographyProps) => {
  return (
    <>
      {Array.isArray(content) && typeof content !== "string"
        ? content.map((cont) => (
            <Fragment key={cont.toString()}>
              {Array.isArray(cont) && typeof cont !== "string" ? (
                <ul>
                  <RenderArrayOrString sub content={cont} />
                </ul>
              ) : sub ? (
                <li>
                  <Typography {...restProps}>{cont.toString()}</Typography>
                </li>
              ) : (
                <Typography {...restProps}>{cont.toString()}</Typography>
              )}
            </Fragment>
          ))
        : content}
    </>
  );
};

const MobileDivider = ({ sx, ...props }: GridProps) => {
  return (
    <Grid
      item
      sx={{
        display: {
          xs: "block",
          sm: "none",
        },
        pt: `0px !important`,
        ...sx,
      }}
      xs={12}
      {...props}
    >
      <Divider />
    </Grid>
  );
};
