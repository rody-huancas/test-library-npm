import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    as: "p",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti a architecto eveniet ipsam? Obcaecati architecto, quia voluptate ea earum cupiditate. Expedita, accusantium. Eum omnis error fuga accusamus, iste iusto voluptatum!",
  },
};
