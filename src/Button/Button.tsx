import { FC, PropsWithChildren } from "react";

export const Button: FC<PropsWithChildren> = ({ children }) => {
  return (
    <button className="py-3 px-4 bg-blue-500 text-white rounded-xl">{children}</button>
  );
};
