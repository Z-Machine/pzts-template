export function makeHello(from: string) {
    print(`[Shared] Hello from ${from}`);
}

makeHello("Shared")

const arr = [1, 2, 3]

arr.forEach((i) => {
    print(i)
})
