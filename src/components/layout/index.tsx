import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { links, socials, contacts } from "data";
const Layout = () => {
  return (
    <>
      <Header links={links} />
      <main id="home">
        {" "}
        <Outlet />
      </main>
      <Footer links={links} socials={socials} contacts={contacts} />
    </>
  );
};
export default Layout;
