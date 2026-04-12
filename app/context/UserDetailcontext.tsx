"use client";
import { createContext } from "react";

export const UserDetailContext = createContext<any>({
    userdetail : undefined,
    setUserDetail : ( )=>{ }

});

