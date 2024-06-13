/* eslint-disable @typescript-eslint/no-unused-vars */

import { Auth } from "@/providers/AuthProvider";
import { useContext } from "react";

export const useAuth = () => useContext(Auth);
