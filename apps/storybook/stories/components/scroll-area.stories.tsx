import { ScrollArea, ScrollBar, Separator } from "@aac/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const tags = Array.from({ length: 50 }).map((_, i) => `v1.${i}.0`);

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max gap-4 p-4">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`item-${i + 1}`}
            className="flex h-24 w-36 shrink-0 items-center justify-center rounded-md bg-muted"
          >
            <span className="text-sm font-medium">Item {i + 1}</span>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

export const LongContent: Story = {
  render: () => (
    <ScrollArea className="h-[300px] w-[350px] rounded-md border p-4">
      <h4 className="mb-4 text-sm font-medium leading-none">Changelog</h4>
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={`entry-${i + 1}`} className="mb-4">
          <p className="text-sm font-medium">Release {20 - i}.0</p>
          <p className="text-sm text-muted-foreground">
            Bug fixes and performance improvements. Updated dependencies and resolved compatibility
            issues with the latest platform version.
          </p>
          {i < 19 && <Separator className="mt-4" />}
        </div>
      ))}
    </ScrollArea>
  ),
};
