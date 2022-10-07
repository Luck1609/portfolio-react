import Home from "pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Home />} />
        <Route path="/what-is-neuro-diversity" element={<Home />} />
        <Route path="/get-involved" element={<Home />} />
        <Route path="/stories" element={<Home />} />
        <Route path="/events" element={<Home />} />
        <Route path="/donate" element={<Home />} />
        <Route path="/projects" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}


