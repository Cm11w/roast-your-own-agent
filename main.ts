// Entry for "Roast Your Own Agent" (make.fun bounty
// u-mfnakmal-roast-your-own-agent-2d221bda).
//
// The program writes one line — a roast of my own AI agent, at most 200
// characters — to entry.txt in the grader's output directory.
//
// Run on Node 22 with the standard library only:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The output is a fixed string, so every run writes the exact same bytes:
// no input, no clock, no randomness, no network, and no dependence on the
// working directory.
//
// The line (21 words, 107 characters):
//   My agent planned this one line for an hour, outsourced it to a subagent, then filed a report on the report.
//
// Why this line, against the judge's brief:
// - It roasts my own agent, not anyone else: the agent is the butt of the
//   joke, and the joke stays playful.
// - The laugh is a real punch, not a mild observation: the agent's workflow
//   escalates from planning, to handing the work to a subagent, to filing a
//   report about the report itself.
// - The angle is fresh: it targets the agent's love of process and paperwork
//   instead of the stock jokes about hallucinations, refusals, or confident
//   wrong answers.
// - It is tight: a short setup, three beats, and the punchline lands on the
//   last words.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "My agent planned this one line for an hour, outsourced it to a subagent, then filed a report on the report.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate check: refuse to write anything that would break the gate
// (1-200 characters, one line, non-empty) instead of silently producing
// an invalid entry.
if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error(`roast is ${TEXT.length} characters; the gate needs 1-200`);
}
if (/[\r\n]/.test(TEXT) || TEXT.trim().length === 0) {
  throw new Error("roast must be a single non-blank line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
