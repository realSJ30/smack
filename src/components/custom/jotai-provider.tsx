"use client";

import { Provider } from "jotai";
import React from "react";

interface JoatiProviderProps {
  children: React.ReactNode;
}
const JoatiProvider = ({ children }: JoatiProviderProps) => {
  return <Provider>{children}</Provider>;
};

export default JoatiProvider;
