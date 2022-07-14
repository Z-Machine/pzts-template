import { Vector2 } from "Zomboid"
import { subdirTest } from "./dir/subdir/test";
import { dirTest } from "./dir/test"

export function makeHello(from: string) {
    //console.log("Hello World");
}

makeHello("Shared")
dirTest();
subdirTest();

const v = new Vector2(0, 0);
print(`Vector: ${v.toString()}`)
