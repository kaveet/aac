import { Label, Textarea } from "@aac/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Type your message here...",
    className: "w-80",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-2">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Type your message here..." />
    </div>
  ),
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue:
      "This is a textarea with some default content that demonstrates how text wraps within the component.",
    className: "w-80",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "This textarea is disabled",
    disabled: true,
    className: "w-80",
  },
};

export const WithRows: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-2">
      <Label htmlFor="bio">Bio</Label>
      <Textarea id="bio" placeholder="Tell us about yourself..." rows={6} />
    </div>
  ),
};

export const Invalid: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-2">
      <Label>Description</Label>
      <Textarea placeholder="Required field" aria-invalid="true" />
      <p className="text-destructive text-sm">This field is required.</p>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium">Default</p>
        <Textarea placeholder="Default textarea" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium">With content</p>
        <Textarea defaultValue="Some pre-filled content in the textarea." />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium">Disabled</p>
        <Textarea placeholder="Disabled" disabled />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium">Invalid</p>
        <Textarea placeholder="Invalid state" aria-invalid="true" />
      </div>
    </div>
  ),
};
