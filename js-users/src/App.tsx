import "./App.css";
import { Route, Routes } from "react-router-dom";
import AddUserPage from "./pages/AddUserPage";
import EditUserPage from "./pages/EditUserPage";
import UserListPage from "./pages/UserListPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserListPage />}></Route>
        <Route path="/edit" element={<EditUserPage />}></Route>
        <Route path="/new" element={<AddUserPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
