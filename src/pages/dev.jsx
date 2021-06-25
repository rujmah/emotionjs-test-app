import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { Box } from "../components/Box";

const item = css`
  padding: 0.25rem;
`;

const ListContainer = styled.div`
  color: #00c;
  margin: 0;

  z-index: 1060;
  width: 100vw;
  height: 100vh;

  padding: 0.25rem;
  background-color: wheat;
  font-family: Arial;
`;

const ListTitle = styled.h3`
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

const Item = ({ index, children }) => {
  return index % 2 == 0 ? <Even>{children}</Even> : <Odd>{children}</Odd>;
};

const List = ({ list }) => {
  return (
    <ListContainer>
      <ListTitle>List</ListTitle>

      {list.map((item, i) => (
        <Item key={item.id} index={i}>
          {item.title}
        </Item>
      ))}

      <Box>This is a box</Box>
    </ListContainer>
  );
};

export default List;

export async function getStaticProps() {
  const list = [
    { id: "001", title: "Test Yeast" },
    { id: "401", title: "Jam jars with screws in" },
    { id: "041", title: "Yams!" },
    { id: "021", title: "Sushi is the only thing that I like" }
  ];
  return { props: { list } };
}
