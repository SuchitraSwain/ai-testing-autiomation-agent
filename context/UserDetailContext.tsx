"use client";

import type { User } from "@/db/schema";
import {
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from "react";

export type UserDetailContextValue = {
  userDetails: User | null;
  setUserDetails: Dispatch<SetStateAction<User | null>>;
};

export const UserDetailContext = createContext<
  UserDetailContextValue | undefined
>(undefined);

export function useUserDetailContext(): UserDetailContextValue {
  const ctx = useContext(UserDetailContext);
  if (ctx === undefined) {
    throw new Error(
      "useUserDetailContext must be used within UserDetailContext.Provider",
    );
  }
  return ctx;
}
