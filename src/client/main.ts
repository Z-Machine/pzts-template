import { subdirTest } from "./dir/subdir/test";
import { dirTest } from "./dir/test";
import { makeHello } from "./mainShared";
import { DoesThisWork } from "./server/testing";
import { clientTest } from "./sub/test";

export function makeClientHello(from: string) {
    //console.log(`[Client] Hello from ${from}`);
}

makeClientHello("Client");
//makeServerHello("Client")
makeHello("Client");

clientTest();
dirTest();
subdirTest();
DoesThisWork();
