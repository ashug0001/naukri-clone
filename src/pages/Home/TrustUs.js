const TRUST_CARD = [
  {
    id: 1,
    src: "https://squareboat.com/storage/131/logo-4d2d81aefcf296bc100d9edc114c2ea5.png",
  },
  {
    id: 2,
    src: "https://squareboat.com/storage/850/MicrosoftTeams-image-%2817%29.png",
  },
  {
    id: 3,
    src: "https://squareboat.com/storage/851/MicrosoftTeams-image-%2815%29.png",
  },
  {
    id: 4,
    src: "https://squareboat.com/storage/129/niyo.png",
  },
  {
    id: 5,
    src: "https://squareboat.com/storage/137/star_health_logo.svg",
  },
  {
    id: 6,
    src: "https://squareboat.com/storage/3/jubilant.svg",
    style: {
      maxWidth: "30%",
    },
  },
  {
    id: 7,
    src: "https://squareboat.com/storage/854/MicrosoftTeams-image-%2819%29.png",
  },
  {
    id: 8,
    src: "https://squareboat.com/storage/30/paisabazaar.svg",
  },
  {
    id: 9,
    src: "https://squareboat.com/storage/136/Elevation_Primary_logo_RGB%402x.png",
  },
];

const TrustUs = () => {
  return (
    <section className="trust-us mt-20 pb-16">
      <h5 className="text-primary text-2xl mb-10 font-medium">
        Companies Who Trust Us
      </h5>
      <div className="why-us__cards flex flex-wrap">
        {TRUST_CARD.map((card) => (
          <div className="basis-1/4 px-4 h-28 flex items-center justify-center">
            <img
              src={card.src}
              key={card.id}
              alt="trust-card"
              style={card.style ? card.style : { maxWidth: "60%" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustUs;
