export const SliderItem = ({ greeting, index }) => {
  return (
    <>
      <div
        key={index}
        className={`carousel-item ${index == 0 ? "active" : ""}`}
      >
        <img
          src={`/src/assets/img/${greeting.img}`}
          className="d-block w-100"
          alt=""
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>{greeting.title}</h5>
          <p>{greeting.detail}</p>
        </div>
      </div>
    </>
  );
};
