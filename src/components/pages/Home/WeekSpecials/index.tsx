import { HashLink } from "react-router-hash-link";
import * as ROUTES from "constants/routes";
import MealCard from "../MealCard";
import { Meals } from "interfaces";
import "./WeekSpecials.css";
type SpecialsProps = {
  meals: Meals[];
};
const WeekSpecials: React.FC<SpecialsProps> = (props: SpecialsProps) => {
  const { meals } = props;
  return (
    <section className="container grid week-specials" id="menu">
      <div className="week-specials-header">
        <h2>This week specials!</h2>
        <HashLink className="button-primary" to={`/#${ROUTES.MENU}`}>
          Online Menu
        </HashLink>
      </div>
      {meals.map((meal, index) => (
        <MealCard key={index} meal={meal} />
      ))}
    </section>
  );
};
export default WeekSpecials;
