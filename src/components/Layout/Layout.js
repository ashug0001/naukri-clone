import { Fragment } from "react";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <div className="gradiant-bg absolute top-[-2px] z-[-1] w-full h-[464px]"></div>
      {children}
    </Fragment>
  );
};

export default Layout;
