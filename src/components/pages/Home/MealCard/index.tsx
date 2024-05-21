import { HashLink } from "react-router-hash-link";
import * as ROUTES from "constants/routes";
import { Meals } from "interfaces";
import Icons from "assets/icons";
import "./MealCard.css";
type MealProps = {
  meal?: Meals;
};
const MealCard: React.FC<MealProps> = (props: MealProps) => {
  const { meal } = props;
  return (
    <article className="meal-card">
      <div className="meal-card-image">
        <img src={meal.image} alt={meal.name} />
      </div>
      <div className="meal-card-header">
        <h3>{meal.name}</h3>
        <span>{meal.price}</span>
      </div>
      <div className="meal-card-body-footer">
        <p>{meal.description}</p>
        <HashLink to={ROUTES.ORDER_ONLINE}>
          Order a delivery <Icons.MOTOR_CYCLE />
        </HashLink>
      </div>
    </article>
  );
};
export default MealCard;
