import { Link } from "react-router-dom";
import { Button } from "../../cli/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../cli/card";
import { Input } from "../../cli/input";
import { Label } from "../../cli/label";
import { FaGithub } from "react-icons/fa";
import { Checkbox } from "../../cli/checkbox";

export function LoginForm() {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
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
              <Link to="/" className="ml-auto inline-block text-sm underline">
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

          <div className="flex items-center space-x-2">
            <Checkbox  />
            <label
              htmlFor="terms"
              className="text-sm text-muted-foreground"
            >
              Remember me for 30 days
            </label>
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full flex items-center gap-2">
            <FaGithub className="size-5" />
            Login with Github
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
