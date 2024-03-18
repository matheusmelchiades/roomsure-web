import HeaderComponent from "./header";

import {
  HomeModernIcon,
  BuildingOfficeIcon,
  MagnifyingGlassIcon,
  CalendarDaysIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

import bedIcon from "../../../../assets/icons/bed.svg";

export default function HeroSection() {
  return (
    <section className="w-full h-screen flexh-screen flex flex-col bg-hero-pattern bg-cover bg-center px-32 relative">
      <HeaderComponent />

      <div className="flex flex-col flex-1 justify-between pb-24">
        <div className="flex flex-row py-0 box-border max-w-full mt-28">
          <h1 className="m-0 relative text-9xl font-extrabold z-[1] text-secondary text-opacity-80">
            <p className="m-0">{`Explore`}</p>
            <p className="m-0">your place</p>
            <p className="m-0">to stay</p>
          </h1>
        </div>

        <div>
          <div className="flex flex-row mt-28">
            <div className="p-2 px-4 rounded-lg bg-primary text-white flex flex-row justify-center items-center">
              <img src={bedIcon} alt="" className="mr-2 text-white" />
              Room
            </div>

            <div className="bg-white p-2 px-4 rounded-lg ml-4  flex flex-row justify-center text-center items-center">
              <HomeModernIcon
                width="1.25rem"
                height="1.25rem"
                className="mr-2"
              />
              House
            </div>

            <div className="bg-white p-2 px-4 rounded-lg ml-4  flex flex-row justify-center text-center items-center">
              <BuildingOfficeIcon
                width="1.25rem"
                height="1.25rem"
                className="mr-2"
              />
              Office
            </div>
          </div>

          <div className="bg-white w-full p-5 rounded-xl mt-4 flex flex-row float-end">
            <div className="bg-whitesmoke w-full flex flex-row justify-center text-center items-center px-4 rounded-lg">
              <MagnifyingGlassIcon
                width="1.75rem"
                height="1.75rem"
                className="mr-4"
              />
              <input
                type="text"
                className="w-full text font-semibold"
                placeholder="Search your place here..."
              />
            </div>

            <div className="bg-whitesmoke flex flex-row px-6 ml-4 rounded-lg">
              <div className="p-2 flex flex-row text-nowrap items-center">
                <CalendarDaysIcon
                  width="1.75rem"
                  height="1.75rem"
                  className="mr-4"
                />
                <p>Check in</p>
              </div>

              <div className="h-full border border-solid  w-hairline border-hairline border-gray-600 border-opacity-10 mx-2 ml-4" />

              <div className="p-2 ml-2 text-nowrap flex flex-row items-center">
                <p>Check out</p>
              </div>
            </div>

            <div className="bg-whitesmoke ml-4 p-2 px-4 text-nowrap flex flex-row items-center rounded-lg">
              <UserGroupIcon
                width="1.75rem"
                height="1.75rem"
                className="mr-4"
              />
              Guests
            </div>

            <button className="bg-primary text-white p-2 px-8 rounded-lg cursor-pointer ml-4 text-base text-nowrap">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
