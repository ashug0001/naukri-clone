const WHY_CARDS = [
  {
    id: 1,
    title: "Get more visibility",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    id: 2,
    title: "Organize your candidates",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Verify their abilities",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
];

const WhyUs = () => {
  return (
    <section className="why-us ">
      <h5 className="text-primary text-2xl mb-10">Why us</h5>
      <div className="why-us__cards flex gap-8 font-medium">
        {WHY_CARDS.map((card) => (
          <div
            key={card.id}
            className="card px-5 py-6 bg-white w-2/6 rounded shadow-[0px_3px_6px_#557DA526]"
          >
            <h6 className="text-blue text-2xl mb-7">{card.title}</h6>
            <p className="text-sm">{card.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
