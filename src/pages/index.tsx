import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Home";
import { RoomsProvider } from "../contexts/rooms";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
    },
  ],
  {}
);

export default function Router() {
  return (
    <RoomsProvider>
      <RouterProvider router={router}></RouterProvider>
    </RoomsProvider>
  );
}
