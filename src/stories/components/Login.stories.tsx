import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Login } from "../../components/Login";

export default {
  title: "Ui/Etiquetas/Login",
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login />;

export const Basic = Template.bind({});
// definir un valor inicial por default
// Basic.args = {
//   label: "Email",
// };
