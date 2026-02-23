export type Project = {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  primary: { label: string; href: string };
  ascii: string;
  // links: { label: "GitHub" | "Live" | "Writeup"; href: string }[];
};

export const projects: Project[] = [
  // {
  //   id: "ci-tool",
  //   title: "CI Tool (C++)",
  //   description: "Fast local CI runner: build/test orchestration, clean logs, caching.",
  //   tags: ["C++", "CLI", "Build"],
  //   links: [{ label: "GitHub", href: "#" }],
  // },
  {
    id: "item-tracker",
    title: "Item Tracker (C++)",
    description: "Fast local item sorter and look-up.",
    tags: ["C++", "CLI", "File I/O", "Maps"],
    primary: { label: "GitHub", href: "https://github.com/adamkimmins/item-tracker" },
    ascii: `[items]
   │   ↖
   ▼    [sort]
 [find]↗ 
   │
   ▼
[pull]`
  },
  {
    id: "lyric-tools",
    title: "Lyric Tools AI",
    description: "Lyric drafting + revision tools with controllable tone/mood and constraints.",
    tags: ["TypeScript", "LLMs", "API Design"],
    primary: { label: "Live", href: "https://cf_ai_lyric_tools.a-bellia.workers.dev/" },
    ascii: `▣ UI
▼
▣ Worker
▼
├─► /help
├─► /lyrics
└─► /thesaurus`,
  },
  {
    id: "solar-render",
    title: "Solar Render",
    description: "Three.js solar system renderer with high-quality textures and lighting.",
    tags: ["JavaScript", "Physics", "Three.js", "WebGL"],
    primary: { label: "Live", href: "https://solar-render.pages.dev/" },
ascii: `[WebGL]─►[tex]
  |       |
[shader]  |
  |       |
[light]   |
  |       ▼
  └─► [render]`,
  },
    {
    id: "polybot",
    title: "Polybot",
    description: "Real-time STT → LLM → TTS language practice app with streaming UX.",
    tags: ["TypeScript", "Python", "Cloudflare", "Expo", "PyTorch", "SSE"],
    primary: { label: "GitHub", href: "https://github.com/adamkimmins/polybot" },
    ascii: `UI ▣─► ◉ STT

▲          │
│          │
│          ▼

◉ TTS ◄─▣ CF`,
  },
//   {
//     id: "smart-resume",
//     title: "Smart Resume",
//     description: "Resume analyzer + tailored bullets/cover letters with structured output.",
//     tags: ["Python", "JavaScript", "NLP", "Scoring"],
//     primary: { label: "Writeup", href: "#" },
//     ascii: `[docx]  [site]
//    │      ▼
//    │    [reqs]
//    ▼   ↙ 
// [parse] 
//    ▼
// [weigh]►[docx]`,
//   },
];
