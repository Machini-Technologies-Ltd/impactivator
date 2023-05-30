import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Courses from "./pages/Courses";
import ImpactorLoginScreen from "./pages/ImpactorLoginScreen";
import Progress from "./pages/Progress";
import Task from "./pages/Task";
import ImpactorSignUp from "./pages/ImpactorSignUp";
import HeroSignUp from "./pages/HeroSignUp";
import AvatarCreator from "./components/AvatarCreator";
import MarketPlace from "./pages/MarketPlace";
import MyHero from "./pages/MyHero";
import Heroes from "./pages/Heroes";
import Projects from "./pages/Projects";
import CreateMint from "./pages/CreateMint";
import Impactor from "./pages/CountryManager";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/country-manager",
    element: <Impactor />,
  },
  {
    path: "/courses",
    element: <Courses />,
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
    path: "/hero",
    element: <MyHero />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/heroes",
    element: <Heroes />,
  },
  {
    path: "/marketplace",
    element: <MarketPlace />,
  },
  {
    path: "/impactor/dashboard",
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
  {
    path: "/create/mint",
    element: <CreateMint />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
