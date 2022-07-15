/**
 * This build script is responsible for bundling the mod and deploying it to outDir.
 */
import path from "path";
import chalk from "chalk";
import * as fs from "fs-extra";

import { config, packageInfo } from "./util/config";

(() => {
    const timeLabel = `Bundle`;
    console.time(timeLabel);
    console.timeLog(timeLabel, chalk.green("Ensuring folders exist..."));

    const distDir = path.join(__dirname, `../dist/`);
    const assetDir = path.join(__dirname, `../assets/`);
    const modDir = path.join(config.outDir, `./${packageInfo.name}/`);

    fs.ensureDirSync(distDir); // create if missing.
    fs.ensureDirSync(assetDir); // create if missing.
    fs.emptyDirSync(modDir); // create or clear.

    console.timeLog(timeLabel, chalk.green("Copying assets..."));
    fs.copySync(assetDir, modDir); // Copy assets over.

    {
        console.timeLog(timeLabel, chalk.green("Copying Zomboid.lua..."));
        const sharedDir = path.join(distDir, `./shared/`);
        const zomboidLua = path.join(__dirname, `../typing/PipeWrench/Zomboid.lua`);

        fs.ensureDirSync(sharedDir);
        if (fs.statSync(zomboidLua).isFile()) {
            const copyLocation = path.join(sharedDir, path.basename(zomboidLua));
            fs.copySync(zomboidLua, copyLocation)
        }
    }


    console.timeLog(timeLabel, chalk.green("Copying lua files..."));
    const luaDir = path.join(modDir, `./media/lua/`);
    fs.ensureDirSync(luaDir);
    fs.copySync(distDir, luaDir);

    console.timeEnd(timeLabel);
})();
