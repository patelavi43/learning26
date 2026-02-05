import React from "react";
import { useParams, Link } from "react-router-dom";

export const TeamDetail = () => {
  const { teamName } = useParams();

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Team Detail Page</h2>
      <h3>Playing {teamName.toUpperCase()}...</h3>
    </div>
  );
};