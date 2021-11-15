import { MyFirstComponent } from "./MyFirstComponent";
import { useState } from "react";

export const App = () => {
  const [name, setName] = useState("Lord");
  const [age, setAge] = useState();
  const [number, setNumber] = useState(0);

  return (
    <div>
      <MyFirstComponent name={name} age={30} />
      <MyFirstComponent name={name} age={65} />
      <h1 onClick={() => setNumber(number + 1)}>{number}</h1>
    </div>
  );
};
