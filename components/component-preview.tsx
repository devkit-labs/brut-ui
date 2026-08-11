"use client";

import * as React from "react";
import {
   BookOpen,
   Bot,
   Bold,
   ChevronRight,
   ChevronsUpDown,
   CircleAlert,
   FileText,
   GalleryVerticalEnd,
   Inbox,
   Italic,
   Mail,
   Search,
   Settings,
   Sparkles,
   SquareTerminal,
   User,
} from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import type { ComponentSlug } from "@/lib/component-catalog";
import { formatComponentName } from "@/lib/component-catalog";
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/registry/brutalist/ui/accordion";
import {
   Alert,
   AlertDescription,
   AlertTitle,
} from "@/registry/brutalist/ui/alert";
import {
   AlertDialog,
   AlertDialogAction,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
   AlertDialogTrigger,
} from "@/registry/brutalist/ui/alert-dialog";
import { AspectRatio } from "@/registry/brutalist/ui/aspect-ratio";
import {
   Attachment,
   AttachmentContent,
   AttachmentDescription,
   AttachmentGroup,
   AttachmentMedia,
   AttachmentTitle,
} from "@/registry/brutalist/ui/attachment";
import {
   Avatar,
   AvatarFallback,
   AvatarGroup,
   AvatarGroupCount,
} from "@/registry/brutalist/ui/avatar";
import { Badge } from "@/registry/brutalist/ui/badge";
import {
   Bubble,
   BubbleContent,
   BubbleGroup,
   BubbleReactions,
} from "@/registry/brutalist/ui/bubble";
import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbPage,
   BreadcrumbSeparator,
} from "@/registry/brutalist/ui/breadcrumb";
import { Button } from "@/registry/brutalist/ui/button";
import { ButtonGroup } from "@/registry/brutalist/ui/button-group";
import { Calendar } from "@/registry/brutalist/ui/calendar";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/registry/brutalist/ui/card";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/registry/brutalist/ui/carousel";
import {
   ChartContainer,
   ChartTooltip,
   ChartTooltipContent,
} from "@/registry/brutalist/ui/chart";
import { Checkbox } from "@/registry/brutalist/ui/checkbox";
import {
   Collapsible,
   CollapsibleContent,
   CollapsibleTrigger,
} from "@/registry/brutalist/ui/collapsible";
import {
   Combobox,
   ComboboxContent,
   ComboboxEmpty,
   ComboboxInput,
   ComboboxItem,
   ComboboxList,
} from "@/registry/brutalist/ui/combobox";
import {
   Command,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
   CommandList,
   CommandShortcut,
} from "@/registry/brutalist/ui/command";
import {
   ContextMenu,
   ContextMenuContent,
   ContextMenuItem,
   ContextMenuTrigger,
} from "@/registry/brutalist/ui/context-menu";
import {
   Dialog,
   DialogClose,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/registry/brutalist/ui/dialog";
import {
   Drawer,
   DrawerContent,
   DrawerDescription,
   DrawerFooter,
   DrawerHeader,
   DrawerTitle,
   DrawerTrigger,
} from "@/registry/brutalist/ui/drawer";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/registry/brutalist/ui/dropdown-menu";
import {
   Empty,
   EmptyContent,
   EmptyDescription,
   EmptyHeader,
   EmptyMedia,
   EmptyTitle,
} from "@/registry/brutalist/ui/empty";
import {
   Field,
   FieldDescription,
   FieldGroup,
   FieldLabel,
} from "@/registry/brutalist/ui/field";
import {
   HoverCard,
   HoverCardContent,
   HoverCardTrigger,
} from "@/registry/brutalist/ui/hover-card";
import { Input } from "@/registry/brutalist/ui/input";
import {
   InputGroup,
   InputGroupAddon,
   InputGroupInput,
   InputGroupText,
} from "@/registry/brutalist/ui/input-group";
import {
   InputOTP,
   InputOTPGroup,
   InputOTPSeparator,
   InputOTPSlot,
} from "@/registry/brutalist/ui/input-otp";
import {
   Item,
   ItemActions,
   ItemContent,
   ItemDescription,
   ItemMedia,
   ItemTitle,
} from "@/registry/brutalist/ui/item";
import { Kbd, KbdGroup } from "@/registry/brutalist/ui/kbd";
import { Label } from "@/registry/brutalist/ui/label";
import {
   Marker,
   MarkerContent,
   MarkerIcon,
} from "@/registry/brutalist/ui/marker";
import {
   Menubar,
   MenubarContent,
   MenubarItem,
   MenubarMenu,
   MenubarSeparator,
   MenubarShortcut,
   MenubarTrigger,
} from "@/registry/brutalist/ui/menubar";
import {
   NativeSelect,
   NativeSelectOption,
} from "@/registry/brutalist/ui/native-select";
import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
} from "@/registry/brutalist/ui/navigation-menu";
import {
   Pagination,
   PaginationContent,
   PaginationEllipsis,
   PaginationItem,
   PaginationLink,
   PaginationNext,
   PaginationPrevious,
} from "@/registry/brutalist/ui/pagination";
import {
   Popover,
   PopoverContent,
   PopoverDescription,
   PopoverHeader,
   PopoverTitle,
   PopoverTrigger,
} from "@/registry/brutalist/ui/popover";
import {
   Progress,
   ProgressLabel,
   ProgressValue,
} from "@/registry/brutalist/ui/progress";
import {
   Questionnaire,
   QuestionnaireActions,
   QuestionnaireChoice,
   QuestionnaireChoices,
   QuestionnaireDescription,
   QuestionnaireItem,
   QuestionnaireProgress,
   QuestionnaireSubmit,
   QuestionnaireTitle,
} from "@/registry/brutalist/ui/questionnaire";
import {
   RadioGroup,
   RadioGroupItem,
} from "@/registry/brutalist/ui/radio-group";
import {
   ResizableHandle,
   ResizablePanel,
   ResizablePanelGroup,
} from "@/registry/brutalist/ui/resizable";
import { ScrollArea } from "@/registry/brutalist/ui/scroll-area";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/registry/brutalist/ui/select";
import { Separator } from "@/registry/brutalist/ui/separator";
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "@/registry/brutalist/ui/sheet";
import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarGroup,
   SidebarGroupContent,
   SidebarGroupLabel,
   SidebarHeader,
   SidebarInset,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
   SidebarMenuSub,
   SidebarMenuSubButton,
   SidebarMenuSubItem,
   SidebarProvider,
   SidebarRail,
   SidebarTrigger,
} from "@/registry/brutalist/ui/sidebar";
import { Skeleton } from "@/registry/brutalist/ui/skeleton";
import { Slider } from "@/registry/brutalist/ui/slider";
import { Spinner } from "@/registry/brutalist/ui/spinner";
import { Switch } from "@/registry/brutalist/ui/switch";
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/registry/brutalist/ui/table";
import {
   Tabs,
   TabsContent,
   TabsList,
   TabsTrigger,
} from "@/registry/brutalist/ui/tabs";
import { Textarea } from "@/registry/brutalist/ui/textarea";
import { Toggle } from "@/registry/brutalist/ui/toggle";
import {
   ToggleGroup,
   ToggleGroupItem,
} from "@/registry/brutalist/ui/toggle-group";
import { Toaster, toast } from "@/registry/brutalist/ui/toast";
import {
   Tooltip,
   TooltipContent,
   TooltipTrigger,
} from "@/registry/brutalist/ui/tooltip";

const chartData = [
   { month: "Apr", installs: 54 },
   { month: "May", installs: 82 },
   { month: "Jun", installs: 128 },
   { month: "Jul", installs: 176 },
   { month: "Aug", installs: 242 },
];

function NavigationPreviewLink({
   title,
   description,
   icon,
}: {
   title: string;
   description: string;
   icon?: React.ReactNode;
}) {
   return (
      <NavigationMenuLink
         href="#"
         onClick={(event) => event.preventDefault()}
         className="grid min-w-0 gap-1 p-3"
      >
         <span className="flex items-center gap-2 font-black">
            {icon}
            {title}
         </span>
         <span className="text-sm leading-snug font-medium text-muted-foreground">
            {description}
         </span>
      </NavigationMenuLink>
   );
}

function FoundationPreview({ slug }: { slug: ComponentSlug }) {
   return (
      <Card className="w-full max-w-md">
         <CardHeader>
            <Badge variant="secondary" className="w-fit">
               Foundation
            </Badge>
            <CardTitle>{formatComponentName(slug)}</CardTitle>
            <CardDescription>
               Installed from the current shadcn foundation and ready for its
               dedicated BRUT/UI styling pass.
            </CardDescription>
         </CardHeader>
         <CardContent className="grid gap-3">
            <Skeleton className="h-8 w-2/3" />
            <Skeleton className="h-16 w-full" />
         </CardContent>
      </Card>
   );
}

export function ComponentPreview({ slug }: { slug: ComponentSlug }) {
   switch (slug) {
      case "accordion":
         return (
            <Accordion className="w-full max-w-lg">
               <AccordionItem value="item-1">
                  <AccordionTrigger>
                     Does it preserve shadcn behavior?
                  </AccordionTrigger>
                  <AccordionContent>
                     Yes. The API and Base UI interaction model stay intact.
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value="item-2">
                  <AccordionTrigger>Can I tune the theme?</AccordionTrigger>
                  <AccordionContent>
                     Use the flavour, strength, and radius controls globally.
                  </AccordionContent>
               </AccordionItem>
            </Accordion>
         );

      case "alert":
         return (
            <Alert className="max-w-lg">
               <CircleAlert />
               <AlertTitle>Registry connected</AlertTitle>
               <AlertDescription>
                  Your project-wide brutalist theme is active.
               </AlertDescription>
            </Alert>
         );

      case "alert-dialog":
         return (
            <AlertDialog>
               <AlertDialogTrigger render={<Button variant="destructive" />}>
                  Delete item
               </AlertDialogTrigger>
               <AlertDialogContent>
                  <AlertDialogHeader>
                     <AlertDialogTitle>
                        Are you absolutely sure?
                     </AlertDialogTitle>
                     <AlertDialogDescription>
                        This action cannot be undone.
                     </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                     <AlertDialogCancel>Cancel</AlertDialogCancel>
                     <AlertDialogAction variant="destructive">
                        Continue
                     </AlertDialogAction>
                  </AlertDialogFooter>
               </AlertDialogContent>
            </AlertDialog>
         );

      case "aspect-ratio":
         return (
            <AspectRatio
               ratio={16 / 9}
               className="brut-surface grid w-full max-w-lg place-items-center bg-primary text-primary-foreground"
            >
               <span className="text-2xl font-black uppercase">16 : 9</span>
            </AspectRatio>
         );

      case "attachment":
         return (
            <AttachmentGroup>
               <Attachment>
                  <AttachmentMedia>
                     <FileText />
                  </AttachmentMedia>
                  <AttachmentContent>
                     <AttachmentTitle>registry.json</AttachmentTitle>
                     <AttachmentDescription>
                        14 KB · Ready
                     </AttachmentDescription>
                  </AttachmentContent>
               </Attachment>
               <Attachment state="uploading">
                  <AttachmentMedia>
                     <Spinner />
                  </AttachmentMedia>
                  <AttachmentContent>
                     <AttachmentTitle>components.zip</AttachmentTitle>
                     <AttachmentDescription>Uploading…</AttachmentDescription>
                  </AttachmentContent>
               </Attachment>
            </AttachmentGroup>
         );

      case "avatar":
         return (
            <AvatarGroup>
               <Avatar>
                  <AvatarFallback>AK</AvatarFallback>
               </Avatar>
               <Avatar>
                  <AvatarFallback>UI</AvatarFallback>
               </Avatar>
               <AvatarGroupCount>+3</AvatarGroupCount>
            </AvatarGroup>
         );

      case "badge":
         return (
            <div className="flex flex-wrap gap-3">
               <Badge>New</Badge>
               <Badge variant="secondary">Stable</Badge>
               <Badge variant="outline">Beta</Badge>
               <Badge variant="destructive">Hot</Badge>
            </div>
         );

      case "bubble":
         return (
            <BubbleGroup className="w-full max-w-md">
               <Bubble variant="secondary">
                  <BubbleContent>Can the entire theme be tuned?</BubbleContent>
               </Bubble>
               <Bubble align="end">
                  <BubbleContent>
                     Yes — flavour, strength, and radius are global.
                  </BubbleContent>
                  <BubbleReactions>⚡ 4</BubbleReactions>
               </Bubble>
            </BubbleGroup>
         );

      case "breadcrumb":
         return (
            <Breadcrumb>
               <BreadcrumbList>
                  <BreadcrumbItem>
                     <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                     <BreadcrumbLink href="/components">
                        Components
                     </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                     <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
               </BreadcrumbList>
            </Breadcrumb>
         );

      case "button":
         return (
            <div className="flex flex-wrap justify-center gap-4">
               <Button>Primary</Button>
               <Button variant="secondary">Secondary</Button>
               <Button variant="outline">Outline</Button>
               <Button variant="destructive">Delete</Button>
            </div>
         );

      case "button-group":
         return (
            <ButtonGroup>
               <Button variant="outline" size="sm">
                  Back
               </Button>
               <Button size="sm">Publish</Button>
               <Button variant="outline" size="sm">
                  More
               </Button>
            </ButtonGroup>
         );

      case "calendar":
         return (
            <Calendar
               mode="single"
               defaultMonth={new Date(2026, 7, 1)}
               selected={new Date(2026, 7, 8)}
            />
         );

      case "card":
         return (
            <Card className="w-full max-w-sm">
               <CardHeader>
                  <CardTitle>Brutalist card</CardTitle>
                  <CardDescription>
                     Panels carry more weight than controls.
                  </CardDescription>
               </CardHeader>
               <CardContent>
                  <Badge variant="secondary">Base UI</Badge>
               </CardContent>
               <CardFooter>
                  <Button size="sm">Inspect</Button>
               </CardFooter>
            </Card>
         );

      case "carousel":
         return (
            <Carousel className="w-full max-w-xs">
               <CarouselContent>
                  {["Button", "Card", "Dialog"].map((name, index) => (
                     <CarouselItem key={name}>
                        <div className="brut-surface grid aspect-[4/3] place-items-center bg-card text-2xl font-black uppercase">
                           <span>
                              {index + 1}. {name}
                           </span>
                        </div>
                     </CarouselItem>
                  ))}
               </CarouselContent>
               <CarouselPrevious className="left-3" />
               <CarouselNext className="right-3" />
            </Carousel>
         );

      case "chart":
         return (
            <ChartContainer
               className="h-64 w-full max-w-lg"
               config={{
                  installs: { label: "Installs", color: "var(--primary)" },
               }}
            >
               <BarChart accessibilityLayer data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <ChartTooltip
                     cursor={false}
                     content={<ChartTooltipContent indicator="line" />}
                  />
                  <Bar
                     dataKey="installs"
                     fill="var(--color-installs)"
                     radius={0}
                  />
               </BarChart>
            </ChartContainer>
         );

      case "checkbox":
         return (
            <div className="grid gap-4">
               <Label>
                  <Checkbox defaultChecked /> Accessible defaults
               </Label>
               <Label>
                  <Checkbox /> Include examples
               </Label>
            </div>
         );

      case "collapsible":
         return (
            <Collapsible defaultOpen className="w-full max-w-md">
               <div className="mb-4 flex items-center justify-between gap-4 px-1">
                  <span className="text-lg font-black">Order 4189</span>
                  <CollapsibleTrigger
                     render={
                        <Button
                           size="icon"
                           variant="outline"
                           aria-label="Toggle order details"
                        />
                     }
                  >
                     <ChevronsUpDown />
                  </CollapsibleTrigger>
               </div>
               <div className="brut-surface flex items-center justify-between gap-4 bg-card px-5 py-4 shadow-none">
                  <span className="font-semibold text-muted-foreground">
                     Status
                  </span>
                  <span className="font-black">Shipped</span>
               </div>
               <CollapsibleContent className="grid gap-3 pt-3">
                  <div className="brut-surface bg-card px-5 py-4 shadow-none">
                     <p className="font-black">Shipping address</p>
                     <p className="mt-1 font-medium text-muted-foreground">
                        100 Market St, San Francisco
                     </p>
                  </div>
                  <div className="brut-surface bg-card px-5 py-4 shadow-none">
                     <p className="font-black">Items</p>
                     <p className="mt-1 font-medium text-muted-foreground">
                        2x Studio Headphones
                     </p>
                  </div>
               </CollapsibleContent>
            </Collapsible>
         );

      case "combobox":
         return (
            <Combobox items={["Paper", "Signal", "Sky"]} defaultValue="Sky">
               <ComboboxInput className="w-64" placeholder="Choose a flavour" />
               <ComboboxContent>
                  <ComboboxEmpty>No flavour found.</ComboboxEmpty>
                  <ComboboxList>
                     {(item: string) => (
                        <ComboboxItem key={item} value={item}>
                           {item}
                        </ComboboxItem>
                     )}
                  </ComboboxList>
               </ComboboxContent>
            </Combobox>
         );

      case "command":
         return (
            <Command className="brut-surface w-full max-w-md bg-card">
               <CommandInput placeholder="Search commands..." />
               <CommandList>
                  <CommandEmpty>No results.</CommandEmpty>
                  <CommandGroup heading="Actions">
                     <CommandItem>
                        <Mail /> New message{" "}
                        <CommandShortcut>⌘M</CommandShortcut>
                     </CommandItem>
                     <CommandItem>
                        <Settings /> Settings{" "}
                        <CommandShortcut>⌘,</CommandShortcut>
                     </CommandItem>
                  </CommandGroup>
               </CommandList>
            </Command>
         );

      case "context-menu":
         return (
            <ContextMenu>
               <ContextMenuTrigger className="brut-surface grid h-36 w-full max-w-sm place-items-center bg-muted font-black uppercase">
                  Right click here
               </ContextMenuTrigger>
               <ContextMenuContent>
                  <ContextMenuItem>Back</ContextMenuItem>
                  <ContextMenuItem>Reload</ContextMenuItem>
                  <ContextMenuItem>Inspect</ContextMenuItem>
               </ContextMenuContent>
            </ContextMenu>
         );

      case "dialog":
         return (
            <Dialog>
               <DialogTrigger render={<Button />}>Edit project</DialogTrigger>
               <DialogContent>
                  <DialogHeader>
                     <DialogTitle>Edit project</DialogTitle>
                     <DialogDescription>
                        Update the project details, then save your changes.
                     </DialogDescription>
                  </DialogHeader>
                  <form
                     className="grid gap-5"
                     onSubmit={(event) => event.preventDefault()}
                  >
                     <div className="grid gap-2">
                        <Label htmlFor="dialog-project-name">Project name</Label>
                        <Input
                           id="dialog-project-name"
                           defaultValue="Brutalist registry"
                        />
                     </div>
                     <div className="grid gap-2">
                        <Label htmlFor="dialog-project-owner">Owner</Label>
                        <Input
                           id="dialog-project-owner"
                           defaultValue="Design systems team"
                        />
                     </div>
                     <DialogFooter>
                        <DialogClose
                           render={<Button type="button" variant="outline" />}
                        >
                           Cancel
                        </DialogClose>
                        <Button type="submit">Save changes</Button>
                     </DialogFooter>
                  </form>
               </DialogContent>
            </Dialog>
         );

      case "drawer":
         return (
            <Drawer>
               <DrawerTrigger render={<Button variant="outline" />}>
                  Open drawer
               </DrawerTrigger>
               <DrawerContent>
                  <DrawerHeader>
                     <DrawerTitle>Project settings</DrawerTitle>
                     <DrawerDescription>
                        Adjust the current project.
                     </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                     <Button>Save changes</Button>
                  </DrawerFooter>
               </DrawerContent>
            </Drawer>
         );

      case "dropdown-menu":
         return (
            <DropdownMenu>
               <DropdownMenuTrigger render={<Button variant="outline" />}>
                  Open menu
               </DropdownMenuTrigger>
               <DropdownMenuContent>
                  <DropdownMenuGroup>
                     <DropdownMenuLabel>Workspace</DropdownMenuLabel>
                     <DropdownMenuItem>
                        <User /> Profile
                     </DropdownMenuItem>
                     <DropdownMenuItem>
                        <Settings /> Settings
                     </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Sign out</DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>
         );

      case "empty":
         return (
            <Empty className="max-w-md">
               <EmptyHeader>
                  <EmptyMedia variant="icon">
                     <Inbox />
                  </EmptyMedia>
                  <EmptyTitle>No components found</EmptyTitle>
                  <EmptyDescription>
                     Try changing the current filter.
                  </EmptyDescription>
               </EmptyHeader>
               <EmptyContent>
                  <Button size="sm">Clear filters</Button>
               </EmptyContent>
            </Empty>
         );

      case "field":
         return (
            <FieldGroup className="w-full max-w-md">
               <Field>
                  <FieldLabel htmlFor="preview-name">Project name</FieldLabel>
                  <Input id="preview-name" placeholder="brutal-registry" />
                  <FieldDescription>
                     This appears in your registry metadata.
                  </FieldDescription>
               </Field>
            </FieldGroup>
         );

      case "hover-card":
         return (
            <HoverCard>
               <HoverCardTrigger render={<Button variant="link" />}>
                  @brut-ui
               </HoverCardTrigger>
               <HoverCardContent>
                  <div className="font-black uppercase">BRUT/UI</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                     shadcn behavior with harder edges.
                  </p>
               </HoverCardContent>
            </HoverCard>
         );

      case "input":
         return <Input className="max-w-sm" placeholder="you@example.com" />;

      case "input-group":
         return (
            <InputGroup className="max-w-md">
               <InputGroupAddon align="inline-start">
                  <Search />
               </InputGroupAddon>
               <InputGroupInput placeholder="Search components..." />
               <InputGroupAddon align="inline-end">
                  <InputGroupText className="font-black">
                     12 results
                  </InputGroupText>
               </InputGroupAddon>
            </InputGroup>
         );

      case "input-otp":
         return (
            <InputOTP maxLength={6}>
               <InputOTPGroup>
                  {[0, 1, 2].map((index) => (
                     <InputOTPSlot key={index} index={index} />
                  ))}
               </InputOTPGroup>
               <InputOTPSeparator />
               <InputOTPGroup>
                  {[3, 4, 5].map((index) => (
                     <InputOTPSlot key={index} index={index} />
                  ))}
               </InputOTPGroup>
            </InputOTP>
         );

      case "item":
         return (
            <Item variant="outline" className="max-w-md">
               <ItemMedia variant="icon">
                  <Mail />
               </ItemMedia>
               <ItemContent>
                  <ItemTitle>Registry update</ItemTitle>
                  <ItemDescription>
                     Two new components are ready.
                  </ItemDescription>
               </ItemContent>
               <ItemActions>
                  <Button size="sm">View</Button>
               </ItemActions>
            </Item>
         );

      case "kbd":
         return (
            <KbdGroup>
               <Kbd>Ctrl</Kbd>
               <span>+</span>
               <Kbd>K</Kbd>
            </KbdGroup>
         );

      case "label":
         return (
            <div className="grid w-full max-w-sm gap-2">
               <Label htmlFor="label-preview">Registry name</Label>
               <Input id="label-preview" placeholder="brut" />
            </div>
         );

      case "marker":
         return (
            <div className="grid w-full max-w-md gap-5">
               <Marker>
                  <MarkerIcon>
                     <Sparkles />
                  </MarkerIcon>
                  <MarkerContent>New components</MarkerContent>
               </Marker>
               <Marker variant="separator">
                  <MarkerContent>Today</MarkerContent>
               </Marker>
               <Marker variant="border">
                  <MarkerContent>Theme updated 2 minutes ago</MarkerContent>
               </Marker>
            </div>
         );

      case "menubar":
         return (
            <Menubar>
               <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                     <MenubarItem>
                        New tab <MenubarShortcut>⌘T</MenubarShortcut>
                     </MenubarItem>
                     <MenubarItem>
                        New window <MenubarShortcut>⌘N</MenubarShortcut>
                     </MenubarItem>
                     <MenubarItem>
                        Open file <MenubarShortcut>⌘O</MenubarShortcut>
                     </MenubarItem>
                     <MenubarSeparator />
                     <MenubarItem>
                        Save <MenubarShortcut>⌘S</MenubarShortcut>
                     </MenubarItem>
                     <MenubarItem>
                        Print <MenubarShortcut>⌘P</MenubarShortcut>
                     </MenubarItem>
                     <MenubarSeparator />
                     <MenubarItem>Close window</MenubarItem>
                  </MenubarContent>
               </MenubarMenu>
               <MenubarMenu>
                  <MenubarTrigger>Edit</MenubarTrigger>
                  <MenubarContent>
                     <MenubarItem>
                        Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                     </MenubarItem>
                     <MenubarItem>
                        Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                     </MenubarItem>
                     <MenubarSeparator />
                     <MenubarItem>
                        Cut <MenubarShortcut>⌘X</MenubarShortcut>
                     </MenubarItem>
                     <MenubarItem>
                        Copy <MenubarShortcut>⌘C</MenubarShortcut>
                     </MenubarItem>
                     <MenubarItem>
                        Paste <MenubarShortcut>⌘V</MenubarShortcut>
                     </MenubarItem>
                  </MenubarContent>
               </MenubarMenu>
               <MenubarMenu>
                  <MenubarTrigger>View</MenubarTrigger>
                  <MenubarContent>
                     <MenubarItem>
                        Toggle sidebar <MenubarShortcut>⌘B</MenubarShortcut>
                     </MenubarItem>
                     <MenubarItem>
                        Zoom in <MenubarShortcut>⌘+</MenubarShortcut>
                     </MenubarItem>
                     <MenubarItem>
                        Zoom out <MenubarShortcut>⌘−</MenubarShortcut>
                     </MenubarItem>
                     <MenubarSeparator />
                     <MenubarItem>Enter fullscreen</MenubarItem>
                  </MenubarContent>
               </MenubarMenu>
               <MenubarMenu>
                  <MenubarTrigger>Help</MenubarTrigger>
                  <MenubarContent>
                     <MenubarItem>Documentation</MenubarItem>
                     <MenubarItem>Keyboard shortcuts</MenubarItem>
                     <MenubarSeparator />
                     <MenubarItem>Report an issue</MenubarItem>
                  </MenubarContent>
               </MenubarMenu>
            </Menubar>
         );

      case "native-select":
         return (
            <NativeSelect defaultValue="solid" className="max-w-xs">
               <NativeSelectOption value="soft">Soft</NativeSelectOption>
               <NativeSelectOption value="solid">Solid</NativeSelectOption>
               <NativeSelectOption value="loud">Loud</NativeSelectOption>
            </NativeSelect>
         );

      case "navigation-menu":
         return (
            <NavigationMenu className="max-w-full">
               <NavigationMenuList className="flex-wrap">
                  <NavigationMenuItem>
                     <NavigationMenuTrigger>
                        Getting started
                     </NavigationMenuTrigger>
                     <NavigationMenuContent className="w-[min(31rem,calc(100vw-3rem))] p-2">
                        <div className="grid gap-1">
                           <NavigationPreviewLink
                              title="Introduction"
                              description="The ideas and tokens behind BRUT/UI."
                           />
                           <NavigationPreviewLink
                              title="Installation"
                              description="Add the base theme before installing components."
                           />
                           <NavigationPreviewLink
                              title="Theme tuning"
                              description="Configure flavour, strength, and radius project-wide."
                           />
                        </div>
                     </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                     <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                     <NavigationMenuContent className="w-[min(42rem,calc(100vw-3rem))] p-2">
                        <div className="grid gap-1 sm:grid-cols-2">
                           <NavigationPreviewLink
                              title="Alert Dialog"
                              description="Interrupt users with an important decision."
                           />
                           <NavigationPreviewLink
                              title="Hover Card"
                              description="Preview useful content behind a link."
                           />
                           <NavigationPreviewLink
                              title="Progress"
                              description="Show completion for a task or process."
                           />
                           <NavigationPreviewLink
                              title="Scroll Area"
                              description="Contain long content without losing structure."
                           />
                           <NavigationPreviewLink
                              title="Tabs"
                              description="Switch between related views and panels."
                           />
                           <NavigationPreviewLink
                              title="Tooltip"
                              description="Add concise context to an interface control."
                           />
                        </div>
                     </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                     <NavigationMenuTrigger>With icons</NavigationMenuTrigger>
                     <NavigationMenuContent className="w-[min(23rem,calc(100vw-3rem))] p-2">
                        <div className="grid gap-1">
                           <NavigationPreviewLink
                              icon={<Sparkles />}
                              title="New releases"
                              description="See the latest registry additions."
                           />
                           <NavigationPreviewLink
                              icon={<Settings />}
                              title="Theme controls"
                              description="Tune the visual system live."
                           />
                           <NavigationPreviewLink
                              icon={<User />}
                              title="Community"
                              description="Meet teams building louder interfaces."
                           />
                        </div>
                     </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                     <NavigationMenuLink
                        href="#"
                        onClick={(event) => event.preventDefault()}
                        className="font-black"
                     >
                        Docs
                     </NavigationMenuLink>
                  </NavigationMenuItem>
               </NavigationMenuList>
            </NavigationMenu>
         );

      case "pagination":
         return (
            <Pagination>
               <PaginationContent>
                  <PaginationItem>
                     <PaginationPrevious href="#" text="Previous" />
                  </PaginationItem>
                  <PaginationItem>
                     <PaginationLink href="#" isActive>
                        1
                     </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                     <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                     <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                     <PaginationNext href="#" text="Next" />
                  </PaginationItem>
               </PaginationContent>
            </Pagination>
         );

      case "popover":
         return (
            <Popover>
               <PopoverTrigger render={<Button variant="outline" />}>
                  Open popover
               </PopoverTrigger>
               <PopoverContent>
                  <PopoverHeader>
                     <PopoverTitle>Quick settings</PopoverTitle>
                     <PopoverDescription>
                        Change a local preference.
                     </PopoverDescription>
                  </PopoverHeader>
                  <Label className="flex items-center justify-between">
                     <span>Show grid</span>
                     <Switch defaultChecked size="sm" />
                  </Label>
               </PopoverContent>
            </Popover>
         );

      case "progress":
         return (
            <Progress value={68} className="w-full max-w-sm">
               <ProgressLabel>Build</ProgressLabel>
               <ProgressValue />
            </Progress>
         );

      case "questionnaire":
         return (
            <Questionnaire
               className="w-full max-w-md"
               items={[
                  {
                     name: "strength",
                     required: true,
                     choices: [
                        { value: "soft" },
                        { value: "solid" },
                        { value: "loud" },
                     ],
                  },
               ]}
               onSubmit={(event) => event.preventDefault()}
            >
               <QuestionnaireProgress>1 of 1</QuestionnaireProgress>
               <QuestionnaireItem name="strength" required>
                  <QuestionnaireTitle>
                     Choose your brutalist strength
                  </QuestionnaireTitle>
                  <QuestionnaireDescription>
                     You can change this again from the theme tuner.
                  </QuestionnaireDescription>
                  <QuestionnaireChoices>
                     <QuestionnaireChoice value="soft">
                        Soft
                     </QuestionnaireChoice>
                     <QuestionnaireChoice value="solid" defaultChecked>
                        Solid
                     </QuestionnaireChoice>
                     <QuestionnaireChoice value="loud">
                        Loud
                     </QuestionnaireChoice>
                  </QuestionnaireChoices>
               </QuestionnaireItem>
               <QuestionnaireActions>
                  <QuestionnaireSubmit>Apply</QuestionnaireSubmit>
               </QuestionnaireActions>
            </Questionnaire>
         );

      case "radio-group":
         return (
            <RadioGroup defaultValue="solid" className="max-w-xs">
               <Label>
                  <RadioGroupItem value="soft" /> Soft
               </Label>
               <Label>
                  <RadioGroupItem value="solid" /> Solid
               </Label>
               <Label>
                  <RadioGroupItem value="loud" /> Loud
               </Label>
            </RadioGroup>
         );

      case "resizable":
         return (
            <ResizablePanelGroup
               orientation="horizontal"
               className="h-44 max-w-xl"
            >
               <ResizablePanel defaultSize={50}>
                  <div className="grid h-full place-items-center font-black">
                     One
                  </div>
               </ResizablePanel>
               <ResizableHandle withHandle />
               <ResizablePanel defaultSize={50}>
                  <div className="grid h-full place-items-center bg-muted font-black">
                     Two
                  </div>
               </ResizablePanel>
            </ResizablePanelGroup>
         );

      case "scroll-area":
         return (
            <ScrollArea className="h-52 w-full max-w-sm border-2 border-border bg-card p-4">
               <div className="grid gap-3">
                  {Array.from({ length: 12 }, (_, index) => (
                     <div
                        key={index}
                        className="border-b border-border pb-2 font-bold"
                     >
                        Registry item {index + 1}
                     </div>
                  ))}
               </div>
            </ScrollArea>
         );

      case "select":
         return (
            <Select defaultValue="solid">
               <SelectTrigger className="w-52">
                  <SelectValue placeholder="Choose strength" />
               </SelectTrigger>
               <SelectContent>
                  <SelectItem value="soft">Soft</SelectItem>
                  <SelectItem value="solid">Solid</SelectItem>
                  <SelectItem value="loud">Loud</SelectItem>
               </SelectContent>
            </Select>
         );

      case "separator":
         return (
            <div className="w-full max-w-md text-center font-black uppercase">
               Components
               <Separator className="my-5" />
               Blocks
            </div>
         );

      case "sheet":
         return (
            <Sheet>
               <SheetTrigger render={<Button variant="outline" />}>
                  Open sheet
               </SheetTrigger>
               <SheetContent>
                  <SheetHeader>
                     <SheetTitle>Component filters</SheetTitle>
                     <SheetDescription>
                        Narrow the current catalog.
                     </SheetDescription>
                  </SheetHeader>
               </SheetContent>
            </Sheet>
         );

      case "sidebar":
         return (
            <SidebarProvider
               className="brut-panel relative h-[34rem] min-h-0 w-full max-w-4xl overflow-hidden bg-sidebar"
               style={
                  {
                     "--sidebar-width": "18rem",
                     "--sidebar-width-icon": "3.5rem",
                  } as React.CSSProperties
               }
            >
               <Sidebar
                  variant="inset"
                  collapsible="icon"
                  className="absolute! h-full!"
               >
                  <SidebarHeader>
                     <SidebarMenu>
                        <SidebarMenuItem>
                           <SidebarMenuButton size="lg" tooltip="BRUT/UI">
                              <span className="grid size-8 shrink-0 place-items-center bg-primary text-primary-foreground">
                                 <GalleryVerticalEnd />
                              </span>
                              <span className="grid min-w-0 flex-1 text-left leading-tight">
                                 <span className="truncate font-black">BRUT/UI</span>
                                 <span className="truncate text-xs text-muted-foreground">
                                    Component registry
                                 </span>
                              </span>
                              <ChevronsUpDown className="ml-auto" />
                           </SidebarMenuButton>
                        </SidebarMenuItem>
                     </SidebarMenu>
                  </SidebarHeader>

                  <SidebarContent>
                     <SidebarGroup>
                        <SidebarGroupLabel>Platform</SidebarGroupLabel>
                        <SidebarGroupContent>
                           <SidebarMenu>
                              <SidebarMenuItem>
                                 <SidebarMenuButton isActive tooltip="Playground">
                                    <SquareTerminal />
                                    <span>Playground</span>
                                    <ChevronRight className="ml-auto" />
                                 </SidebarMenuButton>
                                 <SidebarMenuSub>
                                    {["History", "Starred", "Settings"].map(
                                       (item) => (
                                          <SidebarMenuSubItem key={item}>
                                             <SidebarMenuSubButton href="#">
                                                <span>{item}</span>
                                             </SidebarMenuSubButton>
                                          </SidebarMenuSubItem>
                                       ),
                                    )}
                                 </SidebarMenuSub>
                              </SidebarMenuItem>

                              {([
                                 [Bot, "Models"],
                                 [BookOpen, "Documentation"],
                                 [Settings, "Settings"],
                              ] as const).map(([Icon, label]) => (
                                 <SidebarMenuItem key={label}>
                                    <SidebarMenuButton tooltip={label}>
                                       <Icon />
                                       <span>{label}</span>
                                       <ChevronRight className="ml-auto" />
                                    </SidebarMenuButton>
                                 </SidebarMenuItem>
                              ))}
                           </SidebarMenu>
                        </SidebarGroupContent>
                     </SidebarGroup>
                  </SidebarContent>

                  <SidebarFooter>
                     <SidebarMenu>
                        <SidebarMenuItem>
                           <SidebarMenuButton size="lg" tooltip="Akhil Panwar">
                              <Avatar className="size-8">
                                 <AvatarFallback>AP</AvatarFallback>
                              </Avatar>
                              <span className="grid min-w-0 flex-1 text-left leading-tight">
                                 <span className="truncate font-black">Akhil Panwar</span>
                                 <span className="truncate text-xs text-muted-foreground">
                                    Creator
                                 </span>
                              </span>
                              <ChevronsUpDown className="ml-auto" />
                           </SidebarMenuButton>
                        </SidebarMenuItem>
                     </SidebarMenu>
                  </SidebarFooter>
                  <SidebarRail />
               </Sidebar>

               <SidebarInset className="min-w-0 overflow-hidden">
                  <header className="flex h-14 shrink-0 items-center gap-3 border-b-[var(--brut-border)] border-border px-4">
                     <SidebarTrigger />
                     <Separator orientation="vertical" className="h-5!" />
                     <span className="font-black uppercase">Playground</span>
                  </header>
                  <div className="grid flex-1 gap-4 p-4 sm:grid-cols-3">
                     <div className="brut-item min-h-28 bg-muted p-4 sm:col-span-2">
                        <span className="text-xs font-black tracking-widest text-muted-foreground uppercase">
                           Activity
                        </span>
                     </div>
                     <div className="brut-item min-h-28 bg-secondary p-4">
                        <span className="text-xs font-black tracking-widest uppercase">
                           Status
                        </span>
                     </div>
                     <div className="brut-item min-h-40 bg-card p-4 sm:col-span-3">
                        <span className="text-xs font-black tracking-widest text-muted-foreground uppercase">
                           Workspace
                        </span>
                     </div>
                  </div>
               </SidebarInset>
            </SidebarProvider>
         );

      case "skeleton":
         return (
            <div className="grid w-full max-w-sm gap-3">
               <Skeleton className="h-10 w-2/3" />
               <Skeleton className="h-24 w-full" />
               <Skeleton className="h-8 w-1/2" />
            </div>
         );

      case "slider":
         return <Slider defaultValue={[45]} className="w-full max-w-sm" />;

      case "spinner":
         return (
            <div className="flex items-center gap-3 font-black uppercase">
               <Spinner className="size-6" /> Building registry
            </div>
         );

      case "switch":
         return (
            <div className="flex items-center gap-4">
               <Switch defaultChecked aria-label="Enable notifications" />
               <span className="font-black uppercase">On</span>
            </div>
         );

      case "table":
         return (
            <div className="w-full max-w-5xl">
               <Table className="min-w-[820px]">
                  <TableHeader>
                     <TableRow>
                        <TableHead>Component</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Primitive</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Files</TableHead>
                        <TableHead>Updated</TableHead>
                     </TableRow>
                  </TableHeader>
                  <TableBody>
                     {[
                        ["Button", "Action", "Base UI", "Stable", "2", "Today"],
                        [
                           "Dialog",
                           "Overlay",
                           "Base UI",
                           "Stable",
                           "3",
                           "Today",
                        ],
                        [
                           "Combobox",
                           "Form",
                           "Base UI",
                           "Updated",
                           "4",
                           "Yesterday",
                        ],
                        [
                           "Calendar",
                           "Form",
                           "DayPicker",
                           "Review",
                           "3",
                           "Aug 6",
                        ],
                     ].map(
                        ([
                           component,
                           category,
                           primitive,
                           status,
                           files,
                           updated,
                        ]) => (
                           <TableRow key={component}>
                              <TableCell className="font-black">
                                 {component}
                              </TableCell>
                              <TableCell>{category}</TableCell>
                              <TableCell>{primitive}</TableCell>
                              <TableCell>
                                 <Badge
                                    variant={
                                       status === "Review"
                                          ? "outline"
                                          : status === "Updated"
                                            ? "secondary"
                                            : "default"
                                    }
                                 >
                                    {status}
                                 </Badge>
                              </TableCell>
                              <TableCell className="text-right font-mono">
                                 {files}
                              </TableCell>
                              <TableCell>{updated}</TableCell>
                           </TableRow>
                        ),
                     )}
                  </TableBody>
               </Table>
            </div>
         );

      case "tabs":
         return (
            <Tabs defaultValue="preview" className="w-full max-w-md">
               <TabsList>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
               </TabsList>
               <TabsContent
                  value="preview"
                  className="border-2 border-border p-5"
               >
                  Live component preview.
               </TabsContent>
               <TabsContent
                  value="code"
                  className="border-2 border-border p-5 font-mono"
               >
                  pnpm dlx shadcn@latest
               </TabsContent>
            </Tabs>
         );

      case "textarea":
         return (
            <Textarea
               className="max-w-md"
               placeholder="Say something with weight..."
            />
         );

      case "toggle":
         return (
            <div className="flex gap-2">
               <Toggle variant="outline" aria-label="Toggle bold">
                  <Bold />
               </Toggle>
               <Toggle variant="outline" aria-label="Toggle italic">
                  <Italic />
               </Toggle>
            </div>
         );

      case "toggle-group":
         return (
            <ToggleGroup defaultValue={["left"]} variant="outline">
               <ToggleGroupItem value="left">Left</ToggleGroupItem>
               <ToggleGroupItem value="center">Center</ToggleGroupItem>
               <ToggleGroupItem value="right">Right</ToggleGroupItem>
            </ToggleGroup>
         );

      case "toast":
         return (
            <>
               <Button
                  onClick={() =>
                     toast.add({
                        title: "Theme saved",
                        description: "Your brutalist settings are now active.",
                        type: "success",
                     })
                  }
               >
                  Show toast
               </Button>
               <Toaster />
            </>
         );

      case "tooltip":
         return (
            <Tooltip>
               <TooltipTrigger render={<Button variant="outline" />}>
                  Hover me
               </TooltipTrigger>
               <TooltipContent>Brutalist tooltip</TooltipContent>
            </Tooltip>
         );

      default:
         return <FoundationPreview slug={slug} />;
   }
}
