import { Route, Routes } from "react-router-dom";
import './App.css';
import AppProvider from "./context/AppProvider";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Stats from "./pages/Stats";

function App() {
  
  return (
    <AppProvider>
      <Routes>
        <Route index path="/home" element={<Home />}/>
        <Route index path="/statistics" element={<Stats />}/>
        <Route index path="/profile" element={<Profile />}/>
        <Route index path="/" element={<Login />}/>
      </Routes>
    </AppProvider>
  );
}

export default App;
