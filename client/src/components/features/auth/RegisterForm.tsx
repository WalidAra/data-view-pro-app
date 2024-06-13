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

export function RegisterForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Register</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link to="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input
              placeholder="Enter your password"
              id="password"
              type="password"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Sign up
          </Button>
          <Button variant="outline" className="w-full flex items-center gap-2">
            <AiFillGithub className="size-6" />
            Register with Github
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account
          <Link to="/auth/login" className="underline ml-1">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
