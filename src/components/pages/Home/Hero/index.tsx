import { HashLink } from "react-router-hash-link";
import * as ROUTES from "constants/routes";
import Images from "assets/images";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <div className="description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </div>
          <HashLink className="button-primary" to={ROUTES.RESERVATIONS}>
            Reserve a table
          </HashLink>
        </div>
        <img
          className="hero-image"
          src={Images.BANNER_1}
          alt="Restaurant food"
        />
      </div>
    </section>
  );
};
export default Hero;
