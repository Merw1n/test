import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DeletedTodosPage from "./pages/DeletedTodosPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/deleted" element={<DeletedTodosPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
