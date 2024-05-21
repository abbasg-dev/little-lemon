import Images from "assets/images";
import Icons from "assets/icons";
import { Contacts, Socials, Links, Customers, Meals } from "interfaces";
import * as ROUTES from "constants/routes";
export const contacts: Contacts[] = [
  { icon: Icons.LOCATION, info: "123 Fake Ave, Chicago, IL 60602" },
  { icon: Icons.PHONE, info: "+1 (012) 345-6789" },
  { icon: Icons.MAIL, info: "info@littlelemon.com" },
];
export const socials: Socials[] = [
  { icon: Icons.FACEBOOK, name: "facebook" },
  { icon: Icons.INSTAGRAM, name: "instagram" },
  { icon: Icons.TWITTER, name: "twitter" },
  { icon: Icons.YOUTUBE, name: "youtube" },
];
export const links: Links[] = [
  {
    name: "Home",
    path: `/#${ROUTES.HOME}`,
    hashLink: true,
  },
  {
    name: "About",
    path: `/#${ROUTES.ABOUT}`,
    hashLink: true,
  },
  {
    name: "Menu",
    path: `/#${ROUTES.MENU}`,
    hashLink: true,
  },
  {
    name: "Reservations",
    path: ROUTES.RESERVATIONS,
    hashLink: false,
  },
  {
    name: "Order Online",
    path: ROUTES.ORDER_ONLINE,
    hashLink: false,
  },
  {
    name: "Login",
    path: ROUTES.LOGIN,
    hashLink: false,
  },
];
export const customers: Customers[] = [
  {
    fullName: "George",
    image: Images.CUSTOMER_1,
    rating: [1, 1, 1, 1, 1],
    says: "The ambiance at Little Lemon is just perfect! The food was exquisite and the service was top-notch.",
  },
  {
    fullName: "Christina",
    image: Images.CUSTOMER_2,
    rating: [1, 1, 1, 1, 0.5],
    says: "I loved the variety on the menu. Everything we tried was delicious, and the staff were very friendly.",
  },
  {
    fullName: "Joseph",
    image: Images.CUSTOMER_3,
    rating: [1, 1, 1, 1, 0],
    says: "A great place to dine with family and friends. The dishes are flavorful, and the atmosphere is cozy.",
  },
  {
    fullName: "Jennifer",
    image: Images.CUSTOMER_4,
    rating: [1, 1, 1, 1, 1],
    says: "Little Lemon exceeded my expectations! The quality of the food and the presentation were exceptional.",
  },
];
export const meals: Meals[] = [
  {
    name: "Greek Salad",
    image: Images.MEAL_1,
    price: "$10.00",
    description: `Indulge in the flavors of Greece with our famous Greek Salad. Crispy lettuce, colorful peppers, savory olives, and our signature Chicago-style feta cheese, all topped with crunchy garlic and rosemary croutons.`,
  },
  {
    name: "Bruschetta",
    image: Images.MEAL_2,
    price: "$6.79",
    description: `Savor the taste of Italy with our Bruschetta. Grilled bread rubbed with garlic, drizzled with olive oil, and seasoned with just the right amount of salt. It's a classic appetizer that will leave you craving more.`,
  },
  {
    name: "Lemon Dessert",
    image: Images.MEAL_3,
    price: "$8.50",
    description: `Treat yourself to a delightful Lemon Dessert straight from grandma's recipe book. Every ingredient has been carefully sourced to bring you an authentic taste experience. It's the perfect way to end your meal on a sweet note.`,
  },
];
