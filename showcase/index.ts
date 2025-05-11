// ⚡ NETRUNNER PROTOCOLS ⚡
interface NeuroInterface {
  sync(): Promise<void>;
}

class ChromeDiver implements NeuroInterface {
  #BREACH_THRESHOLD = 0.62;

  async sync() {
    const breachSuccess = Math.random() > this.#BREACH_THRESHOLD;
    await new Promise((r) => setTimeout(r, 1000));
    console.log(
      breachSuccess
        ? "ICE SHATTERED\x1b[32m✓\x1b[0m"
        : "\x1b[31m<< SYSTEM REBOOT >>\x1b[0m"
    );
  }
}

// Blackwall Gateway
const neuralLink = async (dweller: ChromeDiver) => {
  const relicState = Math.random() > 0.5 ? "ENGAGED" : "DORMANT";
  console.log(`\x1b[35mRELIC STATE: ${relicState}\x1b[0m`);

  if (relicState === "ENGAGED") {
    await dweller.sync();
    console.log(
      "\x1b[36mJohnny MNEMONIC:\x1b[0m\nWE BURN NIGHT CITY\nAFTER THIS"
    );
  } else {
    console.log("CORPO OVERRIDE:\x1b[31mARASAKA LOCK\x1b[0m");
  }
};

// EXECUTE DIRECTIVE
neuralLink(new ChromeDiver()).catch(() =>
  console.log("\x1b[31m<< CONNECTION TERMINATED >>")
);
