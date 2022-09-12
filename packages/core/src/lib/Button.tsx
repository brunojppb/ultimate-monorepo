import React from "react";

type UltimateButtonProps = {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const style = {
  border: "1px solid black",
  borderRadius: "3px",
  padding: "14px",
  fontWeight: "bold",
  fontSize: "25px",
};

export function Button({ children, onClick }: UltimateButtonProps) {
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
}
