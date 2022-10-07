import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Search } from "./components/Search";
import { Genre } from "./components/Genre";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Search/" element={<Search />}></Route>
        <Route path="/Genres/" element={<Genre />}></Route>
      </Routes>
    </div>
  );
}
export default App;
