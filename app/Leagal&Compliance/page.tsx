

import Financeaccount from "@/components/Solutions/Finance&Accounts/Finance&Accounts";
import LegalCompliance from "@/components/Solutions/Legal&Compliance/Legal&Compliance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sayvai",
  // description: "",
  // other metadata
};

const Finance = () => {
  return (
    <>
     <LegalCompliance />
    </>
  );
};

export default Finance;
