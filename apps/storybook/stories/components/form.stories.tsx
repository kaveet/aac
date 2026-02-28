import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@aac/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";

const meta = {
  title: "Components/Form",
  component: Form,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

function SimpleFormDemo() {
  const form = useForm<{ username: string }>({
    defaultValues: { username: "" },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})} className="flex w-80 flex-col gap-6">
        <FormField
          control={form.control}
          name="username"
          rules={{ required: "Username is required." }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="johndoe" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export const Default: Story = {
  render: () => <SimpleFormDemo />,
};

function MultiFieldFormDemo() {
  const form = useForm<{ email: string; password: string }>({
    defaultValues: { email: "", password: "" },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})} className="flex w-80 flex-col gap-6">
        <FormField
          control={form.control}
          name="email"
          rules={{
            required: "Email is required.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address.",
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          rules={{
            required: "Password is required.",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters.",
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormDescription>Must be at least 8 characters.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </Form>
  );
}

export const MultiField: Story = {
  render: () => <MultiFieldFormDemo />,
};

function WithErrorsDemo() {
  const form = useForm<{ email: string }>({
    defaultValues: { email: "invalid" },
  });

  // Trigger validation on mount to show error
  form.formState.errors.email = {
    type: "pattern",
    message: "Enter a valid email address.",
  };

  return (
    <Form {...form}>
      <form className="flex w-80 flex-col gap-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage>Enter a valid email address.</FormMessage>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export const WithErrors: Story = {
  render: () => <WithErrorsDemo />,
};
