import React from "react";

export const Display = ({ studentsList }) => {
  console.log(studentsList);
  return (
    <div>
      {studentsList.map((st, i) => (
        <h2>
          {st.fName}
          {st.lName}
        </h2>
      ))}
      ;
    </div>
  );
};
