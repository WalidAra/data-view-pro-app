/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import { setProfile } from "@/features/state managment/slices/user.slice";
import { RootState } from "@/features/state managment/store/store";
import { useAuth } from "@/hooks/useAuth";
import { useFetch } from "@/hooks/useFetch";
import { User } from "@/types";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
      });

      if (res.status) {
        dispatch(
          setProfile({
            isUser: res.status,
            user: res.data as User,
          })
        );
      }
    };
    if (token && user.id) {
      //   getUserProfile();
    }
  }, [token, user.id]);

  return <div> {children}</div>;
};

export default ProfileProvider;
