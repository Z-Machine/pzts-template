declare interface $DebugInfo {
    file: string;
    lineNumber: number;
    character: number;
    rawText: string;
}

declare function $dbg<T>(expression: T): T;
declare function $dbg<T>(
    expression: T,
    customHandler: (value: Readonly<T>, debbug: $DebugInfo) => void
): T;

/**
 * Will prefix a print statement with `[filePath:fileNumber]`
 * This macro's output is toggled with the `enabled` setting in plugins.
 */
declare function $print(...params: unknown[]): void;
/**
 * Will return `[filePath:fileNumber]` the same as the prefix of $print.
 */
declare function $line(): string;

declare interface $git {
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
declare function $git(): $git;

/**
 * Macro that returns an object containing specified git properties
 * @param props The properties to filter out
 */
declare function $git<K extends keyof $git>(...props: K[]): $GitProps<K>;

/**
 * Returns the unix timestamp of the time the code was compiled
 */
declare function $compileTime(): number;
