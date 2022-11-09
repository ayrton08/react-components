import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Search } from "../../components/Search";

export default {
  title: "Ui/Etiquetas/Search",
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search />;

export const Basic = Template.bind({});
Basic.args = {};
