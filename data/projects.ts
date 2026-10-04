export type Project = {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  primary: { label: string; href: string };
  lang: string[];
  ascii: string;
  // links: { label: "GitHub" | "Live" | "Writeup"; href: string }[];
};

export const projects: Project[] = [
 
{
    id: "telemetry-emb",
    title: "Heltec ESP32-S3 V4.3 HAL",
    description: "Developed an open-source Hardware Abstraction Layer (HAL) and helper library for Heltec 32 V4 boards, simplifying initialization and state management for board components",
    tags: ["C", "C++", "Embedded", "PlatformIO", "I/O", "Signal Processing"],
    primary: { label: "GitHub", href: "https://github.com/adamkimmins/HeltecV4Unofficial" },
    lang: ["C"],
    ascii: `  Platform
   │     ▲
   ▼     |
 HAL & Helper
   │     ▲
   ▼     │
Heltec V4 Board
 `
},
{
    id: "plc-emb",
    title: "IEEE PLC Control Demo",
    description: "Built an executable program for a PLC demonstration at an IEEE meeting featuring RoviSys engineers. Working from the hardware schematics we configured various input-output to the HOA (Hand-Off-Auto) switch.",
    tags: ["PLC", "Electrical schematics", "Ladder-Logic", "Embedded", "HOA Control",],
    primary: { label: "Demo", href: "#" },
    lang: ["Ladder Logic"],
    ascii: `  Operator
   │     ▲
   ▼     |
 HOA  System
   │     ▲
   ▼     │
     PLC
 `
}, 
// {
//     id: "telemetry-emb",
//     title: "ESP32 Telemetry Transmitter",
//     description: "Embedded FSM transmitter on Heltec V4 ESP32-S3: LoRa RF signalling, OLED status display, and hardware button I/O managed through a State Design Pattern architecture.",
//     tags: ["C++", "C", "Embedded", "LoRa", "PlatformIO", "I/O", "Signal Processing"],
//     primary: { label: "GitHub", href: "https://github.com/adamkimmins/ESP32-telemetry-transmitter" },
//     lang: ["C++"],
//     ascii: `  Receiver
//    │     ▲
//    ▼     |
//  LoRa & WiFi
//    │     ▲
//    ▼     │
//  Transmitter
//  `
// },
{
    id: "telemetry-sim",
    title: "Satellite Telemetry Simulator",
    description: "QML GUI connected with C++ satellite telemetry simulation: real-time telemtry transfer through dual-modal WSL2 data pipelines.",
    tags: ["C++",  "QT Quick", "WSL2", "File I/O", "Threads"],
    primary: { label: "GitHub", href: "https://github.com/adamkimmins/satellite-telemetry-simulator" },
    lang: ["C++"],
    ascii: `Backend <-Pipe
  |       ▲
 FSM      |
  |      ?in
  ▼       |
 Pipe--> GUI`
  },
  {
    id: "item-tracker",
    title: "Item Tracker",
    description: "Fast local item sorter and look-up. Data is sorted into two categories based on size and alphabetical order.",
    tags: ["C++", "CLI", "File I/O", "Maps"],
    primary: { label: "GitHub", href: "https://github.com/adamkimmins/item-tracker" },
    lang: ["C++"],
    ascii: `[items]
   │   ↖
   ▼    [sort]
 [find]↗ 
   │
   ▼
[pull]`
  },
//   {
//     id: "lyric-tools",
//     title: "Lyric Tools AI",
//     description: "Lyric drafting + revision tools with controllable tone/mood and constraints.",
//     tags: ["TypeScript", "LLMs", "API Design", "AI", "Cloudflare Workers"],
//     primary: { label: "Live", href: "https://cf_ai_lyric_tools.a-bellia.workers.dev/" },
//     lang: ["TypeScript"],
//     ascii: `▣ UI
// ▼
// ▣ Worker
// ▼
// ├─► /help
// ├─► /lyrics
// └─► /thesaurus`,
//   },
//       {
//     id: "solar-render",
//     title: "Solar Render",
//     description: "Three.js solar system simulation with textures, lighting, and many controls.",
//     tags: ["JavaScript", "Vector Math", "Three.js", "WebGL"],
//     primary: { label: "Live", href: "https://solar-render.pages.dev/" },
//     lang: ["JavaScript"],
// ascii: `[WebGL]─►[tex]
//   |       |
// [shader]  |
//   |       |
// [light]   |
//   |       ▼
//   └─► [render]`,
//   },
//     {
//     id: "smart-resume",
//     title: "Smart Resume",
//     description: "Resume weighing tool with skill match scoring, compare your resume against job requirements.",
//     tags: ["IndexedDB", "JavaScript", "Mammoth.js",],
//     primary: { label: "Unlisted (In Review)", href: "#" },
//     lang: ["JavaScript"],
//     ascii: `[file]  [site]
//    │      ▼
//    │    [reqs]
//    ▼   ↙ 
// [parse] 
//    ▼
// [weigh]►[file]`,
//   },
//     {
//     id: "polybot",
//     title: "Polybot",
//     description: "Real-time language practice app with streaming UX. (WIP)",
//     tags: [ "Python", "PyTorch", "TypeScript", "Expo", "SSE"],
//     primary: { label: "GitHub", href: "https://github.com/adamkimmins/polybot" },
//     lang: ["TypeScript"],
//     ascii: `UI ▣─► ◉ STT

// ▲          │
// │          │
// │          ▼

// ◉ TTS ◄─▣ CF`,
//   },
];
