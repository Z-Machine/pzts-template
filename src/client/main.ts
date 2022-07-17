import { onGameTimeLoaded } from "ZomboidEvents";
import { makeHello } from "../shared/mainShared";
import { makeHelloClient } from "./nested/deeper/file";

makeHello("Client");
makeHelloClient("Client");

onGameTimeLoaded.addListener(() => {
    $print(`onGameTimeLoaded was fired.`);
})
