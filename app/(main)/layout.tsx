import React from "react";

import { ReactNode } from "react";

const MainLayout = async ({ children }: { children: ReactNode }) => {
  return <div className="container mx-auto mt-24 mb-20">{children}</div>;
};

export default MainLayout;