import { Button, Toaster } from "@aac/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "next-themes";
import { toast } from "sonner";

const meta = {
  title: "Components/Sonner",
  component: Toaster,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="light">
        <Story />
        <Toaster />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
        })
      }
    >
      Show Toast
    </Button>
  ),
};

export const Success: Story = {
  render: () => (
    <Button variant="outline" onClick={() => toast.success("Profile updated successfully")}>
      Show Success Toast
    </Button>
  ),
};

export const ErrorToast: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast.error("Something went wrong", {
          description: "There was a problem with your request.",
        })
      }
    >
      Show Error Toast
    </Button>
  ),
};

export const Warning: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast.warning("Warning", {
          description: "Your session is about to expire.",
        })
      }
    >
      Show Warning Toast
    </Button>
  ),
};

export const Info: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast.info("Information", {
          description: "A new version is available for download.",
        })
      }
    >
      Show Info Toast
    </Button>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast("File deleted", {
          action: {
            label: "Undo",
            onClick: () => toast.success("File restored"),
          },
        })
      }
    >
      Show Toast with Action
    </Button>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={() => toast("Default toast message")}>
        Default
      </Button>
      <Button variant="outline" onClick={() => toast.success("Success message")}>
        Success
      </Button>
      <Button variant="outline" onClick={() => toast.error("Error message")}>
        Error
      </Button>
      <Button variant="outline" onClick={() => toast.warning("Warning message")}>
        Warning
      </Button>
      <Button variant="outline" onClick={() => toast.info("Info message")}>
        Info
      </Button>
      <Button variant="outline" onClick={() => toast.loading("Loading message")}>
        Loading
      </Button>
    </div>
  ),
};
