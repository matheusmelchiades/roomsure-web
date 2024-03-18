import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Home";
import { RoomsProvider } from "../contexts/rooms";
import PaymentCheckout from "./Checkout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/checkout",
      element: <PaymentCheckout />,
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
