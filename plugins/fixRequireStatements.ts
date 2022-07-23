import type * as tstl from "typescript-to-lua";

const requireRegex = /require\("(.*)"\)/g;
const scopeRegex = /"(?:shared|client|server)\./gi;
const sepRegex = /[.]/g;

// @pzts/zomboid_template
// const npmNameRegex = /(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*/g;

/**
 * Match the innerText of the require statement and then replace all the . with /
 */
function fixRequire(lua: string): string {
    return lua.replaceAll(requireRegex, (match) => {
        // console.log(match);
        const str = match
            .replaceAll(scopeRegex, '"') // Strip the scope
            .replaceAll(sepRegex, "/"); // Replace dots with slash
        // console.log(str);
        return str;
    });
}

const plugin: tstl.Plugin = {
    beforeEmit(_program, _options, _emitHost, result) {
        result.forEach((file) => {
            file.code = fixRequire(file.code);
        });
    },
};

export default plugin;
