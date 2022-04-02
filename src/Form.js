import React, { useState } from "react";

//control input
//uncontrol input

const initialState = {
  fname: "",
  lname: "",
};

export const Form = ({ addToTheList }) => {
  // capture data from input
  const [frmData, setFrmData] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setFrmData({ ...frmData, [name]: value });
    // addToTheList(frmData);
    console.log(frmData);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addToTheList(frmData);
    // alert ("Form Submitted");
  };

  return (
    <form on onSubmit={handleOnSubmit}>
      <input
        type="text"
        name="fname"
        placeholder="first name"
        onChange={handleOnChange}
      />
      <input
        type="text"
        name="lname"
        placeholder="last name"
        onChange={handleOnChange}
      />
      <input type="submit" />
    </form>
  );
};
