import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
       name={props.name} 
      className={props.className}
      text={props.text}
      type={props.type}
      style={{padding:props.padding,width:props.width,backgroundColor:props.backgroundColor}}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
