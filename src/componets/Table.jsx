import React, { useState } from "react";
import InputAddPerson from "./InputAddPerson.jsx";
import SearchbyEmail from "./SearchbyEmail.jsx";

const Table = () => {
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    console.log("searching...");
    setSearch(event.target.value);
  };
  const data = [
    {
      name: "Vaso",
      birthday: "10.01.2020",
      email: "vasothom@hotmail.com",
      status: "Active",
    },
    {
      name: "Vaso",
      birthday: "10.01.2020",
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

  const filterdata = data.filter((el) =>
    el.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <InputAddPerson />
      <SearchbyEmail handleChange={handleChange} />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Birthday</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>

        {filterdata.length > 0 ? (
          <tbody key="data">
            {filterdata.map((val, key) => {
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
          </tbody>
        ) : (
          <tbody key="empty">
            <tr>
              <td colSpan="4">{event.target.value} not found</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default Table;
