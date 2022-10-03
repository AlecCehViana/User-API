import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Form = ({ addUser, userSelected, updateUser, deselectUser }) => {
const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (userSelected) {
      reset(userSelected);
    }
  }, [userSelected]);

  const submit = (data) => {
console.log(data);
    if (userSelected) {
      updateUser(data);
    } else {
      addUser(data);
    }
  };

  const clear = () => {
    reset({
      first_name: "",
      last_name: "",
      email: "",
      birthday: "",
      passsword: ""
    });
    deselectUser();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="input-container">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register("first_name")} />
      </div>
      <div className="input-container">
        <label htmlFor="last-name">Last Name </label>
        <input type="text" id="last-name" {...register("last_name")} />
      </div>
      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" {...register("email")} />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password</label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <div className="input-container">
        <label htmlFor="birthday">Date of Birth</label>
        <input type="date" id="birthday" {...register("birthday")} />
      </div>
  
      <button className="submit">{userSelected ? "update" : "create"}</button>
      <button type="button" onClick={clear}>
        Clear
      </button>
    </form>
  );
};

export default Form;
