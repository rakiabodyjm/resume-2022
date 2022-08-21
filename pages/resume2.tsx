import { gql, useQuery } from "@apollo/client";
import { Grid, styled, Typography } from "@mui/material";
import HeaderGraphQL from "src/components/HeaderGraphQL";
import ResumeTemplate1 from "src/components/resume-template-1";
import { PersonalInformation } from "src/graphql/resolvers/profile";

const ResumeGrid = styled(Grid)((theme) => ({}));
export default function Resume2({}) {
  return (
    <>
      <ResumeTemplate1 />
    </>
  );
}
