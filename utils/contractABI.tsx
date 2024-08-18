export const contractABI = [
    {
      "type": "constructor",
      "name": "",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "NewCoffee",
      "inputs": [
        {
          "type": "address",
          "name": "sender",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "string",
          "name": "message",
          "indexed": false,
          "internalType": "string"
        },
        {
          "type": "uint256",
          "name": "timestamp",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "function",
      "name": "buyMeACoffee",
      "inputs": [
        {
          "type": "string",
          "name": "_message",
          "internalType": "string"
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "getTotalCoffe",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    }
  ] as const;