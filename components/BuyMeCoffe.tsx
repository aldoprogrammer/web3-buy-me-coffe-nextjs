'use client'
import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { useState } from "react";
import { ConnectButton, useActiveAccount } from "thirdweb/react"

export const BuyMeCoffe = () => {
    const account = useActiveAccount();

    const [tipAmount, setTipAmount] = useState(0);
    const [message, setMessage] = useState("");


    if (account) {
        return (
            <>
            <div className="flex mx-auto">
                <ConnectButton
                    client={client}
                    chain={chain}
                    />
            </div>
            <div>
                <label htmlFor="" className="text-xl font-bold">Tip Amount</label>
                <p className="text-sm">Must be greater than 0</p>
                <input 
                    type="number"
                    value={tipAmount}
                    onChange={(e) => setTipAmount(Number(e.target.value))}
                    step={0.01}
                />
            </div>
            </>
        )
    }        
}