import React from "react";

const EditPerson = ({ val, data, setData }) => {
  const handleChange = (event) => {
    const newData = data.map((el) =>
      el.id === val.id ? { ...el, [event.target.name]: event.target.value } : el
    );
    setData(newData);
  };
  return (
    <tr key={val.id}>
      <td>{val.id}</td>

      <td>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={val.name}
        />
      </td>
      <td>
        <input
          type="date"
          name="birthday"
          onChange={handleChange}
          value={val.birthday}
        />
      </td>
      <td>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={val.email}
        />
      </td>
      <td>
        <select name="status" onChange={handleChange} value={val.status}>
          <option value="">Status</option>
          <option value="Active">Active</option>
          <option value="Pending">Pending</option>
          <option value="Blocked">Blocked</option>
        </select>
      </td>
      <td>
        <button type="submit">Update</button>
      </td>
    </tr>
  );
};

export default EditPerson;
