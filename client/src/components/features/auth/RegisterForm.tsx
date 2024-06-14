/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/cli/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/cli/ui/card";
import { Input } from "@/components/cli/ui/input";
import { Label } from "@/components/cli/ui/label";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/cli/ui/form";

import { z } from "zod";
import { useState } from "react";
import { Checkbox } from "@/components/cli/ui/checkbox";
import { useFetch } from "@/hooks/useFetch";
import { useAuth } from "@/hooks/useAuth";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().min(14),
  password: z.string().min(8).max(50),
});

export function RegisterForm() {
  const { setToken } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [recall, setRecall] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const res = await useFetch({
      method: "POST",
      body: { ...values, recall },
      endPoint: "/auth/register",
      TokenInclude: false,
    });

    setIsLoading(true);

    if (res.status) {
      localStorage.setItem("dvp-auth", res.data.token);
      setToken(res.data.token);
    }
  }

  return (
    <Card className="sm:w-[400px] w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Register</CardTitle>
        <CardDescription>
          Enter your email below to register to your account
        </CardDescription>
      </CardHeader>
      <CardContent className="gap-4 flex flex-col">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Enter your" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="m@example.com"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      to="#"
                      className="ml-auto inline-block text-sm underline"
                    >
                      Forgot your password?
                    </Link>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="flex items-center gap-2">
                    <Checkbox
                      checked={recall}
                      onCheckedChange={() => {
                        setRecall((prev) => !prev);
                      }}
                    />
                    Remember me for 30 days
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isLoading} type="submit" className="w-full">
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Register
            </Button>
          </form>
        </Form>

        <div className="flex flex-col ">
          <Button variant="outline" className="w-full flex items-center gap-2">
            <AiFillGithub className="size-6" />
            Register with Github
          </Button>

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account
            <Link to="/auth/login" className="underline ml-1">
              Sign in
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
