import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<NotFoundPage/>}></Route>
    </Routes>
  );
}

export default App;
