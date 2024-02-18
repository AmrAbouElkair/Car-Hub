"use client";

import React from "react";
import { NextUIProvider } from "@nextui-org/system";

const NextUiProvider = ({ children }: { children: React.ReactNode }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default NextUiProvider;
