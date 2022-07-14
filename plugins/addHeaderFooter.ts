import type * as tstl from "typescript-to-lua";

const HEADER = `--[[
This Project Zomboid mod was created with TypeScript.

The Lua code in this file is not actually the source code for the program. Rather, it was
automatically generated from higher-level TypeScript code, and might be hard to read. If you want to
understand how the code in this mod works, you should read the actual TypeScript source code
directly instead of trying to read this file. Usually, the link to the source code can be found in
the mod's description on the Steam Workshop. If not, you can ask the mod author directly if the
source code is publicly available.
--]]

`;

const FOOTER = `
--[[ Compiled on: ${new Date()} --]]`;

const plugin: tstl.Plugin = {
    beforeEmit(_program, _options, _emitHost, result) {
        for (const file of result) {
            file.code = `${HEADER}${file.code}${FOOTER}`;
        }
    },
};

export default plugin;
