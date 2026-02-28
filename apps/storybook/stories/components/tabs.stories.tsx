import { Tabs, TabsContent, TabsList, TabsTrigger } from "@aac/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="space-y-2 rounded-lg border p-4">
          <h3 className="text-lg font-medium">Account</h3>
          <p className="text-sm text-muted-foreground">
            Make changes to your account here. Click save when you are done.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="space-y-2 rounded-lg border p-4">
          <h3 className="text-lg font-medium">Password</h3>
          <p className="text-sm text-muted-foreground">
            Change your password here. After saving, you will be logged out.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const LineVariant: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList variant="line">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="space-y-2 rounded-lg border p-4">
          <h3 className="text-lg font-medium">Overview</h3>
          <p className="text-sm text-muted-foreground">
            A high-level summary of your project metrics and status.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="analytics">
        <div className="space-y-2 rounded-lg border p-4">
          <h3 className="text-lg font-medium">Analytics</h3>
          <p className="text-sm text-muted-foreground">Detailed analytics and trends over time.</p>
        </div>
      </TabsContent>
      <TabsContent value="reports">
        <div className="space-y-2 rounded-lg border p-4">
          <h3 className="text-lg font-medium">Reports</h3>
          <p className="text-sm text-muted-foreground">
            Generate and download reports for stakeholders.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="general" orientation="vertical" className="w-[500px]">
      <TabsList>
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="general">
        <div className="space-y-2 rounded-lg border p-4">
          <h3 className="text-lg font-medium">General Settings</h3>
          <p className="text-sm text-muted-foreground">
            Configure general application preferences and display options.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="security">
        <div className="space-y-2 rounded-lg border p-4">
          <h3 className="text-lg font-medium">Security Settings</h3>
          <p className="text-sm text-muted-foreground">
            Manage two-factor authentication, sessions, and API keys.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="notifications">
        <div className="space-y-2 rounded-lg border p-4">
          <h3 className="text-lg font-medium">Notification Preferences</h3>
          <p className="text-sm text-muted-foreground">
            Choose which notifications you want to receive and how.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Tabs defaultValue="active" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value="other">Other</TabsTrigger>
      </TabsList>
      <TabsContent value="active">
        <div className="space-y-2 rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">
            This tab is active. The middle tab is disabled.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="other">
        <div className="space-y-2 rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">Content for the other tab.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};
