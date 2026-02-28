import { Label, Switch } from "@aac/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Switch />
        <Label>Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch size="sm" />
        <Label>Small</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch defaultChecked />
        <Label>Checked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch disabled />
        <Label>Disabled</Label>
      </div>
    </div>
  ),
};
