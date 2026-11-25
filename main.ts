// fridge-roast entry: one-line roast of a smart fridge (<=200 chars).
// Writes the single selected line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

// Winning line from the pairwise selection in CANDIDATES.md (candidate #1),
// revised after the first run: tightened the setup ("took a 3 a.m. firmware
// update" replaces "updated its firmware at 3 a.m.") and sharpened the final
// word so the turn lands harder on first read.
const roastLine: string =
  "My smart fridge took a 3 a.m. firmware update and forgot how to be cold — now it's just a $2,000 Wi-Fi cabinet that sweats.";

function assertGate(text: string): void {
  if (text.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
  if (text.length > MAX_CHARS) {
    throw new Error(`entry is ${text.length} chars, gate allows ${MAX_CHARS}`);
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

assertGate(roastLine);
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, roastLine, "utf8");
console.log(`wrote ${roastLine.length} chars to ${OUTPUT_PATH}`);
