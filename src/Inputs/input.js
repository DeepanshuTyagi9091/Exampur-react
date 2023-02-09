import React from "react";

const Input = (props) => {
  return (
    <div>
      <input
        name={props.name}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        className={props.className}
        style={{ padding: props.padding, width: props.width, marginTop:props.mt,borderBottom:props.mb }}
        onChange={props.onChange}
      />
      {props.children}
    </div>
  );
};

export default Input;
