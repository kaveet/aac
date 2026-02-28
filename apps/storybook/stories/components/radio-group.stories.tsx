import { Label, RadioGroup, RadioGroupItem } from "@aac/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="option-1" />
        <Label htmlFor="option-1">Option One</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="option-2" />
        <Label htmlFor="option-2">Option Two</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-3" id="option-3" />
        <Label htmlFor="option-3">Option Three</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Label>Notification preference</Label>
      <RadioGroup defaultValue="email">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="email" id="notif-email" />
          <Label htmlFor="notif-email">Email</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="sms" id="notif-sms" />
          <Label htmlFor="notif-sms">SMS</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="push" id="notif-push" />
          <Label htmlFor="notif-push">Push notification</Label>
        </div>
      </RadioGroup>
    </div>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="small" className="flex flex-row gap-4">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="small" id="size-small" />
        <Label htmlFor="size-small">Small</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="medium" id="size-medium" />
        <Label htmlFor="size-medium">Medium</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="large" id="size-large" />
        <Label htmlFor="size-large">Large</Label>
      </div>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1" disabled>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="disabled-1" />
        <Label htmlFor="disabled-1">Option One</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="disabled-2" />
        <Label htmlFor="disabled-2">Option Two</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithDisabledItem: Story = {
  render: () => (
    <RadioGroup defaultValue="active">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="active" id="mix-active" />
        <Label htmlFor="mix-active">Active</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="disabled" id="mix-disabled" disabled />
        <Label htmlFor="mix-disabled">Disabled option</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="another" id="mix-another" />
        <Label htmlFor="mix-another">Another option</Label>
      </div>
    </RadioGroup>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Vertical (default)</p>
        <RadioGroup defaultValue="a">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="a" id="vert-a" />
            <Label htmlFor="vert-a">Option A</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="b" id="vert-b" />
            <Label htmlFor="vert-b">Option B</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Horizontal</p>
        <RadioGroup defaultValue="x" className="flex flex-row gap-4">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="x" id="horiz-x" />
            <Label htmlFor="horiz-x">X</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="y" id="horiz-y" />
            <Label htmlFor="horiz-y">Y</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="z" id="horiz-z" />
            <Label htmlFor="horiz-z">Z</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Disabled</p>
        <RadioGroup defaultValue="d1" disabled>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="d1" id="dis-1" />
            <Label htmlFor="dis-1">Disabled A</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="d2" id="dis-2" />
            <Label htmlFor="dis-2">Disabled B</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
};
