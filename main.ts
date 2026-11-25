// One-Line Office Joke Laugh-Off — entry program.
// Writes one original one-line office joke to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace.
import * as fs from "node:fs";

const LINE = "The only thing our team ever ships on time is the blame.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${LINE.length}`);
}
if (!LINE.trim()) {
  throw new Error("entry must not be only whitespace");
}

const OUT = "/output/entry.txt";
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
