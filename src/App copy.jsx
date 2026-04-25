import { useEffect, useState } from "react";
import About from "./components/About";
import Button from "./components/Button";
import Contact from "./components/Contact";
const App = () => {

  const [name, setName] = useState("Fazil");
  const [age, setAge] = useState(44);

  useEffect(() => {
    console.log("App componenti render olundu");
  }, [name]);

  function changeName() {
    setName("John");
  }
  function changeAge() {
    setAge(20);
  }

  return (
    <div>
      <About ad={name} yas={age} />

      <Button title="Change name" cn="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md" click={changeName} />
      <Button title="Change age" cn="bg-red-500 text-white p-2 rounded-md" click={changeAge} />

      <Contact />
    </div>
  )
}

export default App;