"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
child_process_1.execSync(`cd ${__dirname}; npm ci`);
const core = __importStar(require("@actions/core"));
const latest_stable_version_1 = require("latest-stable-version");
async function run() {
    try {
        const owner = core.getInput("owner", { required: true });
        const repo = core.getInput("repo", { required: true });
        const version = await latest_stable_version_1.latestStableVersion({ owner, repo });
        core.setOutput("version", version);
    }
    catch (e) {
        core.setFailed(e instanceof Error ? e.message : JSON.stringify(e));
    }
}
void run();
