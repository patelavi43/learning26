import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const FormDemo4 = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState({});
  const [isSubmited, setisSubmited] = useState(false);

  const submitHandler = (formData) => {
    setData(formData);
    setisSubmited(true);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>FormDemo4 (Job Details)</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>EXPECTED CTC (LPA)</label>
          <input
            type="number"
            step="0.5"
            {...register("expectedCtc")}
          />
        </div>
        <div>
          <label>RESUME FILE</label>
          <input type="file" {...register("resume")} />
        </div>
        <div>
          <label>JOINING MONTH</label>
          <input type="month" {...register("joiningMonth")} />
        </div>
        <div>
          <label>INTERVIEW DATETIME</label>
          <input
            type="datetime-local"
            {...register("interviewDateTime")}
          />
        </div>
        <div>
          {/* hidden field, not visible but counted as field */}
          <input
            type="hidden"
            value="campus"
            {...register("source")}
          />
        </div>
        <div>
          <button type="submit">Submit Demo4</button>
        </div>
      </form>

      {isSubmited && (
        <div>
          <h1>OUTPUT</h1>
          <h2>CTC = {data.expectedCtc}</h2>
          <h2>Joining Month = {data.joiningMonth}</h2>
        </div>
      )}
    </div>
  );
};
