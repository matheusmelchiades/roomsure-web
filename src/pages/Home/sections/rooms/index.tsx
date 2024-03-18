import { UserGroupIcon } from "@heroicons/react/24/solid";
import { useRooms } from "../../../../hooks/rooms";
import { useEffect } from "react";
import LoaderComponent from "../../../../components/loader";
import RoomCard from "./room-card";

export default function PopularPlacesSection() {
  const { rooms, loading, fetchData } = useRooms();

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, []);

  return (
    <section className="px-32 p-10 w-ful text-gray-300 pb-32 mt-32">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-start text-secondary text-3xl font-bold">
          Popular places
        </h1>

        <div className="mt-6 p-2 bg-primary rounded-lg px-4 text-sm text-whitesmoke text-center object-center">
          view all
        </div>
      </div>

      {loading ? (
        <div className="flex flex-row justify-center flex-1 h-96 items-center">
          <LoaderComponent />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-6 mt-6">
          {rooms?.map((room) => (
            <RoomCard room={room} />
          ))}
        </div>
      )}
    </section>
  );
}
