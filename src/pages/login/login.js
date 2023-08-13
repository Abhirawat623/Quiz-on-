import { Fragment } from "react";
import { AuthLogin, Navbar } from "../../components/index";

export const Login = () => {
  return (
    <Fragment>
      <Navbar />
      <AuthLogin />
    </Fragment>
  );
};
