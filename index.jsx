import React, { useState } from "react";
const TaskUser = () => {
  const [people, setPeople] = useState([
    { id: 1, name: "Parveen" },
    { id: 2, name: "Sahil" },
    { id: 3, name: "Gurpanth" },
  ]);

  const [deletePerson, setDeletePerson] = useState(null);

  const handleDelete = (person) => {
    setDeletePerson(person);
  };

  const handleConfirmDelete = () => {
    const updatedPeople = people.filter(
      (person) => person.id !== deletePerson.id
    );
    setPeople(updatedPeople);
    setDeletePerson(null);
  };

  const handleCancelDelete = () => {
    setDeletePerson(null);
  };

  return (
    <div>
      <h2>People List</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            {person.name}
            <button onClick={() => handleDelete(person)} className="relative">
              Delete
            </button>
          </li>
        ))}
      </ul>

      {deletePerson && (
        <div className="absolute top-10 left-36  flex items-cente justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p className="mb-4">
              Are you sure you want to delete {deletePerson.name}?
            </p>
            <div className="flex justify-end">
              <button
                className="mr-2 px-4 py-2 bg-red-500 text-white rounded"
                onClick={handleConfirmDelete}
              >
                Yes
              </button>
              <button
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
                onClick={handleCancelDelete}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskUser;
