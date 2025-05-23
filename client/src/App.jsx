import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} /> {/* Default route */}
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}

export default App;


