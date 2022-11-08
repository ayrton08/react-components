import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Login } from "../../components/Login";
import login from "../assets/custom/login.svg";
import facebook from "../assets/custom/facebook.svg";
import google from "../assets/custom/google.svg";

export default {
  title: "Ui/Etiquetas/Login",
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const Light = Template.bind({});
Light.args = {
  dark: false,
  icon: login,
  facebook: facebook,
  google: google,
};

const on = (value: any) => {
  console.log(value);
};

export const Dark = Template.bind({});
Dark.args = {
  dark: true,
  icon: login,
  facebook: facebook,
  google: google,
  onEvent: on,
};
