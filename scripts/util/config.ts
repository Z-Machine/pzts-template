export const packageInfo: packageInfo = require("../../package.json");
export const config: config = require("../../config.json");

export interface packageInfo {
    name: string,
    version: string,
    description: string,
    [key: string]: unknown,
}

export interface config {
    /**  The path where the bundled mod should be copied. */
    outDir: string,
    /** The path to the game's binary */
    gameBin: string,
    /** List of launch options */
    options: string[],
}
