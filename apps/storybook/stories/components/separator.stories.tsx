import { Separator } from "@aac/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div>
        <h4 className="text-sm font-medium">Section One</h4>
        <p className="text-muted-foreground text-sm">Content above the separator.</p>
      </div>
      <Separator />
      <div>
        <h4 className="text-sm font-medium">Section Two</h4>
        <p className="text-muted-foreground text-sm">Content below the separator.</p>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-5 items-center gap-4 text-sm">
      <span>Home</span>
      <Separator orientation="vertical" />
      <span>Settings</span>
      <Separator orientation="vertical" />
      <span>Profile</span>
    </div>
  ),
};
