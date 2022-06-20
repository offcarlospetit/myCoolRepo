import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        background: "red",
        right: 0,
        width: "30%",
        height: "20%",
        marginBottom: "0.5em",
        marginRight: "0.5em",
        borderRadius: "10px",
      }}
    >
      <h6>Como evaluas la experiencia en xxxxx </h6>
      <div>
        <input type="radio" name="radio" value="1" />
        <label>1</label>
      </div>
    </div>
  );
};

export default Button;
