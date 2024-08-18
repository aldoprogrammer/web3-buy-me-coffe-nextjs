import { chain } from "@/app/chain"
import { client } from "@/app/client"
import { getContract } from "thirdweb"
import { contractABI } from "./contractABI"

const contractAddress = "0xE1198190f53456cbE5d77661eC16b56A77431A69"

export const contract = getContract({
    client: client,
    chain: chain,
    address: contractAddress,
    abi: contractABI
})