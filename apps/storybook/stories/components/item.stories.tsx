import {
  Badge,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@aac/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Item",
  component: Item,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "muted"],
    },
    size: {
      control: "select",
      options: ["default", "sm"],
    },
  },
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[450px]">
      <Item>
        <ItemContent>
          <ItemTitle>Default Item</ItemTitle>
          <ItemDescription>This is a basic item with a title and description.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  ),
};

export const WithMediaIcon: Story = {
  render: () => (
    <div className="w-[450px]">
      <Item>
        <ItemMedia variant="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Item with Icon</ItemTitle>
          <ItemDescription>An item displaying an icon in the media slot.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  ),
};

export const WithActions: Story = {
  render: () => (
    <div className="w-[450px]">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Actionable Item</ItemTitle>
          <ItemDescription>This item has action buttons.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Badge variant="secondary">New</Badge>
        </ItemActions>
      </Item>
    </div>
  ),
};

export const WithHeaderAndFooter: Story = {
  render: () => (
    <div className="w-[450px]">
      <Item variant="outline">
        <ItemHeader>
          <ItemTitle>Project Report</ItemTitle>
          <Badge>Active</Badge>
        </ItemHeader>
        <ItemContent>
          <ItemDescription>
            Quarterly performance report with updated metrics and KPIs.
          </ItemDescription>
        </ItemContent>
        <ItemFooter>
          <span className="text-xs text-muted-foreground">Updated 2 hours ago</span>
          <span className="text-xs text-muted-foreground">3 attachments</span>
        </ItemFooter>
      </Item>
    </div>
  ),
};

export const GroupWithSeparators: Story = {
  render: () => (
    <div className="w-[450px] rounded-md border">
      <ItemGroup>
        <Item size="sm">
          <ItemMedia variant="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
            >
              <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
            </svg>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Documents</ItemTitle>
            <ItemDescription>12 files</ItemDescription>
          </ItemContent>
        </Item>
        <ItemSeparator />
        <Item size="sm">
          <ItemMedia variant="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Photos</ItemTitle>
            <ItemDescription>48 images</ItemDescription>
          </ItemContent>
        </Item>
        <ItemSeparator />
        <Item size="sm">
          <ItemMedia variant="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
            >
              <path d="M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0" />
            </svg>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Music</ItemTitle>
            <ItemDescription>5 albums</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex w-[450px] flex-col gap-4">
      <Item variant="default">
        <ItemContent>
          <ItemTitle>Default Variant</ItemTitle>
          <ItemDescription>Transparent background, no border.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Outline Variant</ItemTitle>
          <ItemDescription>With a visible border.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>Muted Variant</ItemTitle>
          <ItemDescription>With a subtle muted background.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  ),
};
