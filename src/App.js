import logo from "./logo.svg";
import "./App.css";
import { useContext } from "react";
import ContextProvider from "./store";

function App() {
  console.log(useContext(ContextProvider));
 
  const { name, setName } = useContext(ContextProvider);
  // const changeName =  (n) => setName(n)
  const addUser = (fn, ln) =>
    setName((prevState) => [...prevState, { fName: fn, lName: ln }]);
  const updateUser = (ind, fn, ln) => {
    const newData = [...name];
    newData[ind] = { fName: fn, lName: ln };
    setName(newData);
  };
  return (
    <div className="App">
      {JSON.stringify(name)}    
      <button onClick={() => addUser("Donny", "Ranardo")}> Add User</button>
      <button onClick={() => updateUser(2, "Josh", "Osbourne")}>
        Update User
      </button>
    </div>
  );
}

export default App;
