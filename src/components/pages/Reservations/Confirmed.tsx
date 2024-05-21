import Icons from "assets/icons";
const Confirmed = () => {
  return (
    <div className="container confirmed-reservation">
      <Icons.SUCCESS />
      <h2>Your table has been confirmed!</h2>
      <p>
        An email confirmation containing all the details will be sent to you
        shortly.
      </p>
    </div>
  );
};
export default Confirmed;
