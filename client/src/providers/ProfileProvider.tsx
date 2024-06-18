/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */

import { setProfile } from "@/features/state management/slices/user.slice";
import { RootState } from "@/features/state management/store/store";
import { useAuth } from "@/hooks/useAuth";
import { useFetch } from "@/hooks/useFetch";
import { User } from "@/types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const ProfileProvider = ({ children }: { children: React.ReactNode }) => {
  const { token } = useAuth();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user).user;

  useEffect(() => {
    const getUserProfile = async () => {
      const res = await useFetch({
        method: "GET",
        token: token as string,
        TokenInclude: true,
        endPoint: "/auth/profile",
      });

      if (res.status) {
        dispatch(
          setProfile({
            isUser: res.status,
            user: res.data as User,
          })
        );
      } else if (res.status === false) {
        toast(res.message, {
          description:
            "Your session token has expired. Please sign in to regain access.",
          className: "bg-black text-white",
          duration: 1500,
        });

        localStorage.removeItem("dvp-auth");

        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    };

    if (token && user.id === "") {
      getUserProfile();
    }
  }, []);

  return <> {children} </>;
};

export default ProfileProvider;
