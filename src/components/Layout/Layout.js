import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header";

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <Fragment>
      <Header />
      <div
        className={`gradiant-bg absolute top-[-2px] z-[-1] w-full ${
          location.pathname === "/posts" ? "h-[210px]" : "h-[464px]"
        }`}
      ></div>
      {children}
    </Fragment>
  );
};

export default Layout;
