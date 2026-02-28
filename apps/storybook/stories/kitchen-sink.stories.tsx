import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Input,
  Kbd,
  KbdGroup,
  Label,
  Progress,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Skeleton,
  Slider,
  Spinner,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Toggle,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@aac/ui";
import type { Meta, StoryObj } from "@storybook/react";
import {
  AlertCircleIcon,
  BoldIcon,
  GridIcon,
  InfoIcon,
  ItalicIcon,
  LayoutDashboardIcon,
  MessageSquareIcon,
  SettingsIcon,
  UnderlineIcon,
  UsersIcon,
} from "lucide-react";

const meta = {
  title: "Kitchen Sink",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj;

const themeColors = [
  {
    name: "Background",
    variable: "--background",
    bg: "bg-background",
    fg: "text-foreground",
    label: "foreground",
  },
  {
    name: "Primary",
    variable: "--primary",
    bg: "bg-primary",
    fg: "text-primary-foreground",
    label: "primary-foreground",
  },
  {
    name: "Secondary",
    variable: "--secondary",
    bg: "bg-secondary",
    fg: "text-secondary-foreground",
    label: "secondary-foreground",
  },
  {
    name: "Muted",
    variable: "--muted",
    bg: "bg-muted",
    fg: "text-muted-foreground",
    label: "muted-foreground",
  },
  {
    name: "Accent",
    variable: "--accent",
    bg: "bg-accent",
    fg: "text-accent-foreground",
    label: "accent-foreground",
  },
  {
    name: "Destructive",
    variable: "--destructive",
    bg: "bg-destructive",
    fg: "text-destructive-foreground",
    label: "destructive-foreground",
  },
  {
    name: "Card",
    variable: "--card",
    bg: "bg-card",
    fg: "text-card-foreground",
    label: "card-foreground",
  },
  {
    name: "Popover",
    variable: "--popover",
    bg: "bg-popover",
    fg: "text-popover-foreground",
    label: "popover-foreground",
  },
];

function SectionHeading({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <p className="text-muted-foreground mt-1 text-sm">{description}</p>
    </div>
  );
}

function ColorPalette() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Color Palette"
          description="Semantic color tokens from the design system theme."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {themeColors.map((color) => (
            <div key={color.name} className="overflow-hidden rounded-lg border">
              <div className={`${color.bg} ${color.fg} flex h-20 items-end p-3`}>
                <span className="text-sm font-medium">{color.name}</span>
              </div>
              <div className="bg-card space-y-1 p-3">
                <p className="font-mono text-xs">{color.variable}</p>
                <p className="text-muted-foreground font-mono text-xs">{color.label}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="overflow-hidden rounded-lg border">
            <div className="bg-sidebar text-sidebar-foreground flex h-16 items-end p-3">
              <span className="text-sm font-medium">Sidebar</span>
            </div>
            <div className="bg-card p-3">
              <p className="font-mono text-xs">--sidebar</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border">
            <div className="border-border flex h-16 items-center justify-center border-4 p-3">
              <span className="text-sm font-medium">Border</span>
            </div>
            <div className="bg-card p-3">
              <p className="font-mono text-xs">--border</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border">
            <div className="ring-ring flex h-16 items-center justify-center p-3 ring-4">
              <span className="text-sm font-medium">Ring</span>
            </div>
            <div className="bg-card p-3">
              <p className="font-mono text-xs">--ring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Typography() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Typography" description="Type scale and text styles." />
        <div className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-[120px_1fr]">
            <span className="text-muted-foreground self-center text-xs font-medium uppercase tracking-wider">
              4xl bold
            </span>
            <h1 className="text-4xl font-bold tracking-tight">The quick brown fox</h1>
          </div>
          <Separator />
          <div className="grid gap-6 sm:grid-cols-[120px_1fr]">
            <span className="text-muted-foreground self-center text-xs font-medium uppercase tracking-wider">
              3xl semi
            </span>
            <h2 className="text-3xl font-semibold tracking-tight">The quick brown fox</h2>
          </div>
          <Separator />
          <div className="grid gap-6 sm:grid-cols-[120px_1fr]">
            <span className="text-muted-foreground self-center text-xs font-medium uppercase tracking-wider">
              2xl semi
            </span>
            <h3 className="text-2xl font-semibold tracking-tight">The quick brown fox</h3>
          </div>
          <Separator />
          <div className="grid gap-6 sm:grid-cols-[120px_1fr]">
            <span className="text-muted-foreground self-center text-xs font-medium uppercase tracking-wider">
              xl semi
            </span>
            <h4 className="text-xl font-semibold tracking-tight">The quick brown fox</h4>
          </div>
          <Separator />
          <div className="grid gap-6 sm:grid-cols-[120px_1fr]">
            <span className="text-muted-foreground self-center text-xs font-medium uppercase tracking-wider">
              base
            </span>
            <p className="text-base leading-7">
              The quick brown fox jumps over the lazy dog. This is body text at the default size,
              used for paragraphs and general content throughout the application.
            </p>
          </div>
          <Separator />
          <div className="grid gap-6 sm:grid-cols-[120px_1fr]">
            <span className="text-muted-foreground self-center text-xs font-medium uppercase tracking-wider">
              sm muted
            </span>
            <p className="text-muted-foreground text-sm">
              Secondary text for descriptions, help text, and supporting content.
            </p>
          </div>
          <Separator />
          <div className="grid gap-6 sm:grid-cols-[120px_1fr]">
            <span className="text-muted-foreground self-center text-xs font-medium uppercase tracking-wider">
              xs
            </span>
            <p className="text-xs">Fine print, metadata, and captions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ButtonsAndBadges() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Buttons & Badges"
          description="Interactive controls and status indicators."
        />
        <div className="space-y-8">
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Button Variants</h3>
            <div className="flex flex-wrap gap-3">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Button Sizes</h3>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button>Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>
          <Separator />
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Badge Variants</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="ghost">Ghost</Badge>
            </div>
          </div>
          <Separator />
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Toggles</h3>
            <div className="flex gap-2">
              <Toggle aria-label="Bold">
                <BoldIcon className="size-4" />
              </Toggle>
              <Toggle aria-label="Italic">
                <ItalicIcon className="size-4" />
              </Toggle>
              <Toggle aria-label="Underline">
                <UnderlineIcon className="size-4" />
              </Toggle>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AvatarsSection() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Avatars"
          description="User representations at different sizes and in groups."
        />
        <div className="flex flex-wrap items-end gap-8">
          <div className="space-y-2 text-center">
            <Avatar size="sm">
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <p className="text-muted-foreground text-xs">Small</p>
          </div>
          <div className="space-y-2 text-center">
            <Avatar>
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <p className="text-muted-foreground text-xs">Default</p>
          </div>
          <div className="space-y-2 text-center">
            <Avatar size="lg">
              <AvatarFallback>LG</AvatarFallback>
            </Avatar>
            <p className="text-muted-foreground text-xs">Large</p>
          </div>
          <Separator orientation="vertical" className="h-10" />
          <div className="space-y-2">
            <AvatarGroup>
              <Avatar>
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>B</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>C</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>D</AvatarFallback>
              </Avatar>
              <AvatarGroupCount>+5</AvatarGroupCount>
            </AvatarGroup>
            <p className="text-muted-foreground text-xs">Group</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormControls() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Form Controls"
          description="Inputs, selects, toggles, and other form elements."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Text Inputs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="ks-name">Name</Label>
                <Input id="ks-name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ks-email">Email</Label>
                <Input id="ks-email" type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ks-disabled">Disabled</Label>
                <Input id="ks-disabled" placeholder="Cannot edit" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ks-bio">Bio</Label>
                <Textarea id="ks-bio" placeholder="Tell us about yourself..." rows={3} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Selection & Toggles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="ks-role">Role</Label>
                <Select>
                  <SelectTrigger id="ks-role">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="editor">Editor</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-3">
                <Label>Preferences</Label>
                <div className="flex items-center gap-2">
                  <Checkbox id="ks-check1" defaultChecked />
                  <Label htmlFor="ks-check1">Enable sound effects</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="ks-check2" />
                  <Label htmlFor="ks-check2">High contrast mode</Label>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="ks-switch">Auto-save boards</Label>
                <Switch id="ks-switch" defaultChecked />
              </div>
              <div className="space-y-3">
                <Label>Board layout</Label>
                <RadioGroup defaultValue="grid">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="grid" id="ks-layout-grid" />
                    <Label htmlFor="ks-layout-grid">Grid</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="list" id="ks-layout-list" />
                    <Label htmlFor="ks-layout-list">List</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label>Volume</Label>
                <Slider defaultValue={[75]} max={100} step={1} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function FeedbackSection() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Feedback & Status"
          description="Alerts, progress indicators, loading states, and tooltips."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <Alert>
              <InfoIcon />
              <AlertTitle>Board published</AlertTitle>
              <AlertDescription>Your AAC board is now visible to communicators.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircleIcon />
              <AlertTitle>Missing symbols</AlertTitle>
              <AlertDescription>3 cells reference symbols that have been removed.</AlertDescription>
            </Alert>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Board completion</span>
                <span className="text-muted-foreground">18 / 24 cells</span>
              </div>
              <Progress value={75} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Vocabulary coverage</span>
                <span className="text-muted-foreground">142 / 200 words</span>
              </div>
              <Progress value={71} />
            </div>
            <div className="space-y-3">
              <span className="text-sm font-medium">Loading states</span>
              <div className="flex items-center gap-4">
                <Skeleton className="size-12 rounded-lg" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Spinner />
                <span className="text-muted-foreground text-sm">Loading board...</span>
              </div>
            </div>
            <TooltipProvider>
              <div className="flex gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="sm">
                      Hover me
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This is a tooltip</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="sm">
                      With shortcut
                      <KbdGroup>
                        <Kbd>Ctrl</Kbd>
                        <Kbd>K</Kbd>
                      </KbdGroup>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Open command palette</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </section>
  );
}

function AppLayout() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="App Layout"
          description="Sidebar navigation with tabbed content area."
        />
        <Card className="overflow-hidden">
          <div className="flex min-h-[420px]">
            <div className="w-[220px] shrink-0 border-r p-4">
              <div className="mb-4 flex items-center gap-2 px-2">
                <MessageSquareIcon className="text-primary size-5" />
                <span className="text-sm font-semibold">AAC Manager</span>
              </div>
              <Accordion type="single" collapsible defaultValue="boards">
                <AccordionItem value="boards" className="border-none">
                  <AccordionTrigger className="px-2 py-1.5 text-sm hover:no-underline">
                    Boards
                  </AccordionTrigger>
                  <AccordionContent className="pb-0">
                    <nav className="flex flex-col gap-1 pl-2">
                      <a
                        href="#"
                        className="bg-accent text-accent-foreground flex items-center gap-2 rounded-md px-2 py-1.5 text-sm"
                      >
                        <GridIcon className="size-4" />
                        My Boards
                      </a>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-foreground flex items-center gap-2 rounded-md px-2 py-1.5 text-sm"
                      >
                        <LayoutDashboardIcon className="size-4" />
                        Templates
                      </a>
                    </nav>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="communicators" className="border-none">
                  <AccordionTrigger className="px-2 py-1.5 text-sm hover:no-underline">
                    Communicators
                  </AccordionTrigger>
                  <AccordionContent className="pb-0">
                    <nav className="flex flex-col gap-1 pl-2">
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-foreground flex items-center gap-2 rounded-md px-2 py-1.5 text-sm"
                      >
                        <UsersIcon className="size-4" />
                        Profiles
                      </a>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-foreground flex items-center gap-2 rounded-md px-2 py-1.5 text-sm"
                      >
                        <SettingsIcon className="size-4" />
                        Settings
                      </a>
                    </nav>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="flex-1 p-6">
              <Tabs defaultValue="boards">
                <TabsList>
                  <TabsTrigger value="boards">Boards</TabsTrigger>
                  <TabsTrigger value="recent">Recent</TabsTrigger>
                  <TabsTrigger value="shared">Shared</TabsTrigger>
                </TabsList>
                <TabsContent value="boards" className="mt-4">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      { title: "Core Words", desc: "Essential everyday vocabulary", cells: 24 },
                      { title: "Feelings", desc: "Emotions and states of being", cells: 16 },
                      { title: "Food & Drink", desc: "Mealtime vocabulary", cells: 20 },
                    ].map((board) => (
                      <Card
                        key={board.title}
                        className="cursor-pointer transition-shadow hover:shadow-md"
                      >
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">{board.title}</CardTitle>
                          <CardDescription>{board.desc}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground text-xs">
                              {board.cells} cells
                            </span>
                            <Badge variant="secondary">Published</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="recent" className="mt-4">
                  <p className="text-muted-foreground text-sm">
                    Recently accessed boards will appear here.
                  </p>
                </TabsContent>
                <TabsContent value="shared" className="mt-4">
                  <p className="text-muted-foreground text-sm">
                    Boards shared with you by other users.
                  </p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

export const Default: Story = {
  render: () => (
    <div className="bg-background text-foreground min-h-screen">
      <div className="border-b py-8">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-3xl font-bold tracking-tight">Design System</h1>
          <p className="text-muted-foreground mt-1">
            Component gallery and brand reference for the AAC platform.
          </p>
        </div>
      </div>
      <ColorPalette />
      <Separator />
      <Typography />
      <Separator />
      <ButtonsAndBadges />
      <Separator />
      <AvatarsSection />
      <Separator />
      <FormControls />
      <Separator />
      <FeedbackSection />
      <Separator />
      <AppLayout />
      <footer className="py-8">
        <div className="mx-auto max-w-6xl px-6">
          <Separator className="mb-6" />
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground text-xs">AAC Design System</p>
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground text-xs">Command palette</span>
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <Kbd>K</Kbd>
              </KbdGroup>
            </div>
          </div>
        </div>
      </footer>
    </div>
  ),
};
