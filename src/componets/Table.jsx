import React from "react";
import SearchbyEmail from "./SearchbyEmail.jsx";

const Table = () => {
  const data = [
    {
      name: "Vaso",
      birthday: "",
      email: "vasothom@hotmail.com",
      status: "Active",
    },
    {
      name: "Vaso",
      birthday: "",
      email: "vasothom@hotmail.com",
      status: "Pending",
    },
    {
      name: "Vaso",
      birthday: "16.07.1990",
      email: "vasothom@hotmail.com",
      status: "Blocked",
    },
  ];
  return (
    <div>
      <SearchbyEmail />
      <table>
        <tr>
          <th>Name</th>
          <th>birthday</th>
          <th>email</th>
          <th>status</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.birthday}</td>
              <td>{val.email}</td>
              <td>{val.status}</td>
              <td>
                <button>Edit</button>
              </td>
              <td>
                <button>Remove</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
