const { createConfig } = require("eslint-config-galex/dist/createConfig");

module.exports = createConfig({
  rules: {
    // eslint-core rules
    /**
     * prevents forgotten debug statements. either uncomment the line
     * or remove the statement
     *
     * @see https://eslint.org/docs/rules/no-console
     */
    "no-console": ["warn", { allow: ["warn", "error"] }],

    /**
     * off unsafe null comparison check
     *
     * @see https://eslint.org/docs/rules/no-eq-null
     */
    "no-eq-null": "off",

    /**
     * off unsafe comparison check
     *
     * @see https://eslint.org/docs/rules/eqeqeq
     */
    eqeqeq: "off",

    // import rules
    /**
     * off this rule for Prettier ordering
     * - groups imports
     * - alphabetically sorts them
     * - enforces new lines between groups
     *
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
     */
    "import/order": "off",

    /**
     * any module should exclusively contain named exports
     * when unavoidable due to limitations, disable the warning for this line
     *
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
     */
    "import/no-default-export": "off",
  },
});
