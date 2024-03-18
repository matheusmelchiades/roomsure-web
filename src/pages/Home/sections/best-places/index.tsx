export default function BestPlacesSection() {
  return (
    <section className="px-32 p-10 w-ful text-gray-300 pb-32">
      <div>
        <h1 className="text-start text-secondary text-3xl font-bold">
          Search a best place
        </h1>
        <h2 className="text-start text-gray-400 mt-2 font-semibold text-sm">
          Popular destinations open to visitors
        </h2>
      </div>

      <div className="grid grid-rows-2 grid-cols-3 gap-4 mt-8">
        <div className="relative col-span-2 col-start-1 row-span-2 h-full">
          <div className="absolute z-1 bg-white p-2 px-6 left-4 top-4 rounded-3xl">
            Sunshine coast
          </div>
          <img
            src="https://i.ibb.co/T8zhwY0/Moving-to-Sunshine-Coast-Kent-Removals-1.jpg"
            alt=""
            className="object-cover h-full w-full rounded-lg"
          />
        </div>

        <div className="relative col-span-1 col-start-3 row-span-1">
          <div className="absolute z-1 bg-white p-2 px-6 left-4 top-4 rounded-3xl">
            Gold coast
          </div>

          <img
            src="https://i.ibb.co/60vfD0W/cityscape-beach-water-skyscraper-people-hd-wallpaper-preview.jpg"
            alt=""
            className=" bg-gray-100 w-full h-full  object-cover rounded-lg"
          />
        </div>
        <div className="relative col-span-1 col-start-3 row-span-1">
          <div className="absolute z-1 bg-white p-2 px-8 left-4 top-4 rounded-3xl">
            Byron Bay
          </div>

          <img
            src="https://i.ibb.co/w6vBmdm/97573129.jpg"
            alt=""
            className="bg-gray-100 w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
