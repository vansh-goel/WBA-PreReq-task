import bs58 from "bs58";

const promptSync = require("prompt-sync")();

// Function to convert base58 string to wallet byte array
function base58ToWallet(): void {
  const base58: string = promptSync("Enter your base58 encoded private key: ");
  try {
    const wallet: Uint8Array = bs58.decode(base58);
    console.log("Wallet byte array:", Array.from(wallet));
  } catch (error) {
    console.error("Error decoding base58 string:", error);
  }
}

// Function to convert wallet byte array to base58 string
function walletToBase58(): void {
  const wallet: number[] = [
    176, 7, 72, 25, 166, 40, 79, 244, 13, 182, 89, 203, 74, 132, 237, 166, 161,
    158, 94, 81, 131, 104, 217, 164, 48, 15, 27, 161, 222, 189, 142, 252, 44,
    232, 144, 63, 3, 74, 184, 247, 227, 196, 74, 231, 11, 176, 213, 15, 35, 36,
    24, 227, 41, 91, 178, 101, 125, 161, 191, 5, 243, 82, 10, 158,
  ];
  const base58: string = bs58.encode(Buffer.from(wallet));
  console.log("Base58 encoded private key:", base58);
}

// Menu to select the conversion direction
function menu(): void {
  console.log("Select an option:");
  console.log("1. Convert Base58 to Wallet byte array");
  console.log("2. Convert Wallet byte array to Base58");
  const choice: string = promptSync("Enter your choice (1 or 2): ");

  if (choice === "1") {
    base58ToWallet();
  } else if (choice === "2") {
    walletToBase58();
  } else {
    console.log("Invalid choice, please enter 1 or 2.");
  }
}

// Run the menu
menu();
