import { Label, NativeSelect, NativeSelectOptGroup, NativeSelectOption } from "@aac/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/NativeSelect",
  component: NativeSelect,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["default", "sm"],
    },
  },
} satisfies Meta<typeof NativeSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NativeSelect>
      <NativeSelectOption value="">Select a fruit...</NativeSelectOption>
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
      <NativeSelectOption value="grape">Grape</NativeSelectOption>
    </NativeSelect>
  ),
};

export const Small: Story = {
  render: () => (
    <NativeSelect size="sm">
      <NativeSelectOption value="">Select a fruit...</NativeSelectOption>
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
    </NativeSelect>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label>Favorite Fruit</Label>
      <NativeSelect>
        <NativeSelectOption value="">Choose one...</NativeSelectOption>
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
        <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
      </NativeSelect>
    </div>
  ),
};

export const WithOptGroups: Story = {
  render: () => (
    <NativeSelect>
      <NativeSelectOption value="">Select a food...</NativeSelectOption>
      <NativeSelectOptGroup label="Fruits">
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
        <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Vegetables">
        <NativeSelectOption value="carrot">Carrot</NativeSelectOption>
        <NativeSelectOption value="broccoli">Broccoli</NativeSelectOption>
        <NativeSelectOption value="spinach">Spinach</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  ),
};

export const Disabled: Story = {
  render: () => (
    <NativeSelect disabled>
      <NativeSelectOption value="">Select a fruit...</NativeSelectOption>
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
    </NativeSelect>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium">Default</p>
        <NativeSelect>
          <NativeSelectOption value="apple">Apple</NativeSelectOption>
          <NativeSelectOption value="banana">Banana</NativeSelectOption>
        </NativeSelect>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium">Small</p>
        <NativeSelect size="sm">
          <NativeSelectOption value="apple">Apple</NativeSelectOption>
          <NativeSelectOption value="banana">Banana</NativeSelectOption>
        </NativeSelect>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium">Disabled</p>
        <NativeSelect disabled>
          <NativeSelectOption value="apple">Apple</NativeSelectOption>
        </NativeSelect>
      </div>
    </div>
  ),
};
