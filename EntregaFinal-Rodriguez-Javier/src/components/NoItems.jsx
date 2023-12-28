export const NoItems = ({ text = "No se encontraron Items", element = "h3" }) => {
  const Tag = element;
  return (
    <div className="row">
      <div className="col-12 text-center mt-5 pt-5 mb-5 pb-5">
        <Tag>{text}</Tag>
      </div>
    </div>
  );
};
