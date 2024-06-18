/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/cli/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/cli/ui/dialog";
import { Input } from "@/components/cli/ui/input";
import { Label } from "@/components/cli/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/cli/ui/select";
import { Textarea } from "@/components/cli/ui/textarea";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/cli/ui/form";
import { useFetch } from "@/hooks/useFetch";
import { useAuth } from "@/hooks/useAuth";

const formSchema = z.object({
  title: z.string().min(4).max(50),
  description: z.string().min(20).max(150),
  uri: z.string().min(100).max(400),
});

const CreateDBCard = () => {
  const { token } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState<"PostgreSQL" | "MySQL" | "MongoDB">(
    "PostgreSQL"
  );
  const [type, setType] = useState<"NoSQL" | "SQL">("SQL");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      uri: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    console.log(values, name, type);

    const res = await useFetch({
      method: "POST",
      body: {
        title: values.title,
        description: values.description,
        uri: values.uri,
        name,
        type,
      },
      endPoint: "/db/create",
      token: token as string,
      TokenInclude: true,
    });

    setIsLoading(false);
    console.log("====================================");
    console.log(res);
    console.log("====================================");
  }

  return (
    <DialogContent className="sm:max-w-[500px]">
      <DialogHeader>
        <DialogTitle>Create New Database</DialogTitle>
        <DialogDescription>
          Fill out the form to create a new database connection.
        </DialogDescription>
      </DialogHeader>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid gap-4 py-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="type">Database Name</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select database name" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    onClick={() => {
                      setName("PostgreSQL");
                    }}
                    value="PostgreSQL"
                  >
                    PostgreSQL
                  </SelectItem>
                  <SelectItem
                    onClick={() => {
                      setName("MySQL");
                    }}
                    value="MySQL"
                  >
                    MySQL
                  </SelectItem>
                  <SelectItem
                    onClick={() => {
                      setName("MongoDB");
                    }}
                    value="MongoDB"
                  >
                    MongoDB
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="type">Database Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select database type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    onClick={() => {
                      setType("SQL");
                    }}
                    value="SQL"
                  >
                    SQL
                  </SelectItem>
                  <SelectItem
                    onClick={() => {
                      setType("NoSQL");
                    }}
                    value="NoSQL"
                  >
                    NoSQL
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter a title" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter a description" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="uri"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Connection String/URI</FormLabel>
                <FormControl>
                  <Input placeholder="Enter connection string" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter className=" grid grid-cols-2 gap-4 sm:gap-0 sm:flex sm:justify-end items-center">
            <DialogClose asChild >
              <Button className="flex items-center gap-2" type="submit">
                {isLoading && (
                  <Loader2 className="mr-2 text-white h-4 w-4 animate-spin" />
                )}
                Create Database
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
};

export default CreateDBCard;
