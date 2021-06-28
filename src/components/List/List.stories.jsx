import React from "react";
import { List } from "./List";

export default {
  title: "Components/List",
  component: List
};

const Template = args => <List {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  list: [
    { id: "494", title: "Roger Rabbit" },
    { id: "497", title: "Jessica Rabbit" },
    { id: "498", title: "The other chap" }
  ]
};
