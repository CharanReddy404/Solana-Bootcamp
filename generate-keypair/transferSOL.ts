import * as web3 from "@solana/web3.js";
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const fromPubkey = process.argv[2];
const toPubkey = process.argv[3];
const amount = process.argv[4];

if (!fromPubkey || !toPubkey || !amount) {
  console.log("Invalid inputs");
  process.exit(1);
}

const suppliedPublicKey = new web3.PublicKey(fromPubkey);
const suppliedToPubkey = new web3.PublicKey(toPubkey);

const payer = getKeypairFromEnvironment("SECRET_KEY");

const connection = new web3.Connection(web3.clusterApiUrl("devnet"));

const transaction = new web3.Transaction();

const instructions = web3.SystemProgram.transfer({
  fromPubkey: suppliedPublicKey,
  toPubkey: suppliedToPubkey,
  lamports: amount,
});

transaction.add(instructions);

const signature = await web3.sendAndConfirmTransaction(
  connection,
  transaction,
  [payer]
);

console.log(`Transaction signature is ${signature}!`);
