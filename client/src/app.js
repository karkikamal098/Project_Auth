//import
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import all components from
import PageNotFound from "./components/PageNotFound";
import Password from "./components/Password";
import Profile from "./components/Profile";
import Recovery from "./components/Recovery";
import Register from "./components/Register";
import Reset from "./components/Reset";
import UserName from "./components/UserName";


//routes
const router = createBrowserRouter([
  {
    path: '/pageNotFound',
    element: <PageNotFound> </PageNotFound>,
  },
  {
    path: '/password',
    element: <Password> </Password>,
  },
  {
    path: '/profile',
    element: <Profile> </Profile>,
  },
  {
    path: '/recovery',
    element: <Recovery> </Recovery>,
  },
  {
    path: '/register',
    element: <Register> </Register>,
  },
  {
    path: '/reset',
    element: <Reset> </Reset>,
  },
  {
    path: '/username',
    element: <UserName> </UserName>,
  },
]);

export default function app() {
  return (
    <main>
        <RouterProvider router={router}>
        </RouterProvider>
      {/* other routes */}
    </main>
  )
}
