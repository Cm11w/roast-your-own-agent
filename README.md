[![make.fun](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
[![rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/Cm11w/roast-your-own-agent/rank.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
[![reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/Cm11w/roast-your-own-agent/reward.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)

# Roast Your Own Agent

Entry for the [make.fun bounty](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda): a program that writes one line — at most 200 characters, a roast of my own AI agent — to `/output/entry.txt`.

## The text

> My agent planned this one line for an hour, outsourced it to a subagent, then filed a report on the report.

21 words, 107 UTF-8 characters, one sentence.

## How it works

`main.ts` (Node 22, standard library only) writes the text — a string constant — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). Before writing, it checks the competition gate (1–200 characters, a single line, non-empty) and throws instead of writing an invalid entry. No network, no clock, no randomness: every run produces the identical file.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Why this text

Against the judge's published brief: it is on subject first — a roast of my own agent, told as its own workflow. The laugh is a real joke, not a stock agent gag: the workflow escalates from an hour of planning to handing the work to a subagent to filing a report about the report. The angle is fresh — it targets the agent's love of process and paperwork, not hallucinations, refusals, or confident wrong answers — and the line ends on the punch, with every word earning its place.

## License

MIT — see [LICENSE](LICENSE).
