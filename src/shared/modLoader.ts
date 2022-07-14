import { getActivatedMods, getFileReader, getLoadedLua, getLoadedLuaCount, getModDirectoryTable, getUrlInputStream, java, LuaEnvironment, reloadLuaFile } from "Zomboid";

declare function loadstream(input: java.io.Reader | java.io.InputStream, name: string): [unknown, string?]

class ModLoader {
    protected static instance?: ModLoader;
    static Instance(): ModLoader {
        if (this.instance === undefined) {
            this.instance = new ModLoader();
        }

        return this.instance;
    }

    protected constructor() {
        // We can iterate over all the mod locations loaded by the game and compare them to active mods.
        const activeMods = getActivatedMods();
        const modPaths: LuaTable<number, string> = getModDirectoryTable();
        for (const [_, path] of modPaths) {

        }

        // Could be used as a replacement for dofile.
        reloadLuaFile("v:/loadme.lua")

        // try loadstream
        const reader = getFileReader("v:\loadme.lua", false);
        let loadme: unknown;
        if (reader) {
            loadme = loadstream(reader, "loadme")
        }
        print(loadme) // Results in a closure userdata

        // We can iterate over all the currently loaded lua files to find the game's install directory.
        const count = getLoadedLuaCount();
        if (count) {
            for (let index = 0; index < count-1; index++) {
                const luaPath = getLoadedLua(index);
                print(luaPath);
            }
        }
    }
}

export default ModLoader.Instance();
