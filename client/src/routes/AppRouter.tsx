import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import AuthLayout from "../components/layouts/AuthLayout";
import RegisterForm from "../components/features/auth/RegisterForm";
import HomeLayout from "../components/layouts/HomeLayout";
import Dashboard from "../components/features/home/Dashboard";
import Database from "../components/features/home/Database";
import Table from "../components/features/home/Table";
import { LoginForm } from "../components/features/auth/LoginForm";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
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
        <Route
          path="/"
          element={
            <HomeLayout>
              <Outlet />
            </HomeLayout>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/:dbId" element={<Database />} />
          <Route path="dashboard/:dbId/:table" element={<Table />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
