import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import HeroLoginScreen from "./pages/HeroLoginScreen";
import ImpactorLoginScreen from "./pages/ImpactorLoginScreen";
import Progress from "./pages/Progress";
import Task from "./pages/Task";
import ImpactorSignUp from "./pages/ImpactorSignUp";
import HeroSignUp from "./pages/HeroSignUp";
import AvatarCreator from "./components/AvatarCreator";
import MarketPlace from "./pages/MarketPlace";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/hero/login",
    element: <HeroLoginScreen />,
  },
  {
    path: "/hero/signup",
    element: <HeroSignUp />,
  },
  {
    path: "/progress",
    element: <Progress />,
  },
  {
    path: "/avatar",
    element: <AvatarCreator />,
  },
  {
    path: "/marketplace",
    element: <MarketPlace />,
  },
  {
    path: "/impactor/login",
    element: <ImpactorLoginScreen />,
  },
  {
    path: "/task",
    element: <Task />,
  },
  {
    path: "/impactor/signup",
    element: <ImpactorSignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
