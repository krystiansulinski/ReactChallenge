// Step 1.
// Use existing fetchDepartments function to get a list of ids
//  async fetchDepartments([ids, ...]) -> [{id: 1, name: 'Support'}, ...]

// Step 2.
// Clean up departments data
// * Remove entries that appear more than once
// * Remove nulls

// Step 3.
// Render a list of departments, each department should have an associated checkbox
// * Only one checkbox can be selected at a time.
// * It should be possible to de-select all items.
// * The selected item should have a red border

// Step 4:
// Convert to hook based

import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { getDepartmentIds, fetchDepartments } from "./departments";
import { Department } from "./Department";

function DepartmentList() {
  const [depts, setDepts] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    fetchDepartments(getDepartmentIds()).then(depts => {
      const set = new Set();
      const uniqueDepts = depts.filter(
        dept => dept && !set.has(dept.id) && set.add(dept.id)
      );
      setDepts(uniqueDepts);
    }, []);
  });

  function getDepts() {
    return (
      depts.length !== 0 &&
      depts.map(dept => (
        <Department
          name={dept.name}
          checked={id === dept.id}
          onClick={() => setId(dept.id)}
        />
      ))
    );
  }

  return (
    <div>
      <h1>Department List</h1>
      <button onClick={() => setId()}>Deselect</button>
      {getDepts()}
    </div>
  );
}

ReactDOM.render(<DepartmentList />, document.getElementById("root"));
