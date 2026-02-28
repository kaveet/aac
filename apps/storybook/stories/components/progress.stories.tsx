import { Progress } from "@aac/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Progress value={50} className="w-[300px]" />,
};

export const Empty: Story = {
  render: () => <Progress value={0} className="w-[300px]" />,
};

export const Full: Story = {
  render: () => <Progress value={100} className="w-[300px]" />,
};

export const AllStates: Story = {
  render: () => (
    <div className="flex w-[300px] flex-col gap-4">
      <div className="space-y-1">
        <span className="text-sm">0%</span>
        <Progress value={0} />
      </div>
      <div className="space-y-1">
        <span className="text-sm">25%</span>
        <Progress value={25} />
      </div>
      <div className="space-y-1">
        <span className="text-sm">50%</span>
        <Progress value={50} />
      </div>
      <div className="space-y-1">
        <span className="text-sm">75%</span>
        <Progress value={75} />
      </div>
      <div className="space-y-1">
        <span className="text-sm">100%</span>
        <Progress value={100} />
      </div>
    </div>
  ),
};
