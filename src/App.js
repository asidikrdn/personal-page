import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

// Set-Up ContextAPI + useReducer
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./store/reducers";

// Membuat context baru dengan nilai defaultnya adalah initialState, nilai default ini akan diakses apabila nilai pada provider tidak dapat diakses
export const MainContext = createContext(initialState);

const App = () => {
  // membuat reducer untuk modifikasi dan akses Context
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [pagePosition, setPagePosition] = useState("intro");
  // const handleNavigationClick = (e) => {
  //   // console.log(e.target.id);
  //   setPagePosition(e.target.id);
  // };

  // console.log(navPosition);
  return (
    <MainContext.Provider value={[state, dispatch]}>
      <Router>
        <Header></Header>
        <Navbar></Navbar>
        <MainContent></MainContent>
      </Router>
    </MainContext.Provider>
  );
};

export default App;
