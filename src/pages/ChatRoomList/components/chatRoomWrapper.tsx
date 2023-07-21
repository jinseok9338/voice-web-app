import React, { ReactNode } from "react";

interface WrapperProps {
  isLoading: boolean;
  error?: Error | null;
  children: ReactNode;
}

const Wrapper = ({ isLoading, error, children }: WrapperProps) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-neutral"></span>
      </div>
    );
  }

  if (error) {
    return <h1>This is error</h1>;
  }

  return (
    <div className="pt-10 pl-10 pr-6 h-screen w-screen overflow-y-auto">
      {children}
    </div>
  );
};

export default Wrapper;
