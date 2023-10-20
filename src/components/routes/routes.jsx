import { Routes, Route } from "react-router-dom";
import { Main } from "../../pages/main/main";
import { NotFound } from "../../pages/notFound/notFound";
import { Favorites } from "../../pages/favorites/favorites";
import { Category } from "../../pages/category/category";
import { SignIn } from "../../pages/login/signIn";
import { SignUp } from "../../pages/login/signUp";
import { ProtectedRoute } from "./ProtectedRoute";

export function AppRoutes({ user, onAuthButtonClick }) {
  return (
    <Routes>
      <Route
        path="/signIn"
        element={<SignIn onAuthButtonClick={onAuthButtonClick} />}
      />
      <Route path="/signUp" element={<SignUp />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<Main />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}