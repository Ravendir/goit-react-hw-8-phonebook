import { lazy } from "react";

export const mainRoutes = [
  {
    name: "HomePage",
    path: "/",
    component: lazy(() => import("../pages/HomePage")),
    exact: true,
    isPrivate: false,
    isRestricted: false,
  },
  {
    name: "ContactsPage",
    path: "/contacts",
    component: lazy(() => import("../pages/ContactsPage")),
    exact: false,
    isPrivate: true,
    isRestricted: false,
  },
  {
    name: "LoginPage",
    path: "/login",
    component: lazy(() => import("../pages/LoginPage")),
    exact: true,
    isPrivate: false,
    isRestricted: true,
  },
  {
    name: "RegisterPage",
    path: "/register",
    component: lazy(() => import("../pages/RegisterPage")),
    exact: true,
    isPrivate: false,
    isRestricted: true,
  },
];
