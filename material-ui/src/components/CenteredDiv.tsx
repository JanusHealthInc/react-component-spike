import styled from "@emotion/styled";

export const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
`;
