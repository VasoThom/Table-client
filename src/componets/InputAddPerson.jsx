import React, { useState } from "react";

const InputAddPerson = ({ addPerson, setEdit, edit }) => {
  const initial = {
    name: "",
    birthday: "",
    email: "",
    status: "",
  };
  const [values, setValues] = useState(initial);

  const onChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);

    addPerson(values);
    // //epanafero tn form .. .thn adeiazo
    // setValues(initial);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={values.name}
        onChange={onChange}
        placeholder="name"
        name="name"
      />

      <input
        type="date"
        value={values.birthday}
        onChange={onChange}
        name="birthday"
      />
      <input
        type="email"
        onChange={onChange}
        value={values.email}
        placeholder="email"
        name="email"
      />
      <select name="status" onChange={onChange} value={values.status}>
        <option value="">Status</option>
        <option value="Active">Active</option>
        <option value="Pending">Pending</option>
        <option value="Blocked">Blocked</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
};

export default InputAddPerson;
