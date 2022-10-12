import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/editUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<AddUser />}></Route>
        <Route path="/edit" element={<EditUser />}></Route>
      </Routes>
    </div>
  );
}

export default App;
