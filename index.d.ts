import pm = require("parsimmon");
/** Parse-able TypeScript versions. Only add to this list if we will support this version on DefinitelyTyped. */
export declare type TypeScriptVersion = "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "3.0" | "3.1";
export declare namespace TypeScriptVersion {
    const all: ReadonlyArray<TypeScriptVersion>;
    const lowest: TypeScriptVersion;
    /** Latest version that may be specified in a `// TypeScript Version:` header. */
    const latest: TypeScriptVersion;
    /** @deprecated */
    function isPrerelease(_version: TypeScriptVersion): boolean;
    function range(min: TypeScriptVersion): ReadonlyArray<TypeScriptVersion>;
    /** List of NPM tags that should be changed to point to the latest version. */
    function tagsToUpdate(typeScriptVersion: TypeScriptVersion): ReadonlyArray<string>;
    function previous(v: TypeScriptVersion): TypeScriptVersion | undefined;
    function isRedirectable(v: TypeScriptVersion): boolean;
}
export interface Header {
    readonly libraryName: string;
    readonly libraryMajorVersion: number;
    readonly libraryMinorVersion: number;
    readonly typeScriptVersion: TypeScriptVersion;
    readonly projects: ReadonlyArray<string>;
    readonly contributors: ReadonlyArray<Author>;
}
export interface Author {
    readonly name: string;
    readonly url: string;
    readonly githubUsername: string | undefined;
}
export interface ParseError {
    readonly index: number;
    readonly line: number;
    readonly column: number;
    readonly expected: ReadonlyArray<string>;
}
export declare function isTypeScriptVersion(str: string): str is TypeScriptVersion;
export declare function makeTypesVersionsForPackageJson(typesVersions: ReadonlyArray<TypeScriptVersion>): unknown;
export declare function parseHeaderOrFail(mainFileContent: string): Header;
export declare function validate(mainFileContent: string): ParseError | undefined;
export declare function renderExpected(expected: ReadonlyArray<string>): string;
export declare function parseTypeScriptVersionLine(line: string): TypeScriptVersion;
declare module "parsimmon" {
    type Pr<T> = pm.Parser<T>;
    function seqMap<T, U, V, W, X, Y, Z, A, B, C>(p1: Pr<T>, p2: Pr<U>, p3: Pr<V>, p4: Pr<W>, p5: Pr<X>, p6: Pr<Y>, p7: Pr<Z>, p8: Pr<A>, p9: Pr<B>, cb: (a1: T, a2: U, a3: V, a4: W, a5: X, a6: Y, a7: Z, a8: A, a9: B) => C): Pr<C>;
}
