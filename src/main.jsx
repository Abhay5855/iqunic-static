import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./components/error/ErrorPage";
import AboutContainer from "./components/about/AboutContainer";
import TeamContainer from "./components/team/TeamContainer";
import PricingContainer from "./components/pricing/PricingContainer";
import ContactContainer from "./components/contact/ContactContainer";
import HeroContainer from "./components/hero/HeroContainer";
import Features from "./components/features/Features";
import Privacy from "./components/privacy/Privacy";
import Services from "./components/services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutContainer />,
  },
  {
    path: "/team",
    element: <TeamContainer />,
  },
  {
    path: "/pricing",
    element: <PricingContainer />,
  },
  {
    path: "/contact",
    element: <ContactContainer />,
  },
  {
    path: "/home",
    element: <HeroContainer />,
  },
  {
    path: "/features",
    element: <Features />,
  },

  {
    path: "/privacy-policy",
    element: <Privacy />,
  },
  {
    path: "/termsofservice",
    element: <Services />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
