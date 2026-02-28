import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@aac/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-xs">
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, i) => (
            <CarouselItem key={`slide-${i + 1}`}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{i + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};

export const ThreePerView: Story = {
  render: () => (
    <div className="w-full max-w-sm">
      <Carousel opts={{ align: "start" }}>
        <CarouselContent className="-ml-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <CarouselItem key={`slide-${i + 1}`} className="basis-1/3 pl-2">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-4">
                  <span className="text-2xl font-semibold">{i + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="w-full max-w-xs">
      <Carousel orientation="vertical" className="w-full">
        <CarouselContent className="-mt-2 h-[250px]">
          {Array.from({ length: 5 }).map((_, i) => (
            <CarouselItem key={`slide-${i + 1}`} className="pt-2 basis-1/2">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{i + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};
