import { HoverCard, HoverCardContent, HoverCardTrigger } from "@aac/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/HoverCard",
  component: HoverCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a
          href="#"
          className="text-sm font-medium underline underline-offset-4"
          onClick={(e) => e.preventDefault()}
        >
          @nextjs
        </a>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="flex size-10 items-center justify-center rounded-full bg-muted text-sm font-bold">
              N
            </div>
            <div>
              <p className="text-sm font-semibold">Next.js</p>
              <p className="text-xs text-muted-foreground">@nextjs</p>
            </div>
          </div>
          <p className="text-sm">
            The React Framework for the Web. Used by some of the world's largest companies.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>Joined December 2021</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const WithImage: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="cursor-pointer text-sm font-medium underline underline-offset-4">
          Hover over me
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-semibold">Product Preview</h4>
          <p className="text-sm text-muted-foreground">
            This hover card can display rich content including images, descriptions, and metadata.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>Updated 2 hours ago</span>
            <span>3 contributors</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
