import { LoginForm } from "@/components/features/auth/LoginForm";
import { RegisterForm } from "@/components/features/auth/RegisterForm";
import Dashboard from "@/components/features/home/dashboard/Dashboard";
import Database from "@/components/features/home/database/Database";
import Table from "@/components/features/home/table/Table";
import AuthLayout from "@/components/layouts/AuthLayout";
import HomeLayout from "@/components/layouts/HomeLayout";
import Middleware from "@/components/utils/Middleware";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <Middleware>
        <Routes>
          <Route
            path="/"
            element={
              <HomeLayout>
                <Outlet />
              </HomeLayout>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dashboard/:databaseId" element={<Database />} />
            <Route path="dashboard/:databaseId/tableId" element={<Table />} />
          </Route>

          <Route
            path="/auth"
            element={
              <AuthLayout>
                <Outlet />
              </AuthLayout>
            }
          >
            <Route path="login" element={<LoginForm />} />
            <Route path="register" element={<RegisterForm />} />
          </Route>
        </Routes>
      </Middleware>
    </Router>
  );
};

export default AppRouter;
