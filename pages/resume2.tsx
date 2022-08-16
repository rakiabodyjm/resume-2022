import { gql, useQuery } from "@apollo/client";
import { Grid, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SideBar from "src/components/common/SideBar";
import HeaderGraphQL from "src/components/HeaderGraphQL";
import { PersonalInformation } from "src/graphql/resolvers/profile";

const GET_PROFILE = gql`
  query GetProfile {
    profile {
      name
      title
      summary
      genericData {
        title
        description
        iconString
      }
      profiles {
        title
        description
        iconString
      }
    }
  }
`;
const ResumeGrid = styled(Grid)((theme) => ({}));
export default function Resume2({}) {
  const { loading, error, data } = useQuery<{ profile: PersonalInformation }>(
    GET_PROFILE
  );

  if (loading) {
    return (
      <Typography
        noWrap
        variant="h4"
        sx={{
          margin: "auto",
        }}
      >
        Loading...
      </Typography>
    );
  }
  if (data) {
    return (
      <>
        {/* <ResumeGrid container spacing={2}>
        <SideBar sx={{}} />
      </ResumeGrid> */}
        <HeaderGraphQL headerDetails={data.profile} />
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </>
    );
  }
}
