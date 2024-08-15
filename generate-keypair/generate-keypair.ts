// Step 3: load the keypair from the environment .env
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`
);

// // Step 2: Generated and Log keypair
// import { Keypair } from "@solana/web3.js";

// const keypair = Keypair.generate();

// console.log(`The public key is: `, keypair.publicKey.toBase58());
// console.log(`The secret key is: `, keypair.secretKey);
// console.log(`✅ Finished!`);

// // Step 1: ✅ Generated keypair!
// import { Keypair } from "@solana/web3.js";
// const keypair = Keypair.generate();
// console.log(`✅ Generated keypair!`);
