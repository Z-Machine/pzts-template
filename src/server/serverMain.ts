import { makeHello } from "../shared/mainShared";

export default function makeHelloServer(from: string) {
    print(`[Server] Hello from ${from}`);
}

makeHello("Server");
makeHelloServer("Server");
