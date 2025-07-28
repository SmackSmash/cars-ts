import type { FC, ReactNode } from 'react';

const Button: FC<{ children: ReactNode; [x: string]: unknown }> = ({ children, ...rest }) => {
  return (
    <button {...rest} className='cursor-pointer rounded border-1 border-neutral-600 px-4 py-2'>
      {children}
    </button>
  );
};

export default Button;
