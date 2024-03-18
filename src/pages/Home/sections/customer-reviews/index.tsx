const reviews = [
  {
    name: "Sarah Johnson",
    location: "Sydney, Austrália",
    image:
      "https://i.ibb.co/tx0BsVv/young-people-cartoon-profile-design-vector-9770530.jpg",
    review:
      "Found the perfect place in Sydney with this amazing room booking app! Easy to use and great options.",
  },
  {
    name: "David Lee",
    location: "Melbourne, Austrália",
    image: "https://i.ibb.co/27tYyD9/download-2.png",
    review:
      "This app made room booking in Melbourne a breeze! Found a great deal hassle-free.",
  },
  {
    name: "Emily Chen",
    location: "Brisbane, Austrália",
    image: "https://i.ibb.co/CzLT3NL/download-3.png",
    review:
      "A great experience using this app to book a room in Brisbane! I recommend it to all my friends.",
  },
];

export default function CustomerReviewSection() {
  return (
    <section className="px-32 p-10 w-ful text-gray-300 pb-32 justify-center">
      <h1 className="text-center text-secondary text-3xl">Customers reviews</h1>
      <h2 className="text-center text-gray-400 mt-6 text-lg">
        Explore customer feedback for a community-driven perspective
      </h2>

      <div className="flex flex-row justify-center space-x-5 mt-20">
        {reviews.map((review) => (
          <div className="bg-whitesmoke rounded-md flex flex-col p-10 py-14 justify-center items-center text-md">
            <img
              src={review.image}
              alt={`img-${review.name}`}
              className="w-32 h-32 rounded-full object-cover"
            />
            <h2 className="mt-2">{review.name}</h2>
            <p className="mt-2">{review.location}</p>
            <p className="mt-6 text-center">{review.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
