import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Field } from "../../components/Field";
import { FieldProps } from "../../components/Field";

export default {
  title: "Ui/Etiquetas/Field",
  component: Field,
} as ComponentMeta<typeof Field>;

const Template: ComponentStory<typeof Field> = (args) => <Field label="Email" />;

export const Basic = Template.bind({});
// definir un valor inicial por default
Basic.args = {
  label: "Email",
};

// export const AllCaps = Template.bind({});
// AllCaps.args = {
//   size: "normal",
//   allCaps: true,
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   size: "normal",
//   color: "blue",
// };

// export const Terciary = Template.bind({});
// Terciary.args = {
//   size: "normal",
//   color: "red",
// };

// export const CustomFontColor = Template.bind({});
// CustomFontColor.args = {
//   size: "h1",
//   color: "normal",
// };
