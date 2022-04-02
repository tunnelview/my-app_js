import React, { useState } from "react";
import { Display } from "./Display";
import { Form } from "./Form";

const App = () => {
  const [studentsList, setStudentsList] = useState([]);
  const addToTheList = (frmData) => {
    setStudentsList([...studentsList, frmData]);
    console.log(studentsList);
  };

  return (
    <div>
      <Form addToTheList={addToTheList} />
      <hr />
      <Display studentsList={studentsList} />
    </div>
  );
};

export default App;
