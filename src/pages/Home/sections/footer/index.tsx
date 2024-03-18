import LogoBrand from "../../../../assets/icons/logo-brand.svg";

import FacebookIcon from "../../../../assets/icons/logo-facebook.svg";
import LinkdinIcon from "../../../../assets/icons/logo-linkedin.svg";
import TwitterIcon from "../../../../assets/icons/logo-twitter.svg";
import InstagranIcon from "../../../../assets/icons/logo-instagram.svg";

export default function FooterSection() {
  return (
    <footer className="px-32 p-10 w-full bg-whitesmoke text-gray-300">
      <div className="flex flex-row">
        <div className="justify-start max-w-80">
          <div>
            <img src={LogoBrand} alt="" />
          </div>

          <p className="mt-4">
            Discover seamless room booking solutions tailored to your needs,
            unlocking unforgettable experiences worldwide.
          </p>
        </div>

        <div className="flex flex-row w-full justify-center space-x-24">
          <div className="font-normal text-md space-y-3">
            <p className="font-semibold text-gray-100">Product</p>
            <p>Home</p>
            <p>About</p>
            <p>Projects</p>
            <p>Releases</p>
            <p>Pricing</p>
            <p>Services</p>
          </div>

          <div className="font-normal text-md space-y-3">
            <p className="font-semibold text-gray-100">Company </p>
            <p>About us </p>
            <p>Carrers </p>
            <p>Press </p>
            <p>News </p>
            <p>Media Kit </p>
            <p>Contact </p>
          </div>

          <div className="font-normal text-md space-y-3">
            <p className="font-semibold text-gray-100">Resources </p>
            <p>Blog </p>
            <p>Buy Template </p>
            <p>Events </p>
            <p>Help Centre </p>
            <p>Tutorials </p>
            <p>Support </p>
          </div>
        </div>

        <div className="justify-end max-w-80 w-full">
          <h3 className="font-semibold text-start text-gray-100">
            Stay up to date
          </h3>

          <input
            type="text"
            placeholder="Enter your email"
            className="mt-4 border border-solid border-gray-600 border-hairline rounded-md p-2 w-full"
          />

          <div className="bg-primary text-white p-2 px-8 rounded-lg cursor-pointer w-full text-center mt-4">
            send
          </div>
        </div>
      </div>

      <div className="h-hairline bg-gray-200 my-8" />

      <div className="flex flex-row justify-between">
        <div className="flex flex-row text-gray-100 space-x-4">
          <img src={FacebookIcon} alt="" />
          <img src={LinkdinIcon} alt="" />
          <img src={TwitterIcon} alt="" />
          <img src={InstagranIcon} alt="" />
        </div>

        <div className="flex flex-row text-gray-500 font-thin">
          <div className="pr-4">Term</div>
          <div className="pr-4">Privacy</div>
          <div className="pr-4">Cookies</div>
        </div>
      </div>
    </footer>
  );
}
