import React from "react";

//this title and color on the button's argument is destructuring
export const Button = ({ title, color }) => {
  //   console.log(props);
  return <button style={{ background: color }}>{title}</button>;
};

// rafce
