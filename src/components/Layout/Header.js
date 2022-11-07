import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import bannerImage from "../../assets/banner.png";
import classes from "./Header.module.css";
import logoImage from "../../assets/logo.png";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img className={classes.logo} src={logoImage} alt="LandmarkPH Logo" />
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={bannerImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
