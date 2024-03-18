import { IRoom } from "../../@types/rooms";
import LogoBrand from "../../assets/icons/logo-brand.svg";

export default function SummaryCheckoutPage({ order }: { order: IRoom }) {
  return (
    <div className="w-[50vw] bg-whitesmoke">
      <div className="mt-6 ml-6">
        <img src={LogoBrand} alt="" className="w-16 h-16" />
      </div>

      <div className="pt-10 px-48 flex flex-col items-start justify-start">
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="text-xl text-start ">{order.title}</h1>
          <p className="text-end font-bold">${order.price * 0.01} / week</p>
        </div>
        <img
          src={order?.images?.[0]}
          alt=""
          className="w-full h-auto max-h-[30vh] rounded-lg mt-4"
        />
        <p className="mt-5 font-semibold text-base text-start text-gray-600">
          {order?.address}
        </p>
        <p className="mt-5 font-normal text-base">{order?.description}</p>
        <p className="mt-5 font-semibold text-base">
          Guests limit: {order?.capacity}
        </p>

        <div className="text-gray-600 space-y-4">
          <h2 className="mt-28 text-primary">Thank You for Choosing Us!</h2>

          <p className="mt-4 text-gray-600">
            Enjoy your stay! We appreciate your trust in us for your
            accommodation needs. Your satisfaction is our top priority!
          </p>

          <p className="mt-4">
            Thank you again for choosing{" "}
            <span className="text-primary">RoomSure!</span>
          </p>
        </div>
      </div>
    </div>
  );
}
