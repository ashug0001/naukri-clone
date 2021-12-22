import Hero from "./Hero";
import TrustUs from "./TrustUs";
import WhyUs from "./WhyUs";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      <div className="bg-[#EDF6FF] h-full pl-48 pr-40 pt-20">
        {/* Why Us Section */}

        <WhyUs />

        {/* Trust Us Section */}

        <TrustUs />
      </div>
    </>
  );
};

export default Home;
