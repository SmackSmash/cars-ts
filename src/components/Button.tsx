import type { FC, ReactNode } from 'react';

const Button: FC<{ children: ReactNode; [x: string]: unknown }> = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className='cursor-pointer rounded border-1 border-neutral-600 px-4 py-2 outline-0 hover:bg-linear-to-b hover:from-neutral-700 hover:to-neutral-800 focus-visible:border-neutral-200'
    >
      {children}
    </button>
  );
};

export default Button;
