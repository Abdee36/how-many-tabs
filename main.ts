// How Many Tabs Do You Have Open? — Om's honest count, counted 25 Nov 2026
// at 07:01 WIB, across every browser open on his phone at that moment:
//   Chrome 37, Kiwi Browser 35, Mises Browser 9, Brave 4  =>  85 tabs.
// No invented number: each browser's tab count was given by Om himself.
import { mkdirSync, writeFileSync } from "node:fs";

const PER_BROWSER = { chrome: 37, kiwi: 35, mises: 9, brave: 4 };
const TABS = Object.values(PER_BROWSER).reduce((a, b) => a + b, 0); // 85
if (!/^[0-9]{1,5}$/.test(String(TABS))) throw new Error("tab count must be 1-5 digits");
// The entry is digits only, no trailing newline: exactly 2 bytes ("85"),
// so the gate (1-5 chars, UTF-8 text) passes and the text stays minimal.
const text = String(TABS);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
