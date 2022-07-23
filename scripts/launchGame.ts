/**
 * This build script is responsible for deploying the mod to outDir.
 */
import { execSync } from "child_process";
import path from "path";
import { config } from "./util/config";

(() => {
    const gameDir = path.dirname(config.gameBin);
    execSync(`${config.gameBin} ${config.options.join(" ")}`, {
        cwd: gameDir,
        stdio: ["ignore"],
        shell: "/bin/bash",
    });
})();
