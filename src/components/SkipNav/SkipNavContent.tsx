import React, { FC, HTMLAttributes } from 'react';

export interface SkipNavContentProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
}

export const SkipNavContent: FC<SkipNavContentProps> = ({ id, children, ...rest }) => {
  return (
    <div id={id} tabIndex={-1} {...rest}>
      {children}
    </div>
  );
};