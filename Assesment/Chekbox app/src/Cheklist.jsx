import React, { useState } from "react";

function Checklist() {
  const [isChecked, setIsChecked] = useState({
    citizen: false,
    over21: false,
  });

  const handleChange = (event) => {
    setIsChecked({
      ...isChecked,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div>
      <h2>React Checklist</h2>
      <div>
        <label>
          Are you a Citizen?
          <input
            type="checkbox"
            name="citizen"
            checked={isChecked.citizen}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Are you over 21?
          <input
            type="checkbox"
            name="over21"
            checked={isChecked.over21}
            onChange={handleChange}
          />
        </label>
      </div>
      <p>
        Selected Options:
        <br />
        Citizen: {isChecked.citizen ? "Yes" : "No"}
        <br />
        Over 21: {isChecked.over21 ? "Yes" : "No"}
      </p>
    </div>
  );
}

export default Checklist;