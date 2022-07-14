import { require as oldRequire } from "Zomboid"

/**
 * `@` starts with the at symbol.
 * `[%w_-]+` 1 or more alphanumeric including underscore and hyphen. This is the modID.
 * `:` ends with the colon symbol.
 */
const modIdPattern = "@[%w_-]+:";
interface ModuleInfo {
    mod: string,
    path: string,
}
/**
 * Return a populated ModuleInfo if the string is a valid require statement.
 */
function parsePath(path: string): ModuleInfo | undefined {
    const [match] = string.match(path, modIdPattern);
    if (match === undefined) {
        print(debug.traceback(`Invalid require statement "${path}"`));
        return undefined;
    }

    const modId = match.substring(1, match.length-1); //Strip @ and :
    const modPath = path.substring(match.length) //Strip @modId:

    if (modId !== undefined && modPath !== undefined) {
        print(modId, modPath);
        return {
            mod: modId,
            path: modPath,
        }
    }

    return undefined;
}

const str = "@pipewrench:client/main"
const module = parsePath(str);

/**
 * Detours require and checks for `@modid:` prefix otherwise it will fallback
 * on default behavior.
 * @param path
 * @returns
 */
function newRequire(path: string) {
    const modInfo = parsePath(path);
    if (modInfo) {
        const newPath = `${modInfo.mod}/media/lua/${modInfo.path}`;
        const [mod, reason] = loadfile(newPath);
        if (mod !== undefined) {
            return mod();
        }

        //$error(debug.traceback(`Error resolving "${newPath}"\n\nReason: ${reason}`));
        error(debug.traceback(`Error resolving "${newPath}"\n\nReason: ${reason}`));
    }
    return oldRequire(path);
}

globalThis["require"] = newRequire;
export default require;
