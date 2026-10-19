import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-transition-wrapper flex-1 flex flex-col">
      {children}
    </div>
  );
}
