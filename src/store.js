import { createContext, useEffect, useState } from "react";

const Data = createContext({});

export const ContextProvider = ({ children }) => {
    const [name, setName] = useState([])   
   
    useEffect(() => {
      // setName(JSON.stringify({name:'Mark'}))
      setName(prevState => ([...prevState, {fName: 'John', lName:'Marron'}]))
      // console.log(user)
    },[])
    

    
   
  return (<Data.Provider value={{name, setName}}>{children}</Data.Provider>);
};

export default Data