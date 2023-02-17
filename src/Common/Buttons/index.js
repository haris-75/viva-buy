import React from 'react';

export function Btn1({ children, className, onClick, disabled }) {
  return (
    <button
      className={`${
        className
          ? className
          : 'h-[40px] w-full max-w-[400px] rounded-[35px] bg-secondary px-9 py-[4px] text-center font-sans text-base font-bold leading-6 text-black transition-all duration-200 hover:shadow-shadow1'
      } ${disabled ? 'hover:bg-forth opacity-50' : 'hover:bg-forth opacity-100'}`}
      disabled={disabled ? true : false}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function Btn2({ children, className, onClick, disabled }) {
  return (
    <button
      className={`${
        className
          ? className
          : 'flex w-full max-w-[400px] flex-nowrap items-center justify-center gap-4 rounded-[35px] border-[1px] border-solid border-black bg-secondary px-9 py-[14px] text-center font-sans text-base font-bold leading-6 text-black transition-all duration-200 hover:bg-primary hover:text-secondary sm:py-[18px] md:text-xl '
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
