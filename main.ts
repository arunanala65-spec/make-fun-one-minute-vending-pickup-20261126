// One Line, One Minute: The Vending Machine Pickup Line Contest — make.fun
// One line: a pickup line a vending machine would say to a passing human.
// Entry: make-fun-one-minute-vending-pickup-20261126

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "Hey cutie, my coils only spin for you. Press B7 and I'll dispense the best snack in this building: me. No refunds.";

if (line.length < 1 || line.length > 199) {
  throw new Error(`Line must be 1-199 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
