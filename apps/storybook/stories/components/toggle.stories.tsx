import { Toggle } from "@aac/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Toggle",
    "aria-label": "Toggle",
  },
};

export const WithIcon: Story = {
  render: () => (
    <Toggle aria-label="Toggle bold">
      <BoldIcon />
    </Toggle>
  ),
};

export const WithTextAndIcon: Story = {
  render: () => (
    <Toggle aria-label="Toggle italic">
      <ItalicIcon />
      Italic
    </Toggle>
  ),
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
    "aria-label": "Toggle outline",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
    "aria-label": "Toggle small",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large",
    "aria-label": "Toggle large",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
    "aria-label": "Toggle disabled",
  },
};

export const Pressed: Story = {
  args: {
    defaultPressed: true,
    children: "Pressed",
    "aria-label": "Toggle pressed",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Variants</p>
        <div className="flex gap-4">
          <Toggle aria-label="Default">Default</Toggle>
          <Toggle variant="outline" aria-label="Outline">
            Outline
          </Toggle>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Sizes</p>
        <div className="flex items-center gap-4">
          <Toggle size="sm" aria-label="Small">
            Small
          </Toggle>
          <Toggle aria-label="Default">Default</Toggle>
          <Toggle size="lg" aria-label="Large">
            Large
          </Toggle>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">With Icons</p>
        <div className="flex gap-2">
          <Toggle aria-label="Bold">
            <BoldIcon />
          </Toggle>
          <Toggle aria-label="Italic">
            <ItalicIcon />
          </Toggle>
          <Toggle aria-label="Underline">
            <UnderlineIcon />
          </Toggle>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">States</p>
        <div className="flex gap-4">
          <Toggle defaultPressed aria-label="Pressed">
            Pressed
          </Toggle>
          <Toggle disabled aria-label="Disabled">
            Disabled
          </Toggle>
        </div>
      </div>
    </div>
  ),
};
