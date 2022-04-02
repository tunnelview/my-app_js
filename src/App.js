import React from "react";
import { Display } from "./Display";
import { Form } from "./Form";

export const App = () => {
  const addToTheList = (frmData) => {
    console.log(frmData);
  };
  return (
    <div>
      <Form addToTheList={addToTheList} />
      <hr />
      <Display />
    </div>
  );
};

export default App;
