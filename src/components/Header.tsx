import {
  LocationOnOutlined,
  AlternateEmail,
  SmartphoneOutlined,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Grid,
  GridProps,
  Link,
  SvgIcon,
  Typography,
} from "@mui/material";
// import React from "react";
import { Fragment } from "react";
// import GitHub from "@public/icons/github.svg";
// import LinkedIn from "@public/icons/linkedin.svg";
import { TypographyProps } from "@mui/system";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";

// const DynamicIcon = ({ param }: { param: string }) =>
//   dynamic(() => {
//     if (["github", "linkedin"].includes(param)) {
//       return import("@public/icons/" + param);
//     } else {
//       return import("@mui/icons-material/" + param);
//     }
//   });

type GenericInformation = {
  title: string;
  description: string;
  // icon?: SvgIconComponent | JSX.Element;
  // icon?: React.ElementType;
  icon: React.ElementType;
  iconString: string;
};
type HeaderDetails = {
  name: string;
  summary: (string | string[])[];
  title: string;
  personalInformation: GenericInformation[];
  profiles: GenericInformation[];
};
const headerDetails: HeaderDetails = {
  name: "Janeo Miguel Tiongson",
  title: "Lead Software Engineer",
  summary: [
    "Passionate and progress driven Software Engineer, committed to balance between Developer and Customer Experience, highly active in Development Communities like React.js PH and Next.js and always keeps up to date to new innovations and technology releases",
    "With hands-on experience in Software Engineering and Project Management, Development Operations, Database Management and Software Architecture. With  notable projects in:",
    [
      "Enterprise level Financial Technology Systems ( E-Wallet, Multilevel Marketing, Payment Processing and Analytics )",
      "Movie Streaming System ( Movie and TV Shows Database and File Servers, Movie Transmuxing and Transcoding, Streaming with Adaptive Http Live Streaming and some other prototypes )",
      "Open Source Projects ( E-Mail Marketing Mailer, Blockchain Game Monitoring App )",
      "Boilerplate Repositories and Utility Libraries for Web Client and Server Frameworks",
    ],
  ],
  personalInformation: [
    {
      title: "Email",
      description: "rakiabodyjm@gmail.com",
      icon: AlternateEmail,
      iconString: "AlternateEmail",
    },
    {
      title: "Phone Number",
      description: "+63 949 846 0475",
      icon: SmartphoneOutlined,
      iconString: "SmartphoneOutlined",
    },
    {
      title: "Location",
      description: "Quezon City, PH",
      icon: LocationOnOutlined,
      iconString: "LocationOnOutlined",
    },
  ],
  profiles: [
    {
      title: "GitHub",
      description: "github.com/rakiabodyjm",
      icon: GitHub,
      iconString: "github",
      // icon: () => (
      //   <svg
      //     height="32"
      //     aria-hidden="true"
      //     viewBox="0 0 16 16"
      //     version="1.1"
      //     width="32"
      //     data-view-component="true"
      //     className="octicon octicon-mark-github v-align-middle"
      //   >
      //     <path
      //       fillRule="evenodd"
      //       d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
      //     ></path>
      //   </svg>
      // ),
    },
    {
      title: "LinkedIn",
      description: "linkedin.com/in/janeomigueltiongson",
      icon: LinkedIn,
      iconString: "linkedin",
      // icon: () => (
      //   <svg
      //     xmlns="http://www.w3.org/2000/svg"
      //     viewBox="0 0 24 24"
      //     data-supported-dps="24x24"
      //     fill="currentColor"
      //     className="mercado-match"
      //     width="24"
      //     height="24"
      //     focusable="false"
      //   >
      //     <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
      //   </svg>
      // ),
    },
  ],
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
export default function Header() {
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
          {headerDetails.personalInformation.map(({ icon: Icon, ...item }) => (
            <Box
              sx={{
                mb: 2,
              }}
              key={item.title}
            >
              <Typography className="header-field" variant="body2">
                <Icon
                  sx={{
                    fontSize: "inherit",
                  }}
                />
                {item.title}:{" "}
              </Typography>
              <Typography variant="body2">{item.description}</Typography>
            </Box>
          ))}
        </Grid>
        <MobileDivider />
        <Grid item xs={12} sm={6}>
          {headerDetails.profiles.map(({ icon: Icon, ...item }) => (
            <Box
              sx={{
                mb: 2,
              }}
              key={item.title}
            >
              <Typography className="header-field" variant="body2">
                {/* <SvgIcon
                  sx={{
                    fontSize: "inherit",
                  }}
                > */}
                <Icon
                  style={{
                    height: theme.typography.body2.fontSize,
                    // fill: theme.typography.body2.color || "white",
                    fill: "currentColor",
                  }}
                />
                {/* </SvgIcon> */}
                {item.title}:{" "}
              </Typography>
              <Link
                // onClick={(e) => {
                //   e.preventDefault();
                //   router.push(item.description);
                // }}
                // component="a"
                href={`https://${item.description}`}
                sx={{
                  display: "block",
                  color: "currentColor",
                }}
                variant="body2"
              >
                {item.description}
              </Link>
            </Box>
          ))}
        </Grid>

        <MobileDivider />
        <Grid item xs={12}>
          {/* <Typography variant="body2"></Typography> */}
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
  content: (string | string[])[];
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
                  <Typography {...restProps}>{cont}</Typography>
                </li>
              ) : (
                <Typography {...restProps}>{cont}</Typography>
              )}
            </Fragment>
          ))
        : { content }}
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
