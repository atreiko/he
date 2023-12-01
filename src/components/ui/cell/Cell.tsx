import React, { ReactNode } from 'react';

interface ICellProps {
  children: ReactNode;
  title?: string | null;
  ghost?: boolean;
}

const Cell: React.FC<ICellProps> = ({ children, title = null, ghost }) => {
  return (
    <div
      className={`p-4 rounded-xl shadow-md shadow-neutral-950 border border-neutral-700 ${
        ghost ? 'bg-neutral-900' : 'bg-neutral-950'
      }`}>
      {title ? <h3>{title}</h3> : null}
      {children}
    </div>
  );
};

export default Cell;
