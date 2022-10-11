import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";

function App() {
  return (
    <div className="App">
      <h1>JS USERS</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/adduser" element={<AddUser />}></Route>
      </Routes>
    </div>
  );
}

export default App;
