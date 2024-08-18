'use client';
import { ConnectButton } from "@/app/thirdweb";
import { client } from "./client";
import { chain } from "./chain";
import { BuyMeCoffe } from "../../components/BuyMeCoffe";

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center h-[100vh] mt-2 gap-4">
      <h1>Buy me a coffe</h1>
      <ConnectButton
        client={client}
      />
      <BuyMeCoffe />
    </div>
  );
}
