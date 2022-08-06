import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";

type Sections1Props = {
  image: string;
  text: string;
  title?: string;
};
export default function Sections1({
  image,
  text,
  title,
  ...restProps
}: Sections1Props & React.PropsWithChildren) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: text,
          }}
          style={{
            width: "50%",
          }}
        />
        <div
          style={{
            position: "relative",
            minHeight: 400,
            width: "50%",
          }}
        >
          <Image
            src={image}
            layout="fill"
            alt="Loading..."
            objectFit="cover"
            objectPosition={"50% 50%"}
          />
        </div>
      </Box>
    </>
  );
}
