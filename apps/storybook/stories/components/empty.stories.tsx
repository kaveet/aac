import {
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@aac/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Empty",
  component: Empty,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "icon"],
      description: "EmptyMedia variant",
    },
  },
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Empty className="w-[500px]">
      <EmptyHeader>
        <EmptyMedia>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          </svg>
        </EmptyMedia>
        <EmptyTitle>No documents found</EmptyTitle>
        <EmptyDescription>
          You have not created any documents yet. Get started by creating your first document.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Create Document</Button>
      </EmptyContent>
    </Empty>
  ),
};

export const WithIconVariant: Story = {
  render: () => (
    <Empty className="w-[500px]">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="19" x2="19" y1="8" y2="14" />
            <line x1="22" x2="16" y1="11" y2="11" />
          </svg>
        </EmptyMedia>
        <EmptyTitle>No team members</EmptyTitle>
        <EmptyDescription>Invite team members to collaborate on this project.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">Invite Members</Button>
      </EmptyContent>
    </Empty>
  ),
};

export const Minimal: Story = {
  render: () => (
    <Empty className="w-[400px]">
      <EmptyHeader>
        <EmptyTitle>Nothing here yet</EmptyTitle>
        <EmptyDescription>Items will appear here once they are added.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
};

export const WithMultipleActions: Story = {
  render: () => (
    <Empty className="w-[500px]">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
          </svg>
        </EmptyMedia>
        <EmptyTitle>No payment methods</EmptyTitle>
        <EmptyDescription>Add a payment method to start making purchases.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button>Add Card</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </EmptyContent>
    </Empty>
  ),
};
