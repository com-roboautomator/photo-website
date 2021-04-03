module.exports = {
    /**
     * The line length where Prettier will try wrap.
     *
     * Default: 80
     */
    printWidth: 80,

    /**
     * Print spaces between brackets.
     *
     * Default: true
     */
    bracketSpacing: false,

    /**
     * Include parentheses around a sole arrow function parameter.
     *
     * "always" (default) - Always include parens. Example: `(x) => x`
     * "avoid" - Omit parens when possible. Example: `x => x`
     */
    arrowParens: 'always',

    /**
     * Use single quotes instead of double quotes.
     *
     * Default: false
     */
    singleQuote: true,

    /**
     * Number of spaces per indentation level.
     *
     * Default: 2
     */
    tabWidth: 4,

    /**
     * Print trailing commas wherever possible when multi-line.
     *
     * "es5" (default) - Trailing commas where valid in ES5 (objects, arrays, etc.)
     * "none" - No trailing commas.
     * "all" - Trailing commas wherever possible (including function arguments).
     */
    trailingComma: 'es5',

    /**
     * Put > on the last line instead of at a new line.
     *
     * Default: false
     */
    jsxBracketSameLine: true,

    /**
     * Use single quotes in JSX.
     *
     * Default: false
     */
    jsxSingleQuote: false,

    /**
     * How to wrap prose.
     *
     * "always" - Wrap prose if it exceeds the print width.
     * "never" - Do not wrap prose.
     * "preserve" (default) - Wrap prose as-is.
     */
    proseWrap: 'always',

    /**
     * Change when properties in objects are quoted.
     *
     * "as-needed" (default) - Only add quotes around object properties where required
     * "consistend" - If at least one property in an object requires quotes, quote all properties.
     * "preserve" - Respect the input use of quotes in object properties.
     */
    quoteProps: 'as-needed',

    /**
     * Indent with tabs instead of spaces.
     *
     * Default: false
     */
    useTabs: false,

    /**
     * Print semicolons.
     * true - add a semicolon at the end of every line
     * false - only add semicolons at the beginning of lines that may introduce ASI failures
     *
     * Default: true
     */
    semi: false,

    /**
     * Control how Prettier formats quoted code embedded in the file.
     *
     * "auto" (default) - Format embedded code if Prettier can automatically identify it.
     * "off" - Never automatically format embedded code.
     */
    embeddedLanguageFormatting: 'auto',

    /**
     * Which end of line characters to apply.
     *
     * "lf" (default) - Line Feed only (\\n), common on Linux and macOS as well as inside git repos
     * "crlf" - Carriage Return + Line Feed characters (\\r\\n), common on Windows
     * "cr" - Carriage Return character only (\\r), used very rarely
     * "auto" - Maintain existing\n(mixed values within one file are normalised by looking at what's used after the first line)
     */
    endOfLine: 'lf',

    /**
     * How to handle whitespaces in HTML.
     *
     * "css" (default) - Respect the default value of CSS display property.
     * "strict" - Whitespaces are considered sensitive.
     * "ignore" - Whitespaces are considered insensitive.
     */
    htmlWhitespaceSensitivity: 'css',

    /**
     * Insert @format pragma into file's first docblock comment.
     * Default: false
     */
    // insertPragma: false,

    /**
     * Print (to stderr) where a cursor at the given position would move to after formatting.
     *
     * This option cannot be used with --range-start and --range-end.
     *
     * Default: -1 (Integer)
     */
    // cursorOffset: -1,

    /**
     * Indent script and style tags in Vue files.
     *
     * Default: false
     */
    // vueIndentScriptAndStyle: false,

    /**
     * Format code ending at a given character offset (exclusive).
     *
     * The range will extend forwards to the end of the selected statement.
     *
     * This option cannot be used with --cursor-offset.
     *
     * Default: null (Integer)
     */
    // rangeEnd: null,

    /**
     * Format code starting at a given character offset.
     *
     * The range will extend backwards to the start of the first line containing the selected statement.
     *
     * This option cannot be used with --cursor-offset
     *
     * Default: 0 (Integer)
     */
    // rangeStart: 0,

    /**
     * Require either '@prettier' or '@format' to be present in the file's first docblock comment
     * in order for it to be formatted.
     *
     * Default: false
     */
    // requirePragma: false,

    /**
     * Which parser to use.
     *
     * Can be:
     *  - flow
     *  - babel
     *  - babel-flow
     *  - babel-ts
     *  - typescript
     *  - css
     *  - less
     *  - scss
     *  - json
     *  - json5
     *  - json-stringify
     *  - graphql
     *  - markdown
     *  - mdx
     *  - vue
     *  - yaml
     *  - html
     *  - angular
     *  - lwc
     *
     * This is inferred when prettier is instantiated
     */
    // parser: 'babel-ts',

    /**
     * Custom directory that contains prettier plugins in node_modules subdirectory.
     *
     * Overrides default behavior when plugins are searched relatively to the location of Prettier.
     *
     * Multiple values are accepted.
     */
    // pluginSearchDirs: [''],

    /**
     * Add a plugin. Multiple plugins can be passed as separate `--plugin`s.
     */
    // plugins: [''],

    /**
     * Specify the input filepath. This will be used to do parser inference.
     */
    // filepath: '',
}
