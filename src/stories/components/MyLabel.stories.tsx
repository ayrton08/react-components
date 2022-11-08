import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
  title: "Ui/Etiquetas/Label",
  component: MyLabel,
  argTypes: {
    color: { control: "select" },
    backgroundCustom: { control: "color" },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});
// definir un valor inicial por default
Basic.args = {
  size: "h2",
  allCaps: false,
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  size: "normal",
  allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "normal",
  color: "blue",
};

export const Terciary = Template.bind({});
Terciary.args = {
  size: "normal",
  color: "red",
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  size: "h1",
  color: "normal",
};
