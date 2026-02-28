import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Foundations/Typography",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Headings: Story = {
  render: () => (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold tracking-tight">Heading 1</h1>
      <h2 className="text-3xl font-semibold tracking-tight">Heading 2</h2>
      <h3 className="text-2xl font-semibold tracking-tight">Heading 3</h3>
      <h4 className="text-xl font-semibold tracking-tight">Heading 4</h4>
      <p className="text-base leading-7">Body text - The quick brown fox jumps over the lazy dog.</p>
      <p className="text-muted-foreground text-sm">
        Muted text - Secondary information and descriptions.
      </p>
      <p className="text-xs">Small text - Fine print and metadata.</p>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-background text-foreground rounded-lg border p-4">
        background / foreground
      </div>
      <div className="bg-primary text-primary-foreground rounded-lg p-4">primary</div>
      <div className="bg-secondary text-secondary-foreground rounded-lg p-4">secondary</div>
      <div className="bg-muted text-muted-foreground rounded-lg p-4">muted</div>
      <div className="bg-accent text-accent-foreground rounded-lg p-4">accent</div>
      <div className="bg-destructive text-destructive-foreground rounded-lg p-4">destructive</div>
    </div>
  ),
};
