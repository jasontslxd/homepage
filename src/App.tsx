import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "pages";

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
  );
}
