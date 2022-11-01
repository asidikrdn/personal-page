// Set-Up ContextAPI + useReducer
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducers";

// Membuat context baru dengan nilai defaultnya adalah initialState, nilai default ini akan diakses apabila nilai pada provider tidak dapat diakses
export const MainContext = createContext(initialState);

const Store = (props) => {
  // membuat reducer untuk modifikasi dan akses Context
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MainContext.Provider value={[state, dispatch]}>
      {props.children}
    </MainContext.Provider>
  );
};

export default Store;
