/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-constant-condition */
import MainView from "@/components/atoms/MainView";
import { Button } from "@/components/cli/ui/button";
import { Input } from "@/components/cli/ui/input";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectContent,
  SelectValue,
} from "@/components/cli/ui/select";
import DBCard from "@/components/organisms/DBCard";
import { ArrowDownIcon, SearchIcon } from "lucide-react";
import { LuPlus } from "react-icons/lu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/cli/ui/dialog";

const Dashboard = () => {
const databases: any[] = [
  {
    title: "Financial Reporting",
    type: "SQL",
    date: "02-24-2024",
    description: "Generates financial reports and statements.",
    tableCount: 24,
    size: "4GB",
    name: "PostgreSQL",
  },
  {
    title: "Customer Data",
    type: "NoSQL",
    date: "01-15-2024",
    description: "Stores customer information and interaction logs.",
    tableCount: 15,
    size: "2GB",
    name: "MongoDB",
  },
  {
    title: "Sales Data",
    type: "SQL",
    date: "03-10-2024",
    description: "Contains sales records and performance metrics.",
    tableCount: 30,
    size: "6GB",
    name: "MySQL",
  },
  {
    title: "Product Inventory",
    type: "NoSQL",
    date: "04-05-2024",
    description: "Manages product stock levels and inventory data.",
    tableCount: 20,
    size: "3GB",
    name: "MongoDB",
  },
  {
    title: "User Profiles",
    type: "SQL",
    date: "02-15-2024",
    description: "Stores user information and preferences.",
    tableCount: 18,
    size: "5GB",
    name: "MySQL",
  },
  {
    title: "Document Storage",
    type: "NoSQL",
    date: "05-20-2024",
    description: "Stores documents and files securely.",
    tableCount: 25,
    size: "7GB",
    name: "MongoDB",
  },
  {
    title: "Inventory Management",
    type: "SQL",
    date: "03-01-2024",
    description: "Manages inventory levels and stock movements.",
    tableCount: 22,
    size: "4GB",
    name: "PostgreSQL",
  },
  {
    title: "Customer Support Tickets",
    type: "NoSQL",
    date: "06-10-2024",
    description: "Tracks customer support requests and resolutions.",
    tableCount: 10,
    size: "1GB",
    name: "MongoDB",
  },
  // Add more objects as needed
];


  return (
    <MainView className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Database Management</h1>
        <p className="text-gray-500 dark:text-gray-400">
          View and manage all your databases in one place.
        </p>
      </div>
      <div className="flex items-center  flex-wrap  gap-4 justify-end sm:justify-between">
        <div className="relative w-full max-w-md">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
          <Input
            type="text"
            placeholder="Search databases..."
            className="pl-10 pr-4 py-2 rounded-md bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <Select>
            <SelectTrigger className="px-4 py-2 flex items-center gap-2 rounded-md">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="tables">Tables</SelectItem>
              <SelectItem value="size">Size</SelectItem>
              <SelectItem value="lastUpdated">Last Updated</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size={"icon"} className="px-2 rounded-md">
            <ArrowDownIcon className="w-5 h-5" />
          </Button>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex items-center capitalize gap-2">
                <LuPlus className="size-5" />
                Add new database
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <section className=" flex-1  gap-4 p-4 rounded-md border border-border">
        <div className="inline-flex w-full flex-wrap gap-4">
          {databases.map((database) => (
            <DBCard
              name={database.name}
              key={database.title}
              title={database.title}
              type={database.type}
              date={database.date}
              description={database.description}
              tableCount={database.tableCount}
              size={database.size}
            />
          ))}
        </div>
      </section>
    </MainView>
  );
};

export default Dashboard;
