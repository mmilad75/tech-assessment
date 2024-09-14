import clsx from "clsx";
import React from "react";

export interface IColumnProps {
  children: React.ReactNode,
  className?: string
};

const Column: React.FC<IColumnProps> = ({children, className}) => {
  return (
    <div className={clsx("flex items-center px-6 py-5", className)}>
      {children}
    </div>
  )
};

export default Column;