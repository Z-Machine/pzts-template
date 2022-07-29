/**
 * This build script is responsible for bundling the mod and deploying it to outDir.
 */
import chalk from "chalk";
import * as fs from "fs-extra";
import path from "path";
import { config, packageInfo } from "./util/config";
import ConvertMD2BB from "./util/md2sbb";

(() => {
    const timeLabel = `Bundle`;
    console.time(timeLabel);
    console.timeLog(timeLabel, chalk.green("Ensuring folders exist..."));

    const cwd = path.join(__dirname, `../`);
    const distDir = path.join(cwd, `./dist/`);
    const assetDir = path.join(cwd, `./assets/`);
    const workshopModDir = path.join(config.outDir, `./${packageInfo.name}/`);
    const modDir = path.join(workshopModDir, `./Contents/mods/${packageInfo.name}`);

    fs.ensureDirSync(distDir); // create cwd/dist if missing.
    fs.ensureDirSync(assetDir); // create cwd/assets if missing.
    fs.emptyDirSync(workshopModDir); // create mod's workshop dir.
    fs.emptyDirSync(modDir); // create Contents/mods/{mod id}

    {
        console.timeLog(timeLabel, chalk.green("Building workshop.txt"));
        const file = path.join(workshopModDir, `./workshop.txt`);
        let data = `version=${config.workshop.version}\n`;
        data += `title=${config.workshop.title}\n`;
        data += `tags=${config.workshop.tags}\n`;
        data += `visibility=${config.workshop.visibility}\n`;

        const markdown = fs.readFileSync(path.join(cwd, config.workshop.description), {
            encoding: "utf-8",
        });
        const steambb = ConvertMD2BB(markdown);
        steambb.split("\n").forEach((line) => {
            data += `description=${line}\n`;
        });

        fs.writeFileSync(file, data, { encoding: "utf-8" });

        console.timeLog(timeLabel, chalk.green("Copying workshop preview..."));
        const preview = path.join(cwd, config.workshop.preview);
        const previewOut = path.join(workshopModDir, `./preview.png`);
        fs.copySync(preview, previewOut);
    }

    console.timeLog(timeLabel, chalk.green("Copying assets..."));
    fs.copySync(assetDir, modDir); // Copy assets over.

    // {
    //     console.timeLog(timeLabel, chalk.green("Copying Zomboid.lua..."));
    //     const sharedDir = path.join(distDir, `./shared/`);
    //     const zomboidLua = path.join(__dirname, `../typing/PipeWrench/Zomboid.lua`);

    //     fs.ensureDirSync(sharedDir);
    //     if (fs.statSync(zomboidLua).isFile()) {
    //         const copyLocation = path.join(sharedDir, path.basename(zomboidLua));
    //         fs.copySync(zomboidLua, copyLocation);
    //     }
    // }

    console.timeLog(timeLabel, chalk.green("Copying lua files..."));
    const luaDir = path.join(modDir, `./media/lua/`);
    fs.ensureDirSync(luaDir);
    fs.copySync(distDir, luaDir);

    console.timeEnd(timeLabel);
})();
