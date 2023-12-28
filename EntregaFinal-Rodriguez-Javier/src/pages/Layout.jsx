import { Footer, Loader, NavBar } from "../components";

export const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Loader />
      <div className="container itemList">{children}</div>
      <Footer />
    </>
  );
};
