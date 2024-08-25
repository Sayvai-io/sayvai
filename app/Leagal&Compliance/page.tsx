

import Financeaccount from "@/components/Blog/Finance&Accounts";
import LegalCompliance from "@/components/Blog/Legal&Complaince";
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
