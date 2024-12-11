import { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Stack";

interface StackComponentProps extends ComponentProps<typeof Stack> {
  childrenQuantity?: number;
}

const meta: Meta<StackComponentProps> = {
  title: "Components/Stack",
  component: Stack,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    spacing: {
      control: "number",
      defaultValue: 4,
    },
    childrenQuantity: {
      control: "number",
    },
  },
};

export default meta;
type Story = StoryObj<StackComponentProps>;

const ExampleComponent: Story = {
  render: ({ childrenQuantity, ...props }) => (
    <Stack {...props}>
      {[...Array(childrenQuantity).keys()].map((n) => (
        <div key={n} className="w-32 h-32 bg-red-400 flex items-center justify-center text-3xl font-bold">
          {n + 1}
        </div>
      ))}
    </Stack>
  ),
};

export const Default: Story = {
  ...ExampleComponent,
  args: {
    spacing: 4,
    col: false,
    childrenQuantity: 2,
  },
};
