import React, { useEffect, useState } from "react";
import EditPerson from "./EditPerson.jsx";
import InputAddPerson from "./InputAddPerson.jsx";
import SearchbyEmail from "./SearchbyEmail.jsx";
import "./Table.css";

const Table = () => {
  const [search, setSearch] = useState("");
  const [edit, setEdit] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [statusFilter, setStatusFilter] = useState("");

  const handleSortByName = () => {
    const sorted = [...data].sort((a, b) => {
      return sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
    setData(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleChange = (event) => {
    console.log("searching...");
    setSearch(event.target.value);
  };

  const [data, setData] = useState([]);

  const initialData = [
    {
      id: 1,
      name: "Anna",
      birthday: "10.01.2020",
      email: "anna@hotmail.com",
      status: "Active",
    },
    {
      id: 2,
      name: "Panos",
      birthday: "10.01.2020",
      email: "panos@hotmail.com",
      status: "Pending",
    },
    {
      id: 3,
      name: "Vaso",
      birthday: "16.07.1990",
      email: "vasothom@hotmail.com",
      status: "Blocked",
    },
  ];
  useEffect(() => {
    setData(initialData);
  }, []);
  const addPerson = (newPerson) => {
    const highestId = Math.max(...data.map((person) => person.id));
    const nextId = highestId + 1;
    const personWithId = { ...newPerson, id: nextId };
    setData([...data, personWithId]);
  };

  const filterdata = data.filter((el) =>
    el.email.toLowerCase().includes(search.toLowerCase())
  );
  const filteredData = filterdata.filter(
    (val) => statusFilter === "" || val.status === statusFilter
  );

  const deleteOne = (id) => {
    setData(data.filter((el) => el.id !== id));
  };

  const updateOne = (id) => {
    setEdit(id);
  };

  const handleStatusFilter = (event) => {
    setStatusFilter(event.target.value);
  };

  return (
    <div>
      <InputAddPerson addPerson={addPerson} edit={edit} setEdit={setEdit} />
      <SearchbyEmail handleChange={handleChange} />

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th onClick={handleSortByName}>
              Name {sortOrder === "asc" ? " 🔽" : " 🔼"}
            </th>
            <th>Birthday</th>
            <th>Email</th>
            <th>
              Status
              <select
                name="statusFilter"
                value={statusFilter}
                onChange={handleStatusFilter}
              >
                <option value="all">All</option>
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Blocked">Blocked</option>
              </select>
            </th>
          </tr>
        </thead>

        {filteredData.length > 0 ? (
          <tbody key="data">
            {filteredData.map((val) =>
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
                    <button onClick={() => updateOne(val.id)} className="edit">
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteOne(val.id)}
                      className="remove"
                    >
                      Remove
                    </button>
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
