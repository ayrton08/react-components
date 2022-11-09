import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Card } from "../../components/Card";
import shoe from "../assets/custom/shoe.svg";

export default {
  title: "Ui/Etiquetas/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card
    price={200}
    description="The best shoe in the world"
    title="Shoe"
    category="Shoes"
    image={shoe}
  />
);

export const Basic = Template.bind({});
Basic.args = {
  dark: "light",
};

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
