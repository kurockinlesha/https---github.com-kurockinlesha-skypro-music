import { useState } from "react";
import { AppRoutes } from "./components/routes/routes";

function App() {
  const [user, setUser] = useState(false);
  console.log(localStorage);
  console.log(user);

  const handleSignIn = () => {
    localStorage.setItem("user", "true");
    const curentLocalStorage = localStorage.getItem("user");
    console.log(curentLocalStorage);
    setUser(curentLocalStorage);
  };


  // const handleSignUp = () => {
  //   localStorage.removeItem("user");
  //   const curentLocalStorage = localStorage.getItem("user");
  //   console.log(curentLocalStorage);
  //   setUser(curentLocalStorage);
  // };

  return <AppRoutes user={user} onAuthButtonClick={handleSignIn} />;
}

export default App;