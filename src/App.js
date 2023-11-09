/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { AppRoutes } from "./components/routes/routes";
import { UserContext } from "./components/Context/Context";
import { store } from "./store/store";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || null);
 
  const handleLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("user"); 
    window.location.href = "/auth";
  };

  return (
    <UserContext.Provider value={{ user, handleLogout }}>
      <Provider store={store}>
        <BrowserRouter>
          <AppRoutes
            user={user}
            setUser={setUser}
          />
        </BrowserRouter>
      </Provider>
    </UserContext.Provider>
  );
}

export default App;
