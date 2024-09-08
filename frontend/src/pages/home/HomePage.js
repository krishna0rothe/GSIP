import HeroSection from "../../components/Home/HeroSection";
import WhatIsGSIP from "../../components/Home/WhatIsGSIP";
import StartupsShowcase from "../../components/Home/StartupsShowcase";
import HowItWorks from "../../components/Home/HowitWorks";
import PlatformBenefits from "../../components/Home/PlatformBenefits";
import CallToAction from "../../components/Home/CallToAction";
import Footer from "../../components/Home/Footer";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <WhatIsGSIP />
      <StartupsShowcase />
      <HowItWorks />
      <PlatformBenefits />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default HomePage;
