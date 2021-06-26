import { css } from "@emotion/react";
import styled from "@emotion/styled";

const item = css`
  padding: 0.25rem;
`;
export const ListContainer = styled.div`
  color: #00c;
  margin: 0;

  // width: 100vw;
  // height: 100vh;

  padding: 0.25rem;
  background-color: wheat;
  font-family: Arial;
`;
export const ListTitle = styled.h3`
  font-size: 2rem;
`;
const Odd = styled.div`
  ${item};
  background-color: rgba(135, 135, 13, 0.5);
`;
const Even = styled.div`
  ${item};
  background-color: rgba(135, 133, 222, 0.5);
`;
export const Item = ({ index, children }) => {
  return index % 2 == 0 ? <Even>{children}</Even> : <Odd>{children}</Odd>;
};
