import React from "react";
// import './Modal.css'
export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        right: 0,
        marginBottom: "0.5em",
        marginRight: "0.5em",
        borderRadius: "10px",
        padding: "0.5em 1em 0.5em 1em",
        borderColor: "#fff",
        borderStyle: "solid",
        borderWidth: "1px",
        width: "auto",
        minWidth: "20em",
      }}
    >
      <div style={{ padding: "0.5em 0.5em 0.5em 0em" }}>
        <label>Place here your poll</label>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1em",
          marginBottom: "0.5em",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "0.5em",
            marginLeft: "0.5em",
          }}
        >
          <input type={"radio"} name="radio" value="1" />
          <label>1</label>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "0.5em",
            marginLeft: "0.5em",
          }}
        >
          <input type={"radio"} name="radio" value="2" />
          <label>2</label>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "0.5em",
            marginLeft: "0.5em",
          }}
        >
          <input type={"radio"} name="radio" value="3" />
          <label>3</label>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "0.5em",
            marginLeft: "0.5em",
          }}
        >
          <input type={"radio"} name="radio" value="4" />
          <label>4</label>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "0.5em",
            marginLeft: "0.5em",
          }}
        >
          <input type={"radio"} name="radio" value="5" />
          <label>5</label>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "0.5em",
            marginLeft: "0.5em",
          }}
        >
          <input type={"radio"} name="radio" value="6" />
          <label>6</label>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "0.5em",
            marginLeft: "0.5em",
          }}
        >
          <input type={"radio"} name="radio" value="7" />
          <label>7</label>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "0.5em",
            marginLeft: "0.5em",
          }}
        >
          <input type={"radio"} name="radio" value="8" />
          <label>8</label>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "0.5em",
            marginLeft: "0.5em",
          }}
        >
          <input type={"radio"} name="radio" value="9" />
          <label>9</label>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "0.5em",
            marginLeft: "0.5em",
          }}
        >
          <input type={"radio"} name="radio" value="10" />
          <label>10</label>
        </div>
      </div>
    </div>
  );
};

export default Button;
