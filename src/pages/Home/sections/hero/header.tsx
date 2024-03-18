import { GlobeAltIcon } from "@heroicons/react/24/outline";

export default function HeaderComponent() {
  return (
    <header className=" w-full flex flex-row align-middle justify-between py-10 font-medium text-lg text-center">
      <nav className="flex flex-row">
        <div className="self-center cursor-pointer">Home</div>
        <div className="pl-8 self-center  cursor-pointer">Places</div>
        <div className="pl-8 self-center  cursor-pointer">Help</div>
      </nav>

      <div className="flex flex-row align-middle">
        <div className="pr-8 self-center  cursor-pointer flex flex-row items-center">
          <GlobeAltIcon height="1.125rem" width="1.125rem" className="mr-2" />
          Language
        </div>
        <div className="pr-8 self-center  cursor-pointer">Sign in</div>
        <div className="bg-secondary text-white p-2 px-8 rounded-lg  cursor-pointer">
          Sign up
        </div>
      </div>
    </header>
  );
}
