import React from "react";

const InputAddPerson = () => {
  return (
    <div>
      <form action="">
        <input type="text" placeholder="name" name="name" />
        <input type="date" name="date" id="" />
        <input type="email" placeholder="email" name="email" />
        <select name="status" id="">
          <option value="">Status</option>
          <option value="active">Active</option>
          <option value="pending">Pending</option>
          <option value="blocked">Blocked</option>
        </select>
        <button>Add</button>
      </form>
    </div>
  );
};

export default InputAddPerson;
