import * as fs from "fs-extra";
import path from "path";

/**
 * Reads a json file relative to `__dirname`
 * and returns an object.
 */
function loadJson<T>(str: string): T {
    const file = path.resolve(__dirname, str);
    if (!fs.lstatSync(file).isFile()) {
        throw `${file} is not a file.`;
    }
    return fs.readJSONSync(file, {
        encoding: "utf-u",
    }) as T;
}

export interface PackageInfo {
    [key: string]: unknown;
    name: string;
    version: string;
    description: string;
}

export interface Config {
    /** workshop.txt in json form. */
    workshop: {
        /** Is this ever not 1? */
        version: "1";
        id: string;
        title: string;
        /** Point this at a markdown file such as README.md */
        descriptionFile: string;
        tags: string;
        visibility: "public" | "friendsOnly";
    };
    /** The path where the bundled mod should be copied. */
    outDir: string;
    /** The path to the game's binary */
    gameBin: string;
    /** List of launch options */
    options: string[];
}

export const packageInfo = loadJson<PackageInfo>("../../package.json");
export const config = loadJson<Config>("../../config.json");
