import path from "path";
import * as fs from "fs-extra";
(() => {
    const distDir = path.resolve(__dirname, "../dist/");
    fs.emptyDirSync(distDir);
})();
