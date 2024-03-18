import { memo } from "react";
import { IRoom } from "../../../../@types/rooms";
import { UserGroupIcon } from "@heroicons/react/24/outline";

function RoomCard({ room }: { room: IRoom }) {
  return (
    <div className="bg-whitesmoke rounded-lg text-gray-500">
      <img
        src={room?.images?.[0]}
        alt=""
        className="w-full h-auto max-h-100 rounded-t-lg"
      />

      <div className="p-3">
        <div className="flex flex-row justify-between ">
          <div className="text-sm font-normal space-y-2">
            <p className="font-semibold text-secondary text-base">
              {room.title}
            </p>
            <p>{room.address}</p>
            <p className="max-w-64 truncate">{room.description}</p>
          </div>
          <div className="flex flex-row items-top justify-center text-secondary">
            <UserGroupIcon width="1.10rem" height="1.10rem" className="mr-2" />
            <p className="text-center">{room.capacity}</p>
          </div>
        </div>

        <div className="flex flex-row justify-between self-end items-end mt-4">
          <p className="text-secondary text-lg">${room.price} / week</p>

          <button className="bg-secondary text-white p-2 px-6 rounded-lg">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(RoomCard);
