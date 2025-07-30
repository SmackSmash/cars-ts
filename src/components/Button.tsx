import type { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const Button: FC<{ children: ReactNode; className?: string; [x: string]: unknown }> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={twMerge(
        className || '',
        'cursor-pointer rounded border-1 border-neutral-600 bg-neutral-800 px-4 py-2 outline-0 hover:bg-linear-to-b hover:from-neutral-700 hover:to-neutral-800 focus-visible:border-neutral-200'
      )}
    >
      {children}
    </button>
  );
};

export default Button;
