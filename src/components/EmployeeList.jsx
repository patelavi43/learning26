// src/components/EmployeeList.jsx
import React from "react";
import { SubEmployeeList } from "./SubEmployeeList";

export const EmployeeList = ({ title, company, employees }) => {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Employees</h1>
      <h2 className="text-center">EmployeeList</h2>

      <h3 className="text-center">{title}</h3>
      <h3 className="text-center">{company.name}</h3>
      <h3 className="text-center">{company.year}</h3>

      <table className="table table-striped mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <SubEmployeeList employees={employees} />
    </div>
  );
};
