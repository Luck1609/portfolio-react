import Home from "pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}


