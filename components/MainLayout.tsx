import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { twMerge } from "tailwind-merge";

type MainLayoutProps = {
  children?: ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const { children } = props;
  return (
    <main
      className={twMerge(
        "flex flex-col items-center min-h-screen",
        "max-w-screen-lg mx-auto"
      )}
    >
      <Navbar />
      {children}
    </main>
  );
};
