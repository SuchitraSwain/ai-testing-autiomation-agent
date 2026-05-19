import WorkspaceHeader from "@/components/custom/WorkspaceHeader";
import React from "react";

const WorkspaceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <WorkspaceHeader />
      {children}
    </div>
  );
};

export default WorkspaceLayout;
