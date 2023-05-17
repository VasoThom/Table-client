import React, { useState } from "react";
import EditPerson from "./EditPerson.jsx";
import InputAddPerson from "./InputAddPerson.jsx";
import SearchbyEmail from "./SearchbyEmail.jsx";

const Table = () => {
  const [search, setSearch] = useState("");
  const [edit, setEdit] = useState(false);

  const handleChange = (event) => {
    console.log("searching...");
    setSearch(event.target.value);
  };

  const [data, setData] = useState([
    {
      id: 1,
      name: "Anna",
      birthday: "10.01.2020",
      email: "anna@hotmail.com",
      status: "Active",
    },
    {
      id: 2,
      name: "Ella",
      birthday: "10.01.2020",
      email: "ellarotary@hotmail.com",
      status: "Pending",
    },
    {
      id: 3,
      name: "Vaso",
      birthday: "16.07.1990",
      email: "vasothom@hotmail.com",
      status: "Blocked",
    },
  ]);

  const addPerson = (newPerson) => {
    const highestId = Math.max(...data.map((person) => person.id));
    const nextId = highestId + 1;
    const personWithId = { ...newPerson, id: nextId };
    setData([...data, personWithId]);
  };

  const filterdata = data.filter((el) =>
    el.email.toLowerCase().includes(search.toLowerCase())
  );

  const deleteOne = (id) => {
    setData(data.filter((el) => el.id !== id));
  };

  const updateOne = (id) => {
    setEdit(id);
  };

  return (
    <div>
      <InputAddPerson addPerson={addPerson} edit={edit} setEdit={setEdit} />
      <SearchbyEmail handleChange={handleChange} />

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Birthday</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>

        {filterdata.length > 0 ? (
          <tbody key="data">
            {filterdata.map((val) =>
              edit === val.id ? (
                <EditPerson
                  key={val.id}
                  val={val}
                  data={data}
                  setData={setData}
                />
              ) : (
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.birthday}</td>
                  <td>{val.email}</td>
                  <td>{val.status}</td>
                  <td>
                    <button onClick={() => updateOne(val.id)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => deleteOne(val.id)}>Remove</button>
                  </td>
                </tr>
              )
            )}
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
