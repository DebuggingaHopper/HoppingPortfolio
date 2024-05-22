import React from "react";
import { IconName } from "boxicons";

{
  /* 
   This allows to get the name,size, and color for the box icons we would like to import
   This allows us to be flexible with it so that we can import various icons without issue
  */
}
interface IconProps {
  name: IconName;
  size?: string;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = "24px", color = "" }) => {
  return <i className={`bx ${name}`} style={{ fontSize: size, color }} />;
};

export default Icon;
