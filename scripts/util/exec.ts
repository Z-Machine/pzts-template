import util from "util"
import * as child_process from "child_process";
export const execSync = util.promisify(child_process.execSync);
export const exec = util.promisify(child_process.exec);
