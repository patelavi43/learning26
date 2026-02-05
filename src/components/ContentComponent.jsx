import React from "react";

export default function ContentComponent() {
  const person = {
    name: "Virat Kohli",
    profession: "Indian Cricketer",
    age: 35,
    country: "India",
    achievements: "Former Indian Team Captain",
  };

  return (
    
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid #ddd",
        borderRadius: "12px",
        width: "350px",
        padding: "25px",
        textAlign: "center",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHkz-CtfvMGgRgdHNQsxEMfsV37rycmXyYn4jbyBlVnEZZ-edxrgDlTl1Rbfo6teEkc2zsRuzlDUSc71RWUp5JtoegBcvnZPuUMwRmkDw&s=10"
        alt="Virat Kohli"
        width="200"
        height="250"
        style={{ borderRadius: "10px", marginBottom: "15px" }}
      />

      <h2>{person.name}</h2>
      <p><strong>Profession:</strong> {person.profession}</p>
      <p><strong>Age:</strong> {person.age}</p>
      <p><strong>Country:</strong> {person.country}</p>
      <p><strong>Achievement:</strong> {person.achievements}</p>
    </div>
  );
}
