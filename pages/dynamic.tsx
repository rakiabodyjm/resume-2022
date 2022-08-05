import Sections1 from "src/components/common/Sections1";
import ReactDOMServer from "react-dom/server";
import { CssBaseline, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "src/theme";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import createEmotionCache from "src/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";

// const cache = createEmotionCache();

// const { extractCriticalToChunks, constructStyleTagsFromChunks } =
//   createEmotionServer(cache);

// const StyledBox = styled(Box)((theme) => ({
//   p: {
//     textIndent: 32,
//     mt: 2,
//   },
// }));

// const stringHtml = ReactDOMServer.renderToString(
//   // <CacheProvider value={cache}>
//   <ThemeProvider theme={theme()}>
//     <CssBaseline />
//     <Box
//       sx={{
//         "& > p": {
//           textIndent: 32,
//           mt: 2,
//         },
//       }}
//     >
//       <Typography variant="body1">
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, eos
//         laboriosam soluta eaque natus asperiores odio libero enim ullam
//         voluptatum excepturi eligendi quae minima sint molestiae unde nobis
//         fugiat delectus.
//       </Typography>
//       <Typography variant="body1">
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
//         ullam. Eum iure, ducimus reprehenderit voluptas, in vero quibusdam omnis
//         eaque facere eos illum ullam laborum ab nobis ut, nostrum cum?
//       </Typography>
//     </Box>
//   </ThemeProvider>
//   // </CacheProvider>
// );

// const emotionChunks = extractCriticalToChunks(stringHtml);
// const emotionCss = constructStyleTagsFromChunks(emotionChunks);
// console.log("emotioncss", emotionCss);

// export default function DynamicPage() {
//   return (
//     <>
//       <Sections1
//         title={"Hello World Application"}
//         text={}
//         image={
//           "/api/external-image?url=https://cdn.ttgtmedia.com/visuals/digdeeper/1.jpg"
//         }
//       />
//     </>
//   );
// }

export default function DynamicPage() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: 90,
          justifyContent: "space-between",
          position: "relative",
          // backgroundAttachment: "fixed",
          background: "inherit",
          overflow: "hidden",
          borderRadius: "4px",
          ":before": {
            content: "''",
            position: "absolute",
            zIndex: -1,
            // background: "#415a77",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundImage: `url('https://www.oasislasvegasrvresort.com/UserFiles/Image/hpbanner/feature5.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "100% 75%",
            filter: "saturate(100%)",
          },
          ":after": {
            content: "''",
            position: "absolute",
            zIndex: -1,
            top: -8,
            left: -8,
            bottom: -8,
            right: -8,
            // filter: "blur(8px)",
            // boxShadow: "inset 0 0 10000px #1b263b",
            filter: "blur(4px)",
            backdropFilter: "blur(4px)",
          },
        }}
      >
        <Box
          sx={{
            backgroundImage:
              "url(https://www.oasislasvegasrvresort.com/images/logo-main2.png)",
            width: 180,
            backgroundPosition: "50% 0%",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "50%",
            justifyContent: "space-between",
            p: 2,
          }}
        >
          {["Home", "About", "Contact", "Blog", "Reservations"].map((menu) => (
            <Typography
              sx={{
                ":hover": {
                  color: "#ff9f1c",
                  cursor: "pointer",
                  transition: (theme) =>
                    theme.transitions.create("color", {
                      duration: "0.3s",
                      easing: theme.transitions.easing.easeInOut,
                    }),
                  // boxShadow: "#ff9f1c",
                  // boxShadow: (theme) => theme.shadows[15],
                  // textShadow: "0 0 4px 4px #ff9f1c",
                },
              }}
              key={menu}
              variant="h6"
            >
              {menu}
            </Typography>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          background: "#023e8a",
          mt: 2,
          minHeight: 400,
          p: 2,
          borderRadius: "4px",
        }}
      >
        <Typography variant="h4" fontWeight={600}>
          This is a title
        </Typography>
      </Box>

      {/* <Box
        sx={{
          background: "#e0e1dd",
        }}
      >
        <Sections1
          title={"Hello World"}
          text={`<p style='text-indent: 24px;'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab doloribus fuga adipisci doloremque laboriosam dolorem ducimus voluptas. Suscipit adipisci expedita modi atque! Quos architecto consectetur nihil ut animi, ullam esse.</p>
      `}
          image={
            "/api/external-image?url=https://cdn.ttgtmedia.com/visuals/digdeeper/1.jpg"
          }
        />
      </Box> */}
    </>
  );
}
