import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const FormDemo2 = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState({});
  const [isSubmited, setisSubmited] = useState(false);

  const submitHandler = (formData) => {
    setData(formData);
    setisSubmited(true);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>FormDemo2 (Account + Bio)</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>EMAIL</label>
          <input type="email" {...register("email")} />
        </div>
        <div>
          <label>PASSWORD</label>
          <input type="password" {...register("password")} />
        </div>
        <div>
          <label>ABOUT YOU</label> <br />
          <textarea
            rows="3"
            cols="30"
            placeholder="short bio"
            {...register("about")}
          />
        </div>
        <div>
          <label>FAVOURITE COLOR</label>
          <input type="color" {...register("favColor")} />
        </div>
        <div>
          <label>BIRTH DATE</label>
          <input type="date" {...register("birthDate")} />
        </div>
        <div>
          <button type="submit">Submit Demo2</button>
        </div>
      </form>

      {isSubmited && (
        <div>
          <h1>OUTPUT</h1>
          <h2>Email = {data.email}</h2>
          <h2>Birth Date = {data.birthDate}</h2>
        </div>
      )}
    </div>
  );
};
