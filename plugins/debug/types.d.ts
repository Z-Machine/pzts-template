export interface $DebugInfo {
    file: string;
    lineNumber: number;
    character: number;
    rawText: string;
}

export function $dbg<T>(expression: T): T;
export function $dbg<T>(
    expression: T,
    customHandler: (value: Readonly<T>, debbug: $DebugInfo) => void
): T;

/**
 * Will prefix a print statement with `[filePath:fileNumber]`
 */
export function $print(...params: unknown[]): void;
/**
 * Will prefix an error statement with `[filePath:fileNumber]`
 */
export function $error(...params: unknown[]): never;

export interface $git {
    /**
     * The name of the branch this project is on
     */
    readonly Branch: string;
    /**
     * The current short commit hash (7 characters)
     */
    readonly Commit: string;
    /**
     * The current full commit hash
     */
    readonly CommitHash: string;
    /**
     * The latest tag this project has (will be an empty string, if no tags have ever been applied)
     */
    readonly LatestTag: string;

    /**
     * The ISO-formatted date time of the current commit
     */
    readonly ISODate: string;

    /**
     * The unix timestamp of this commit
     */
    readonly Timestamp: number;
}

type $GitProps<K extends keyof $git> = Pick<$git, K>;

/**
 * Macro that returns an object containing all the git information
 */
export function $git(): $git;

/**
 * Macro that returns an object containing specified git properties
 * @param props The properties to filter out
 */
export function $git<K extends keyof $git>(...props: K[]): $GitProps<K>;

/**
 * Returns the unix timestamp of the time the code was compiled
 */
export function $compileTime(): number;
