import React from "react";
import { IContextType } from "./types";

export const ToDoContext = React.createContext<IContextType | undefined>(
  undefined
);
