import { withTheme } from "@emotion/react";
import React from "react";
import { Box } from "./Box";

export default {
  title: "Components/Box",
  component: Box
};

const Template = args => <Box {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  bgColor: "white",
  children: <div>Test Box</div>
};

export const Orange = Template.bind({});

Orange.args = {
  color: "#fdc15d",
  children: <div>Test Box</div>
};

export const BlueBackground = Template.bind({});

BlueBackground.args = {
  bgColor: "#5d99fd",
  color: "white",
  children: <div>Test Box</div>
};
