import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

export const ROUTES = {
  '/': Login,
  '/home': Home,
  '/login': Login,
  '/register': Register,
}