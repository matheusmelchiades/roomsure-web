import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IRoom } from "../../@types/rooms";

import SummaryCheckoutPage from "./summary";
import FormCheckoutComponent from "./form";

export default function PaymentCheckout() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { order = null }: { order: IRoom | null } = state || {};

  useEffect(() => {
    setTimeout(() => {
      if (!order) {
        return navigate("/");
      }
    }, 5000);
  }, []);

  if (!order) {
    return <div>404 not found</div>;
  }

  return (
    <div className="w-screen h-screen flex flex-row text-secondary">
      <div className="w-[50vw] h-full bg-whitesmoke">
        <SummaryCheckoutPage order={order} />
      </div>

      <div className="w-[50vw] px-48 pt-32 text-gray-600 ">
        <FormCheckoutComponent order={order} />
      </div>
    </div>
  );
}
