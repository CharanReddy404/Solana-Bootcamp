// Step 3: Challenge
import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publicKey = new PublicKey("JCZjJcmuWidrj5DwuJBxwqHx7zRfiBAp6nCLq3zYmBxd");

const connection = new Connection(
  "https://api.mainnet-beta.solana.com",
  "confirmed"
);

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);

// results:-
// toly.sol ==> 💰 Finished! The balance for the wallet at address 86xCnPeV69n6t3DnyGvkKobf9FdN2H9oiVDdaMpo2MMY is 4.519910245!

// shaq.sol ==> 💰 Finished! The balance for the wallet at address gacMrsrxNisAhCfgsUAVbwmTC3w9nJB6NychLAnTQFv is 0.016162083!

// mccann.sol ==> 💰 Finished! The balance for the wallet at address JCZjJcmuWidrj5DwuJBxwqHx7zRfiBAp6nCLq3zYmBxd is 2.411666938!

// // Step 2: Check other student's balances
// import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

// // console.log(process.argv);

// // const suppliedPublicKey = process.argv[2];

// // if (!suppliedPublicKey) {
// //   throw new Error("Provide a public key to check the balance of!");
// // }

// const connection = new Connection("https://api.devnet.solana.com", "confirmed");

// const publicKey = new PublicKey("31ZdXAvhRQyzLC2L97PC6Lnf2yWgHhQUKKYoUo9MLQF5");

// const balanceInLamports = await connection.getBalance(publicKey);

// const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

// console.log(
//   `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
// );

// // Step 1: Load a keypair, connect to devnet, get devnet SOL and get balance
// import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

// const publicKey = new PublicKey("4nvGiMbPnmbRcmYbAicM7fSjhWrAEACfDpwyp5KUrH1Z");

// const connection = new Connection("https://api.devnet.solana.com", "confirmed");

// const balanceInLamports = await connection.getBalance(publicKey);

// const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

// console.log(
//   `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
// );
