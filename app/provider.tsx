"use client";

import { UserDetailContext } from "@/context/UserDetailContext";
import type { User } from "@/db/schema";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { isLoaded, isSignedIn } = useAuth();

  const [userDetails, setUserDetails] = useState<User | null>(null);

  useEffect(() => {
    if (!isLoaded || !isSignedIn) return;

    const createNewUser = async () => {
      try {
        const result = await axios.post<User>("/api/users", {});
        console.log("User synced:", result);
        setUserDetails(result.data);
      } catch (error) {
        console.error("Failed to sync user:", error);
      }
    };

    createNewUser();
  }, [isLoaded, isSignedIn]);

  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserDetailContext.Provider>
  );
};

export default Provider;
