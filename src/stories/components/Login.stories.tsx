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

const on = (value: any) => {
  console.log(value);
};
export const Basic = Template.bind({});
Basic.args = {
  dark: false,
};

export const Light = Template.bind({});
Light.args = {
  dark: false,
  icon: login,
  facebook: facebook,
  google: google,
};

export const Dark = Template.bind({});
Dark.args = {
  dark: true,
  icon: login,
  facebook: facebook,
  google: google,
  onEvent: on,
};

export const Passwordless = Template.bind({});
Passwordless.args = {
  dark: true,
  passwordless: true,
  icon: login,
  facebook: facebook,
  google: google,
  onEvent: on,
};
