/* eslint-disable @typescript-eslint/no-unused-vars */
import MainView from "@/components/atoms/MainView";
import { Button } from "@/components/cli/ui/button";
import { LuDatabase, LuPlus } from "react-icons/lu";
import { Input } from "@/components/cli/ui/input";
import { SearchIcon } from "lucide-react";
import { LuTable2 } from "react-icons/lu";
import { Separator } from "@/components/cli/ui/separator";
import { dbs } from "@/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { LuSettings } from "react-icons/lu";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/cli/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/cli/ui/popover";
import React from "react";
const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const DBLayout = ({ children }: { children: React.ReactNode }) => {
  // const { databaseId } = useParams();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const obj = {
    title: "Sales Data",
    type: "SQL",
    date: "03-10-2024",
    description: "Contains sales records and performance metrics.",
    tableCount: 30,
    size: "6GB",
    name: "MySQL",
  };

  const IconComponent = dbs[obj.name];

  return (
    <MainView className="flex flex-1 w-full h-main">
      <aside className="xl:w-72 sm:w-60 md:w-64 flex flex-col border-r shrink-0">
        <div className="border-default flex h-12 items-center border-b px-6">
          <h4 className="text-lg font-semibold">Table Editor</h4>
        </div>

        <div className="flex flex-col gap-2 w-full p-4">
          <Button
            size={"sm"}
            variant={"secondary"}
            className="flex items-center border justify-normal gap-2"
          >
            <LuPlus className="size-4" />
            <span>Create new table</span>
          </Button>

          <div className="relative w-full max-w-md">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="text"
              placeholder="Search databases..."
              className="pl-10 pr-4 rounded-md bg-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>

        <div className="w-full pb-4 px-4 ">
          <Separator />
        </div>

        <nav className="flex flex-col w-full px-4 gap-2">
          <Button
            size={"sm"}
            variant={"ghost"}
            className=" border w-full text-sm bg-muted flex items-center gap-2 justify-normal "
          >
            <LuTable2 className="size-4" />

            <span>users</span>
          </Button>

          <Button
            size={"sm"}
            variant={"ghost"}
            className=" border w-full text-sm flex items-center gap-2 justify-normal "
          >
            <LuTable2 className="size-4" />

            <span>posts</span>
          </Button>

          <Button
            size={"sm"}
            variant={"ghost"}
            className=" border w-full text-sm flex items-center gap-2 justify-normal "
          >
            <LuTable2 className="size-4" />

            <span>comments</span>
          </Button>
        </nav>
      </aside>

      <section className=" w-full flex flex-col h-main overflow-hidden pb-2">
        <div className="border-default justify-between flex h-12 gap-4 items-center border-b px-6">
          <div className="flex gap-4 items-center">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  size={"sm"}
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[220px] justify-between"
                >
                  {value
                    ? frameworks.find((framework) => framework.value === value)
                        ?.label
                    : "Select database.."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[220px] p-0">
                <Command>
                  <CommandInput placeholder="Search framework..." />
                  <CommandList>
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? "" : currentValue
                            );
                            setOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              value === framework.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {framework.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            {IconComponent && (
              <IconComponent className="size-4 text-muted-foreground" />
            )}

            <div className="flex items-center gap-1 font-medium text-muted-foreground">
              <LuDatabase className="size-4 " />
              <p className="">{obj.size}</p>
            </div>

            <div className="flex items-center gap-1 font-medium text-muted-foreground">
              <LuTable2 className="size-4" />
              <p className="">{obj.tableCount}</p>
            </div>
          </div>

          <Button variant={"ghost"} size={"icon"}>
            <LuSettings className="size-5 " />
          </Button>
        </div>

        {children}
      </section>
    </MainView>
  );
};

export default DBLayout;
