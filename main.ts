import { copyFileSync, mkdirSync } from "node:fs";
// news-image-01: sum up Friday 13 November 2026 world news in one image.
// The front page (34 stories, 6 continents, world map) is drawn deterministically
// by build_frontpage.py and stored as entry.png; the program copies it verbatim.
mkdirSync("/output", { recursive: true });
copyFileSync("entry.png", "/output/entry.png");
