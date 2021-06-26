import { ListContainer, ListTitle, Item } from "./List.styles";

export const List = ({ list }) => {
  return (
    <ListContainer>
      <ListTitle>List</ListTitle>

      {list.map((item, i) => (
        <Item key={item.id} index={i}>
          {item.title}
        </Item>
      ))}
    </ListContainer>
  );
};
