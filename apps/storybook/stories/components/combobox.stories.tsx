import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  Label,
} from "@aac/ui";
import type { Meta, StoryObj } from "@storybook/react";

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "nuxt", label: "Nuxt" },
  { value: "svelte", label: "SvelteKit" },
];

const meta = {
  title: "Components/Combobox",
  component: Combobox,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Combobox>
      <ComboboxInput placeholder="Select a framework..." />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxEmpty>No results found.</ComboboxEmpty>
          {frameworks.map((fw) => (
            <ComboboxItem key={fw.value} value={fw.value}>
              {fw.label}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label>Framework</Label>
      <Combobox>
        <ComboboxInput placeholder="Select a framework..." />
        <ComboboxContent>
          <ComboboxList>
            <ComboboxEmpty>No results found.</ComboboxEmpty>
            {frameworks.map((fw) => (
              <ComboboxItem key={fw.value} value={fw.value}>
                {fw.label}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  ),
};

export const WithClear: Story = {
  render: () => (
    <Combobox>
      <ComboboxInput placeholder="Select a framework..." showClear />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxEmpty>No results found.</ComboboxEmpty>
          {frameworks.map((fw) => (
            <ComboboxItem key={fw.value} value={fw.value}>
              {fw.label}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Combobox disabled>
      <ComboboxInput placeholder="Select a framework..." />
      <ComboboxContent>
        <ComboboxList>
          {frameworks.map((fw) => (
            <ComboboxItem key={fw.value} value={fw.value}>
              {fw.label}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <Combobox>
      <ComboboxInput placeholder="Select a framework..." />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxEmpty>No results found.</ComboboxEmpty>
          <ComboboxGroup>
            <ComboboxLabel>React-based</ComboboxLabel>
            <ComboboxItem value="next">Next.js</ComboboxItem>
            <ComboboxItem value="remix">Remix</ComboboxItem>
          </ComboboxGroup>
          <ComboboxGroup>
            <ComboboxLabel>Other</ComboboxLabel>
            <ComboboxItem value="astro">Astro</ComboboxItem>
            <ComboboxItem value="nuxt">Nuxt</ComboboxItem>
            <ComboboxItem value="svelte">SvelteKit</ComboboxItem>
          </ComboboxGroup>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
};
