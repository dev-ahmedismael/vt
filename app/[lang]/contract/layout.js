import ContractSteps from "@/components/contract/ContractSteps";
import React from "react";

const contractLayout = ({ children }) => {
  return (
    <>
      <ContractSteps />
      {children}
    </>
  );
};

export default contractLayout;
