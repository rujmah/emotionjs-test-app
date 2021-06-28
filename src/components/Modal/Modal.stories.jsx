import React from "react";
import { Modal } from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal
};

const Template = args => <Modal {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  show: true,
  closeCallback: () => false,
  children: <div>Hammer Time</div>
};
