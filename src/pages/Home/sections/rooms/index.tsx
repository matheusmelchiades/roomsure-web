import { UserGroupIcon } from "@heroicons/react/24/solid";

const rooms = new Array(6).fill({
  id: 1,
  title: "Cozy Loft in Downtown",
  images: [
    "https://i.ibb.co/mXycVVM/pexels-max-vakhtbovycn-7031621.jpg",
    "image2.jpg",
    "image3.jpg",
  ],
  price: 100,
  description: "A charming loft in the heart of the city, perfect for couples.",
  address: "123 Main Street, Cityville",
  capacity: 2,
});

export default function PopularPlacesSection() {
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

      <div className="grid grid-cols-3 gap-6 mt-6">
        {rooms.map((room) => (
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
                  <UserGroupIcon
                    width="1.10rem"
                    height="1.10rem"
                    className="mr-2"
                  />
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
        ))}
      </div>
    </section>
  );
}
