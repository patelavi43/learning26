import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const FormDemo3 = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState({});
  const [isSubmited, setisSubmited] = useState(false);

  const submitHandler = (formData) => {
    setData(formData);
    setisSubmited(true);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>FormDemo3 (Contact Preferences)</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>COUNTRY</label>
          <select {...register("country")}>
            <option value="">Select country</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
          </select>
        </div>
        <div>
          <label>AVAILABLE TIME</label>
          <input type="time" {...register("availableTime")} />
        </div>
        <div>
          <label>PORTFOLIO URL</label>
          <input type="url" {...register("portfolioUrl")} />
        </div>
        <div>
          <label>WHATSAPP NUMBER</label>
          <input type="tel" {...register("whatsapp")} />
        </div>
        <div>
          <label>CONTACT PRIORITY</label>
          <input
            type="range"
            min="1"
            max="10"
            {...register("priority")}
          />
        </div>
        <div>
          <button type="submit">Submit Demo3</button>
        </div>
      </form>

      {isSubmited && (
        <div>
          <h1>OUTPUT</h1>
          <h2>Country = {data.country}</h2>
          <h2>Priority = {data.priority}</h2>
        </div>
      )}
    </div>
  );
};
