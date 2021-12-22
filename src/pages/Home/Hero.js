import heroImg from "../../assets/images/hero_img.png";

const Hero = () => {
  return (
    <section className="hero flex justify-between pt-16 pl-48 pr-40 h-[398]">
      <div className="w-2/6">
        <h1 className="text-6xl mt-8 leading-tight text-white">
          Welcome to My<span className="text-blue">Jobs</span>
        </h1>
        <button className="mt-10 bg-blue text-white rounded px-8 py-3 font-bold">
          Get Started
        </button>
      </div>
      <div className="hero-img w-[70%] pl-5">
        <img src={heroImg} alt="hero-img" />
      </div>
    </section>
  );
};

export default Hero;
