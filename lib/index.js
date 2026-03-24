"use strict";

const chalk = require("chalk");
const os = require("os");

console.clear();

// Gradient manual
const gradient = (text) => {
  const colors = ["#6f00ff", "#8a2be2", "#a020f0", "#c71585"];
  return text
    .split("")
    .map((char, i) => chalk.hex(colors[i % colors.length])(char))
    .join("");
};

// Header
console.log(gradient(`
╔════════════════════════════════════════════╗
║        🚀 NIXCAL BAILEYS SYSTEM 🚀         ║
╚════════════════════════════════════════════╝
`));

// Info System
console.log(
  chalk.white(`
⚡ Status   : ${chalk.green("ONLINE")}
💻 Device   : ${chalk.cyan(os.hostname())}
🧠 CPU      : ${chalk.yellow(os.cpus()[0].model)}
📦 RAM      : ${chalk.magenta((os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + " GB")}
🌐 Platform : ${chalk.blue(os.platform())}
⏰ Uptime   : ${chalk.green((os.uptime() / 60).toFixed(1) + " min")}
`)
);

// Garis pemisah
console.log(chalk.gray("────────────────────────────────────────────"));

// Welcome text
console.log(
  gradient("✨ WELCOME TO NIXCAL BAILEYS BOT ✨\n")
);

// Loading animation simple
let dots = 0;
const loading = setInterval(() => {
  process.stdout.write(
    "\r" + chalk.yellow("Starting system" + ".".repeat(dots))
  );
  dots = (dots + 1) % 4;
}, 500);

setTimeout(() => {
  clearInterval(loading);
  console.log("\n" + chalk.green("✔ System Ready!\n"));
}, 3000);

// EXPORT
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));

var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;

const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;

__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
