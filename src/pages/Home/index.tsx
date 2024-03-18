import BestPlacesSection from "./sections/best-places";
import CustomerReviewSection from "./sections/customer-reviews";
import FeatureSection from "./sections/features-section";
import FooterSection from "./sections/footer";
import HeroSection from "./sections/hero";
import PopularPlacesSection from "./sections/rooms";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <PopularPlacesSection />

      <FeatureSection />

      <BestPlacesSection />

      <CustomerReviewSection />

      <FooterSection />
    </>
  );
}
