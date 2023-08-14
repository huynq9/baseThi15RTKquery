import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Add from "./products/Add";
import Edit from "./products/Edit";
import List from "./products/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
