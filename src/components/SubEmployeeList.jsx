// src/components/SubEmployeeList.jsx
import React from "react";

export const SubEmployeeList = ({ employees }) => {
  return (
    <div className="text-center mt-4">
      <h2>SubEmployeeList</h2>
      {employees.map((emp) => (
        <p key={emp.id}>
          {emp.id} - {emp.name} - {emp.age}
        </p>
      ))}
    </div>
  );
};
