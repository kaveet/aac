# UI Skill — shadcn/ui + Tailwind CSS v4

## Overview

The UI package (`@aac/ui`) contains all shared components built on shadcn/ui with Tailwind CSS v4.

## Adding a New shadcn Component

```bash
cd packages/ui
npx shadcn@latest add <component-name>
```

Then export it from `packages/ui/src/index.ts`.

## Using Components

```typescript
import { Button, Card, CardHeader, CardTitle } from "@aac/ui";
```

## Theme System

- CSS variables defined in `packages/ui/src/globals.css`
- Light/dark mode via `next-themes` with `class` strategy
- Design tokens follow shadcn conventions (background, foreground, primary, etc.)

## Adding a Storybook Story

Create a file in `apps/storybook/stories/components/<name>.stories.tsx`:

```typescript
import { MyComponent } from "@aac/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/MyComponent",
  component: MyComponent,
  tags: ["autodocs"],
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { /* ... */ } };
```

## Tailwind v4 Notes

- Uses `@import "tailwindcss"` instead of directives
- CSS variables for theming via `@theme` block
- `@custom-variant dark` for dark mode
