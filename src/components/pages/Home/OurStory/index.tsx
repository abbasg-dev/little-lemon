import Images from "assets/images";
import "./OurStory.css";
const OurStory = () => {
  return (
    <section className="container grid our-story" id="about">
      <div className="our-story-description">
        <h2>Our Story</h2>
        <p>
          Little Lemon restaurant, nestled in the heart of Chicago, embodies a
          tale of culinary passion and friendship. Founded by childhood friends
          Mia and Alex, it's a story of dreams realized through dedication and
          creativity. From vibrant flavors to cozy ambiance, each aspect
          reflects their commitment to excellence. With every dish, Little Lemon
          invites guests on a journey of taste and togetherness, where every
          bite tells a story of innovation and tradition.
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={Images.BANNER_2} alt="Chef James" />
        <img src={Images.BANNER_3} alt="Chef Daniel" />
      </div>
    </section>
  );
};
export default OurStory;
