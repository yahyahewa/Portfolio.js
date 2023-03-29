//import react library and packeg
import { createContext, useState } from "react";
//---------------------------------//
// import style file
import "./App.css";
//------------------//
// components
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  useGetAllCountriesQuery,
  useGetCountriesByCodeQuery,
} from "./services/countriesApi";
//-----------------------------------//
export const ThemeType = createContext();
function App() {
  const isDark = useSelector((state) => state.theme.value);
  const { data, error, isLoading } = useGetCountriesByCodeQuery("iraq");
  // console.log(data);
  return (
    // <div className="flex justify-evenly flex-wrap gap-1 w-[95%] m-auto">
    //   {error ? (
    //     <h1>erorr</h1>
    //   ) : isLoading ? (
    //     <h1>loading...</h1>
    //   ) : (
    //     data.map((value, index) => {
    //       console.log(value.flags.png);
    //       return (
    //         <div key={index} className="w-[150px] md:w-[200px] overflow-hidden">
    //           <img src={value.flags.png} />
    //           <div className="w-full">{value.name.common}</div>
    //         </div>
    //       );
    //     })
    //   )}
    // </div>
    <div className={`w-full h-screen ${isDark ? ` bg-big-stone-900` : ``}`}>
      <Navbar />
      <Aside />
      <main className={`${isDark ? ` bg-big-stone-900` : ``}`}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skill" element={<Skill />}></Route>
          <Route path="/project" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
