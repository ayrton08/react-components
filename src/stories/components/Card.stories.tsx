import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Card } from "../../components/Card";
import google from "../assets/custom/google.svg";

export default {
  title: "Ui/Etiquetas/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card
    price={200}
    description="Una zapatilla"
    title="Zapatilla"
    category="Calzados"
    image={google}
  />
);

export const Basic = Template.bind({});
Basic.args = {};

// export const Dark = Template.bind({});
// Dark.args = {
//   dark: true,
//   icon: login,
//   facebook: facebook,
//   google: google,
//   onEvent: (value) => {
//     console.log(value);
//   },
// };
