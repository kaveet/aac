import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  Input,
} from "@aac/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Field",
  component: Field,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["vertical", "horizontal", "responsive"],
    },
  },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Field className="w-80">
      <FieldLabel>Email</FieldLabel>
      <FieldContent>
        <Input type="email" placeholder="you@example.com" />
      </FieldContent>
    </Field>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Field className="w-80">
      <FieldLabel>Email</FieldLabel>
      <FieldContent>
        <Input type="email" placeholder="you@example.com" />
        <FieldDescription>We will never share your email.</FieldDescription>
      </FieldContent>
    </Field>
  ),
};

export const WithError: Story = {
  render: () => (
    <Field className="w-80" data-invalid="true">
      <FieldLabel>Email</FieldLabel>
      <FieldContent>
        <Input type="email" placeholder="you@example.com" aria-invalid />
        <FieldError>Please enter a valid email address.</FieldError>
      </FieldContent>
    </Field>
  ),
};

export const WithMultipleErrors: Story = {
  render: () => (
    <Field className="w-80" data-invalid="true">
      <FieldLabel>Password</FieldLabel>
      <FieldContent>
        <Input type="password" aria-invalid />
        <FieldError
          errors={[
            { message: "Must be at least 8 characters." },
            { message: "Must contain a number." },
          ]}
        />
      </FieldContent>
    </Field>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Field orientation="horizontal" className="w-96">
      <FieldLabel>Username</FieldLabel>
      <FieldContent>
        <Input placeholder="johndoe" />
      </FieldContent>
    </Field>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Field className="w-80" data-disabled="true">
      <FieldLabel>Email</FieldLabel>
      <FieldContent>
        <Input type="email" placeholder="you@example.com" disabled />
      </FieldContent>
    </Field>
  ),
};

export const FieldGroupExample: Story = {
  name: "Field Group",
  render: () => (
    <FieldSet className="w-80">
      <FieldLegend>Account Details</FieldLegend>
      <FieldGroup>
        <Field>
          <FieldLabel>First Name</FieldLabel>
          <FieldContent>
            <Input placeholder="John" />
          </FieldContent>
        </Field>
        <FieldSeparator />
        <Field>
          <FieldLabel>Last Name</FieldLabel>
          <FieldContent>
            <Input placeholder="Doe" />
          </FieldContent>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-96">
      <Field>
        <FieldLabel>Vertical (default)</FieldLabel>
        <FieldContent>
          <Input placeholder="Default orientation" />
          <FieldDescription>This is the vertical layout.</FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal">
        <FieldLabel>Horizontal</FieldLabel>
        <FieldContent>
          <Input placeholder="Horizontal layout" />
        </FieldContent>
      </Field>
      <Field data-invalid="true">
        <FieldLabel>With Error</FieldLabel>
        <FieldContent>
          <Input placeholder="Error state" aria-invalid />
          <FieldError>This field is required.</FieldError>
        </FieldContent>
      </Field>
      <Field data-disabled="true">
        <FieldLabel>Disabled</FieldLabel>
        <FieldContent>
          <Input placeholder="Disabled" disabled />
        </FieldContent>
      </Field>
    </div>
  ),
};
