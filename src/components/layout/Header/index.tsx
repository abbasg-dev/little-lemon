import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { Links } from "interfaces";
import * as ROUTES from "constants/routes";
import Icons from "assets/icons";
import Images from "assets/images";
import "./header.css";
type HeaderProps = {
  links?: Links[];
};
const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { links } = props;
  const [isNavExpanded, setIsNavExpanded] = useState<boolean>(false);
  return (
    <header>
      <nav className="container grid nav-bar">
        <HashLink className="nav-bar-logo" to={ROUTES.MAIN}>
          <img src={Images.LOGO_1} alt="Little Lemon logo" />
        </HashLink>
        <button
          className="nav-bar-hamburger"
          type="button"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {isNavExpanded ? <Icons.X_MARK /> : <Icons.MENU />}
        </button>
        <ul
          className={isNavExpanded ? "nav-bar-links expanded" : "nav-bar-links"}
        >
          {links?.map((navLink) => (
            <li
              key={navLink.name}
              onClick={() => setIsNavExpanded(false)}
              className="hover-underline-animation"
            >
              {navLink.hashLink ? (
                <HashLink to={navLink.path}>{navLink.name}</HashLink>
              ) : (
                <Link to={navLink.path}>{navLink.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
