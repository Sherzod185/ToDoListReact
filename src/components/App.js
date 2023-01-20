import React from "react";
import Card from "./card/Card";
const App = () => {
  const [input, setInput] = React.useState({ name: "", age: "", phone: "" });
  const [data, setData] = React.useState([]);
  const change = (e) => {
    setInput((p) => ({
      ...p,
      [e.target.name]: e.target.value,
      id: Math.random() * 99 ** 9,
    }));
  };
  const submit = (e) => {
    e.preventDefault();
    setData((p) => {
      return [...p, input];
    });
    setInput({ name: "", age: "", phone: "" });
  };
  const editData = (item) => {
    console.log(item);
    setData(() => data.map((el) => (el.id === item.id ? item : el)));
  };
  const deletItem = (id) => {
    setData((p) => p.filter((el) => el.id !== id));
  };
  return (
    <div className="App">
      <form className="appform" onSubmit={submit}>
        <input
          required
          onChange={change}
          value={input.name}
          type="text"
          name="name"
          min={5}
          placeholder="Name"
        />
        <input
          onChange={change}
          value={input.age}
          type="number"
          required
          min={1}
          name="age"
          placeholder="Age"
        />
        <input
          onChange={change}
          value={input.phone}
          type="number"
          required
          min={8}
          name="phone"
          placeholder="Phone"
        />
        <button type="submit">Submit</button>
      </form>
      {data.map?.((props) => (
        <Card
          deletItem={deletItem}
          id={props.id}
          editData={editData}
          key={props.id}
          name={props.name}
          age={props.age}
          phone={props.phone}
        />
      ))}
    </div>
  );
};
export default App;
