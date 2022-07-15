import { makeHello } from "../shared/mainShared";
import { makeHelloClient } from "./nested/deeper/file";

makeHello("Client");
makeHelloClient("Client");
