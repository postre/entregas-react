import { NavMenu } from "./NavMenu";

export const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="container">
        <div className="row">
          <p className="col-md-4 mb-0 text-body-secondary">© 2023 React Store</p>

          <ul className="nav col-md-6 justify-content-end">
            <NavMenu textColorClass={"text-body-secondary"} />
          </ul>
        </div>
      </div>
    </footer>
  );
};
