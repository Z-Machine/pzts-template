import { getFileReader, InputStream, LuaClosure, Reader } from "Zomboid";

/**
 * Returns a `LuaClosure`
 */
declare function loadstream(input: Reader | InputStream, name: string): [unknown?, string?]

// try loadstream
const reader = getFileReader("v:\loadme.lua", false);
const loadme = loadstream(reader, "loadme")
print(loadme) // Results in a closure userdata
