import { SliderItem } from "../../components";

export const Slider = ({ greetings }) => {
  return (
    <>
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
    </>
  );
};
