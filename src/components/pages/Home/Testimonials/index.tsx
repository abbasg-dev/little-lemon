import TestimonialCard from "../TestimonialCard";
import { Customers } from "interfaces";
import "./Testimonials.css";
type TestimonialsProps = {
  customers: Customers[];
};
const Testimonials: React.FC<TestimonialsProps> = (
  props: TestimonialsProps
) => {
  const { customers } = props;
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>Testimonials</h2>
        {customers.map((customer, index) => (
          <TestimonialCard key={index} customer={customer} />
        ))}
      </div>
    </section>
  );
};
export default Testimonials;
