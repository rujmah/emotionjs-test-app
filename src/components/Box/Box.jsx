import React from "react";
import { BoxContainer } from "./Box.styles";

export const Box = ({ bgColor, color, children }) => {
  return (
    <BoxContainer style={{ color, backgroundColor: bgColor }}>
      {children}
    </BoxContainer>
  );
};
