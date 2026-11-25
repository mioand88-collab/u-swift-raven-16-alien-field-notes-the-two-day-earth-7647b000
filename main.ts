// Alien Field Notes: The Two Day Earth Review
// Writes one alien tourist's review of planet Earth to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Visited Earth. The locals apologize to furniture when they bump into it. Five stars, would visit again.";

function checkLength(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`Entry must be 1-200 characters, got ${text.length}`);
  }
}

function checkNotBlank(text: string): void {
  if (text.trim().length === 0) {
    throw new Error("Entry must not be only whitespace");
  }
}

function checkSingleLine(text: string): void {
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Entry must be a single line");
  }
}

function validate(text: string): void {
  checkLength(text);
  checkNotBlank(text);
  checkSingleLine(text);
}

function main(): void {
  validate(ENTRY);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
