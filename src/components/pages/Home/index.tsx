import { Helmet } from "react-helmet";
import Hero from "./Hero";
import WeekSpecials from "./WeekSpecials";
import Testimonials from "./Testimonials";
import OurStory from "./OurStory";
import { meals, customers } from "data";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Little Lemon</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no"
        />
      </Helmet>
      <Hero />
      <WeekSpecials meals={meals} />
      <Testimonials customers={customers} />
      <OurStory />
    </>
  );
};
export default Home;
