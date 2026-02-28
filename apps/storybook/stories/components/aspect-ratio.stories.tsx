import { AspectRatio } from "@aac/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/AspectRatio",
  component: AspectRatio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
};

export const Square: Story = {
  render: () => (
    <div className="w-[300px]">
      <AspectRatio ratio={1}>
        <div className="flex h-full w-full items-center justify-center rounded-md bg-muted">
          <span className="text-muted-foreground text-sm">1:1 Square</span>
        </div>
      </AspectRatio>
    </div>
  ),
};

export const Portrait: Story = {
  render: () => (
    <div className="w-[250px]">
      <AspectRatio ratio={3 / 4}>
        <div className="flex h-full w-full items-center justify-center rounded-md bg-muted">
          <span className="text-muted-foreground text-sm">3:4 Portrait</span>
        </div>
      </AspectRatio>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6">
      <div className="w-[300px]">
        <p className="mb-2 text-sm font-medium">16:9</p>
        <AspectRatio ratio={16 / 9}>
          <div className="flex h-full w-full items-center justify-center rounded-md bg-muted">
            <span className="text-muted-foreground text-sm">16:9</span>
          </div>
        </AspectRatio>
      </div>
      <div className="w-[200px]">
        <p className="mb-2 text-sm font-medium">1:1</p>
        <AspectRatio ratio={1}>
          <div className="flex h-full w-full items-center justify-center rounded-md bg-muted">
            <span className="text-muted-foreground text-sm">1:1</span>
          </div>
        </AspectRatio>
      </div>
      <div className="w-[200px]">
        <p className="mb-2 text-sm font-medium">4:3</p>
        <AspectRatio ratio={4 / 3}>
          <div className="flex h-full w-full items-center justify-center rounded-md bg-muted">
            <span className="text-muted-foreground text-sm">4:3</span>
          </div>
        </AspectRatio>
      </div>
    </div>
  ),
};
