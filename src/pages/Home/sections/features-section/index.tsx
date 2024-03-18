import step1 from "../../../../assets/features/step1.svg";
import step2 from "../../../../assets/features/step2.svg";
import step3 from "../../../../assets/features/step3.svg";

const features = [
  {
    title: "Discover",
    description:
      "Embark on a journey of discovery as you explore our curated selection of rooms. From cozy hideaways to luxurious retreats, each option offers a unique experience tailored to your preferences. Immerse yourself in breathtaking views and exceptional amenities. Find the perfect space for your memorable stay.",
    ilustration: step1,
  },
  {
    title: "Secure Your Stay",
    description:
      "Secure your stay in just a few clicks with our simple and secure booking process. Our intuitive platform allows you to choose and book your room quickly and hassle-free. Enjoy the peace of mind of an easy and secure reservation for your next adventure.",
    ilustration: step2,
  },
  {
    title: "Instant Confirmation",
    description:
      "Relax knowing your reservation is confirmed! Upon completing the booking process, you'll receive an instant confirmation via email. Get ready for your stay with the assurance that everything is set to welcome you. Looking forward to making your new place a reality!",
    ilustration: step3,
  },
];

export default function FeatureSection() {
  return (
    <section className="px-32 p-10 w-ful text-gray-300 pb-32 justify-center">
      <h1 className="text-center text-secondary text-3xl">
        Effortless Booking Experience
      </h1>
      <h2 className="text-center text-gray-400 mt-6 text-lg">
        Explore, Reserve, Enjoy: Your Seamless Journey to Perfect Accommodation{" "}
      </h2>

      <div className="flex flex-row justify-center space-x-6 mt-20">
        {features.map((feature, index) => (
          <div className="flex flex-col p-10 py-14 justify-center items-center text-md">
            <div>
              <img src={feature.ilustration} alt="" />
            </div>

            <div className="mt-6 p-2 bg-primary rounded-lg px-8 text-sm text-whitesmoke text-center object-center">
              Step {index + 1}
            </div>

            <h2 className="mt-10 font-semibold text-secondary">
              {feature.title}
            </h2>
            <p className="mt-4 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
