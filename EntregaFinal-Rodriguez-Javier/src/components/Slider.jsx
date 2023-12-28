import { SliderItem } from "./SliderItem";

export const Slider = () => {
  const greetings = [
    {
      title: "Lorem ipsum dolor sit amet",
      detail:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      img: "slider1.jpg",
    },
    {
      title: "Excepteur sint occaecat cupidatat",
      detail: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      img: "slider2.jpg",
    },
    {
      title: "Nemo enim ipsam voluptatem",
      detail:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
      img: "slider3.jpg",
    },
  ];

  return (
    <div
      id="sliderId"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="5000"
      data-bs-pause="false"
      data-bs-touch="true"
    >
      <div className="carousel-inner">
        {greetings.map((greeting, index) => (
          <SliderItem key={index} greeting={greeting} index={index} />
        ))}
      </div>
    </div>
  );
};
