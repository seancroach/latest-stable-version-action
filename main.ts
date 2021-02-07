import { execSync } from "child_process";
execSync(`cd ${__dirname}; npm ci`);

import * as core from "@actions/core";
import { latestStableVersion } from "latest-stable-version";

async function run(): Promise<void> {
  try {
    const owner = core.getInput("owner", { required: true });
    const repo = core.getInput("repo", { required: true });

    const version = await latestStableVersion({ owner, repo });

    core.setOutput("version", version);
  } catch (e: unknown) {
    core.setFailed(e instanceof Error ? e.message : JSON.stringify(e));
  }
}

void run();
