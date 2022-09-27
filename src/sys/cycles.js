import { Actor, HttpAgent } from "@dfinity/agent";

// Imports and re-exports candid interface
import { idlFactory } from "./cycles/cycles.did.js";
export { idlFactory } from "./cycles/cycles.did.js";

export const cyclesCan = (canisterId, options = {}) => {
  const host = options.local
    ? options.local_host || "http://localhost:8000/"
    : "https://ic0.app";

  const agent = new HttpAgent({
    fetch,
    host,
    ...(options ? options.agentOptions : {}),
  });

  // Fetch root key for certificate validation during development
  if (options.local) {
    agent.fetchRootKey().catch((err) => {
      console.warn(
        "Unable to fetch root key. Check to ensure that your local replica is running"
      );
      console.error(err);
    });
  }

  // Creates an actor with using the candid interface and the HttpAgent
  return Actor.createActor(idlFactory, {
    agent,
    canisterId: canisterId.toText ? canisterId.toText() : canisterId,
    ...(options ? options.actorOptions : {}),
  });
};
