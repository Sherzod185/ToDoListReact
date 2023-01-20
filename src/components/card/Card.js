import React from "react";
const Card = ({ name, age, phone, id, editData, deletItem }) => {
  const [changeInput, setchangeInput] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    name,
    age,
    phone,
  });

  const change = (e) => {
    setInputs((p) => ({ ...p, [e.target.name]: e.target.value, id }));
  };
  const submit = (e) => {
    e.preventDefault();
    editData(inputs);
    setchangeInput(false);
  };

  return (
    <>
      {!changeInput ? (
        <div className="qiymat">
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Tell: {phone}</p>
          <div>
            <button
              className="edit"
              onClick={() => setchangeInput(!changeInput)}
            >
              Edit
            </button>
            <button onClick={() => deletItem(id)} className="delete">
              Delete
            </button>
          </div>
        </div>
      ) : (
        <form className="editform" onSubmit={submit}>
          <input
            onChange={change}
            defaultValue={inputs.name}
            required
            min={5}
            placeholder="Name"
            name="name"
            type="text"
          />
          <input
            onChange={change}
            required
            placeholder="Age"
            defaultValue={inputs.age}
            name="age"
            min={1}
            type="number"
          />
          <input
            onChange={change}
            required
            placeholder="Phone"
            defaultValue={inputs.phone}
            name="phone"
            min={8}
            type="number"
          />
          <button className="save" type="submit">
            Save
          </button>
          <button
            className="cancel"
            type="button"
            onClick={() => setchangeInput(false)}
          >
            Cancel
          </button>
        </form>
      )}
    </>
  );
};

export default Card;
