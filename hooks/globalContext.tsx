import { createContext } from "react";

 const GlobalContextCreate = createContext({});


import React from 'react'

 const GlobalContext = ({children,setToggle,isOpen}:{children:React.ReactNode,setToggle:Event,isOpen:boolean}) => {
  return (
    <GlobalContextCreate.Provider value={{ setToggle, isOpen }}>
      {children}
    </GlobalContextCreate.Provider>
  );
}

export { GlobalContext ,GlobalContextCreate}