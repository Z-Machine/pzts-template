export function makeHello(from: string) {
    print(`[Shared] Hello from ${from}`);
}

export function test() {}

makeHello("Shared");

const arr = [1, 2, 3];

arr.forEach((i) => {
    print(i);
});

os.execute();

const a: undefined | string = "Hello";

if (a !== "") {
    print("Hello");
}

os.clock();
