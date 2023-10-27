/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from "react";
import { AppRoutes } from "./components/routes/routes";
import { UserContext } from "./components/Context/Context";

function App() {
  const [user, setUser] = useState(
    localStorage.getItem("user") || null
  );

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/auth";
  };
  return (
    <UserContext.Provider value={{ user, handleLogout }}>
      <AppRoutes user={user} setUser={setUser} />
    </UserContext.Provider>
  );
}

export default App;