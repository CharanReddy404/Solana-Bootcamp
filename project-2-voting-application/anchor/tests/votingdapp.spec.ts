import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
// import { startAnchor, BankrunProvider } from "anchor-bankrun";

import { Votingdapp } from "../target/types/votingdapp";
const IDL = require("../target/idl/votingdapp.json");

const votingAddress = new PublicKey(
  "Ao4Q5cPeo7GJS7EZsZZtGsByeUU6ztiYjPGSwXVqhx98"
);

describe("votingdapp", () => {
  let context;
  let provider;
  anchor.setProvider(anchor.AnchorProvider.env());
  let votingProgram = anchor.workspace.Votingdapp as Program<Votingdapp>;

  beforeAll(async () => {
    // context = await startAnchor(
    //   "",
    //   [{ name: "votingdapp", programId: votingAddress }],
    //   []
    // );
    // provider = new BankrunProvider(context);
    // votingProgram = new Program<Votingdapp>(IDL, provider);
  });

  it("Initialize Poll", async () => {
    await votingProgram.methods
      .initializePoll(
        new anchor.BN(1),
        "what is favorite type of peanut butter",
        new anchor.BN(0),
        new anchor.BN(1800000000)
      )
      .rpc();

    const [pollAddress] = PublicKey.findProgramAddressSync(
      [new anchor.BN(1).toArrayLike(Buffer, "le", 8)],
      votingAddress
    );

    const poll = await votingProgram.account.poll.fetch(pollAddress);
    console.log(poll);

    expect(poll.pollId.toNumber()).toEqual(1);
    expect(poll.description).toEqual("what is favorite type of peanut butter");
    expect(poll.pollStart.toNumber()).toBeLessThan(poll.pollEnd.toNumber());
  });

  it("Initialize candidate", async () => {
    await votingProgram.methods
      .initializeCandidate("Smooth", new anchor.BN(1))
      .rpc();
    await votingProgram.methods
      .initializeCandidate("Crunchy", new anchor.BN(1))
      .rpc();

    const [crunchyAddress] = PublicKey.findProgramAddressSync(
      [new anchor.BN(1).toArrayLike(Buffer, "le", 8), Buffer.from("Crunchy")],
      votingAddress
    );
    const crunchyCandidate = await votingProgram.account.candidate.fetch(
      crunchyAddress
    );
    expect(crunchyCandidate.candidateVotes.toNumber()).toEqual(0);
    console.log(crunchyCandidate);

    const [smoothAddress] = PublicKey.findProgramAddressSync(
      [new anchor.BN(1).toArrayLike(Buffer, "le", 8), Buffer.from("Smooth")],
      votingAddress
    );
    const smoothCandidate = await votingProgram.account.candidate.fetch(
      smoothAddress
    );
    expect(smoothCandidate.candidateVotes.toNumber()).toEqual(0);
    console.log(smoothCandidate);
  });

  it("vote", async () => {
    await votingProgram.methods.vote("Crunchy", new anchor.BN(1)).rpc();

    const [crunchyAddress] = PublicKey.findProgramAddressSync(
      [new anchor.BN(1).toArrayLike(Buffer, "le", 8), Buffer.from("Crunchy")],
      votingAddress
    );
    const crunchyCandidate = await votingProgram.account.candidate.fetch(
      crunchyAddress
    );
    expect(crunchyCandidate.candidateVotes.toNumber()).toEqual(1);
    console.log(crunchyCandidate);
  });
});
