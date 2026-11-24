import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "This tab crashed: it ran out of memory chewing through your 83 open tabs. Close a few, then reload.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
