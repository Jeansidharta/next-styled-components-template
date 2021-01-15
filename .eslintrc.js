const WARN = `warn`;
const ERROR = `error`;
const OFF = `off`;

// eslint-disable-next-line no-undef
module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	extends: [`plugin:@typescript-eslint/recommended`],
	parser: `@typescript-eslint/parser`,
	parserOptions: {
		ecmaFeatures: { jsx: true },
		ecmaVersion: 12,
		sourceType: `module`,
	},
	plugins: [
		`react`,
		`@typescript-eslint`,
		`jsx-a11y`,
	],
	rules: {

		/* ----------------------Possible Errors-------------------------------- */

		/** Enforce return statement on getters */
		'getter-return': [ERROR],
		/** Enforce "for" loop update clause moving the counter in the right direction. */
		'for-direction': [ERROR],
		/** In promise constructors, can't use an async function */
		'no-async-promise-executor': [ERROR],
		/** Cannot have await inside loops. */
		'no-await-in-loop': [WARN],
		/** Cannot compare to negative zero. */
		'no-compare-neg-zero': [ERROR],
		/** Disallow assignment operators in conditional statements (inside ifs or whiles) */
		'no-cond-assign': [WARN],
		/** Only allow console warnings and errors. */
		'no-console': [ERROR, { allow: [WARN, ERROR] }],
		/** Don't allow conditional checks with constants (ex: `if (true) {}`). */
		'no-constant-condition': [WARN, { checkLoops: false }],
		/** Disallow control characters in regular expressions */
		'no-control-regex': [ERROR],
		/** Disallow the use of `debugger` statement */
		'no-debugger': [ERROR],
		/** Disallow duplicate conditions in if-else-if chains */
		'no-dupe-else-if': [ERROR],
		/** Disallow duplicate keys in object literals */
		'no-dupe-keys': [ERROR],
		/** Rule to disallow a duplicate case label in switch statements */
		'no-duplicate-case': [ERROR],
		/** Disallow empty character classes in regular expressions (e.g. /^abc[]/) */
		'no-empty-character-class': [ERROR],
		/** Disallow reassigning exceptions in catch clauses */
		'no-ex-assign': [WARN],
		/** Disallow unnecessary boolean casts */
		'no-extra-boolean-cast': [ERROR],
		/** Disallow unnecessary parentheses */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'no-extra-parens': [ERROR, `all`],
		/** Disallow reassigning function declarations */
		'no-func-assign': [ERROR],
		/** Disallow assigning to imported bindings */
		'no-import-assign': [ERROR],
		/** Disallow variable or function declarations in nested blocks
		 * This rule has a string option:
		 * - "functions" (default) disallows function declarations in nested blocks
		 * - "both" disallows function and var declarations in nested blocks
		 */
		'no-inner-declarations': [ERROR, `both`],
		/** Disallow invalid regular expression strings in RegExp constructors */
		'no-invalid-regexp': [ERROR],
		/** Disallow irregular whitespace (Any whitespace that is not a newline, space or tab) */
		'no-irregular-whitespace': [ERROR],
		/** Disallow Number Literals That Lose Precision */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'no-loss-of-precision': [ERROR],
		/** Disallow characters which are made with multiple code points in character class syntax */
		'no-misleading-character-class': [ERROR],
		/** Disallow calling global object properties as functions (objets such as Math,
		* JSON or Reflect) */
		'no-obj-calls': [ERROR],
		/** Disallow returning values from Promise executor functions */
		'no-promise-executor-return': [OFF],
		/** Disallow use of Object.prototypes builtins directly (such as hasOwnProperty
		* or isPrototypeOf) */
		'no-prototype-builtins': [ERROR],
		/** Disallow multiple spaces in regular expression literals */
		'no-regex-spaces': [ERROR],
		/** Disallow returning values from setters */
		'no-setter-return': [ERROR],
		/** Disallow sparse arrays (such as [,,'a',,,]) */
		'no-sparse-arrays': [ERROR],
		/** Disallow template literal placeholder syntax in regular strings */
		'no-template-curly-in-string': [WARN],
		/** Disallow confusing multiline expressions */
		'no-unexpected-multiline': [ERROR],
		/** Disallow unreachable code after return, throw, continue, and break statements */
		'no-unreachable': [ERROR],
		/** Disallow loops with a body that allows only one iteration */
		'no-unreachable-loop': [ERROR],
		/** Disallow control flow statements in finally blocks */
		'no-unsafe-finally': [WARN],
		/** Disallow negating the left operand of relational operators (ex: !key in object) */
		'no-unsafe-negation': [ERROR],
		/** Disallow use of optional chaining in contexts where the undefined value is not allowed */
		'no-unsafe-optional-chaining': [ERROR],
		/** Disallow useless backreferences in regular expressions */
		'no-useless-backreference': [ERROR],
		/** Disallow assignments that can lead to race conditions due to usage of await or yield */
		'require-atomic-updates': [ERROR],
		/** Require calls to isNaN() when checking for NaN */
		'use-isnan': [ERROR],
		/** Enforce comparing typeof expressions against valid strings */
		'valid-typeof': [ERROR],
		/** Disallow unnecessary semicolons */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'no-extra-semi': [ERROR],

		/* -------------------------------Best Practices------------------------- */

		/** Enforces getter/setter pairs in objects and classes */
		'accessor-pairs': [OFF],
		/** Enforces return statements in callbacks of array's methods */
		'array-callback-return': [WARN, { allowImplicit: true, checkForEach: false }],
		/** Treat var as Block Scoped */
		'block-scoped-var': [OFF], // OFF because wont ever use var
		/** Enforce that class methods utilize this */
		'class-methods-use-this': [OFF],
		/** Limit Cyclomatic Complexity */
		'complexity': [OFF],
		/** Require return statements to either always or never specify values */
		'consistent-return': [OFF],
		/** Require Following Curly Brace Conventions */
		'curly': [OFF],
		/** Require Default Case in Switch Statements */
		'default-case': [OFF],
		/** Enforce default clauses in switch statements to be last  */
		'default-case-last': [OFF],
		/** Require Default Case in Switch Statements */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'default-param-last': [OFF],
		/** Enforce newline before and after dot */
		'dot-location': [ERROR, `property`],
		/** Require Dot Notation (e.g. foo['bar'] -> foo.bar) */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'dot-notation': [OFF],
		/** Require === and !== */
		'eqeqeq': [WARN],
		/** Require grouped accessor pairs in object literals and classes (getters
		* and setters must be adjacent) */
		'grouped-accessor-pairs': [WARN],
		/** Require Guarding for-in (check for hasOwnProperty on for-in) */
		'guard-for-in': [OFF], // Off because NEVER USE for-in. It's broken.
		/** Enforce a maximum number of classes per file */
		'max-classes-per-file': [OFF],
		/** Disallow Use of Alert */
		'no-alert': [WARN],
		/** Disallow Use of caller/callee */
		'no-caller': [ERROR],
		/** Disallow lexical declarations in case/default clauses */
		'no-case-declarations': [ERROR],
		/** Disallow returning value in constructor */
		'no-constructor-return': [OFF], // Sometimes it's useful to just return.
		/** Disallow Regular Expressions That Look Like Division  */
		'no-div-regex': [WARN],
		/** Disallow return before else */
		'no-else-return': [OFF], // A else after a return may be useless, but it's prettier.
		/** Disallow empty functions */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'no-empty-function': [WARN, { allow: [`arrowFunctions`, `methods`] }],
		/** Disallow empty destructuring patterns */
		'no-empty-pattern': [ERROR],
		/** Disallow Null Comparisons */
		'no-eq-null': [WARN],
		/** Disallow eval() */
		'no-eval': [ERROR],
		/** Disallow Extending of Native Objects */
		'no-extend-native': [ERROR],
		/** Disallow unnecessary function binding */
		'no-extra-bind': [WARN],
		/** Disallow Unnecessary Labels */
		'no-extra-label': [WARN],
		/** Disallow Case Statement Fallthrough */
		'no-fallthrough': [ERROR],
		/** Disallow Floating Decimals */
		'no-floating-decimal': [ERROR],
		/** Disallow assignment to native objects or read-only global variables */
		'no-global-assign': [ERROR],
		/** Disallow the type conversion with shorter notations */
		'no-implicit-coercion': [WARN],
		/** Disallow declarations in the global scope */
		'no-implicit-globals': [OFF], // Turning this on would disallow global function declarations
		/** Disallow Implied eval() */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'no-implied-eval': [ERROR],
		/** Disallow this keywords outside of classes or class-like objects */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'no-invalid-this': [ERROR],
		/** Disallow Iterator (only the bad kind) */
		'no-iterator': [ERROR],
		/** Disallow Labeled Statements (this allows a goto statement) */
		'no-labels': [ERROR], // No goto here!
		/** Disallow Unnecessary Nested Blocks */
		'no-lone-blocks': [WARN],
		/** Disallow Functions in Loops */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'no-loop-func': [OFF],
		/** Disallow Magic Numbers */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'no-magic-numbers': [WARN],
		/** Disallow multiple spaces */
		'no-multi-spaces': [WARN],
		/** Disallow Multiline Strings */
		'no-multi-str': [ERROR], // Use template strings!
		/** Disallow new For Side Effects */
		'no-new': [WARN],
		/** Disallow Function Constructor */
		'no-new-func': [ERROR],
		/** Disallow Primitive Wrapper Instances */
		'no-new-wrappers': [ERROR],
		/** Disallow \8 and \9 escape sequences in string literals */
		'no-nonoctal-decimal-escape': [ERROR],
		/** Disallow octal literals */
		'no-octal': [WARN],
		/** Disallow octal escape sequences in string literals */
		'no-octal-escape': [WARN],
		/** Disallow Reassignment of Function Parameters */
		'no-param-reassign': [WARN],
		/** Disallow Use of __proto__ */
		'no-proto': [ERROR],
		/** Disallow variable redeclaration */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'no-redeclare': [ERROR],
		/** Disallow certain object properties */
		'no-restricted-properties': [OFF],
		/** Disallow Assignment in return Statement */
		'no-return-assign': [WARN],
		/** Disallows unnecessary return await */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'no-return-await': [OFF],
		/** Disallow Script URLs */
		'no-script-url': [ERROR],
		/** Disallow Self Assignment */
		'no-self-assign': [ERROR],
		/** Disallow Self Compare */
		'no-self-compare': [ERROR],
		/** Disallow Use of the Comma Operator */
		'no-sequences': [ERROR],
		/** Restrict what can be thrown as an exception */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'no-throw-literal': [WARN],
		/** Disallow unmodified conditions of loops */
		'no-unmodified-loop-condition': [WARN],
		/** Disallow Unused Expressions */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'no-unused-expressions': [WARN],
		/** Disallow Unused Labels */
		'no-unused-labels': [ERROR],
		/** Disallow unnecessary .call() and .apply() */
		'no-useless-call': [WARN],
		/** Disallow unnecessary catch clauses */
		'no-useless-catch': [WARN],
		/** Disallow unnecessary concatenation of strings */
		'no-useless-concat': [WARN],
		/** Disallow unnecessary escape usage */
		'no-useless-escape': [WARN],
		/** Disallow redundant return statements */
		'no-useless-return': [WARN],
		/** Disallow use of the void operator */
		'no-void': [ERROR],
		/** Disallow Warning Comments */
		'no-warning-comments': [OFF],
		/** Disallow with statements */
		'no-with': [ERROR],
		/** Suggest using named capture group in regular expression */
		'prefer-named-capture-group': [OFF],
		/** Require using Error objects as Promise rejection reasons */
		'prefer-promise-reject-errors': [OFF],
		/** Disallow use of the RegExp constructor in favor of regular expression literals */
		'prefer-regex-literals': [ERROR],
		/** Require Radix Parameter */
		'radix': [WARN],
		/** Disallow async functions which have no await expression */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'require-await': [WARN],
		/** Enforce the use of u flag on RegExp */
		'require-unicode-regexp': [OFF],
		/** Require Variable Declarations to be at the top of their scope */
		'vars-on-top': [OFF],
		/** Require IIFEs to be Wrapped */
		'wrap-iife': [ERROR],
		/** Require or disallow Yoda Conditions */
		'yoda': [OFF],

		/* -------------------------------Variables------------------------------ */

		/** Require or disallow initialization in variable declarations */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'init-declarations': [OFF],
		/** Disallow deleting variables */
		'no-delete-var': [ERROR],
		/** Disallow Labels That Are Variables Names */
		'no-label-var': [ERROR],
		/** Disallow specific global variables */
		'no-restricted-globals': [OFF],
		/** Disallow variable declarations from shadowing variables declared in the outer scope */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'no-shadow': [OFF],
		/** Disallow Shadowing of Restricted Names */
		'no-shadow-restricted-names': [ERROR],
		/** Disallow Undeclared Variables */
		'no-undef': [ERROR],
		/** Disallow Initializing to undefined */
		'no-undef-init': [OFF],
		/** Disallow Use of undefined Variable */
		'no-undefined': [ERROR],
		/** Disallow Unused Variables */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'no-unused-vars': [WARN],
		/** Disallow Early Use */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'no-use-before-define': [ERROR],

		/* -------------------------------Stylistic Issues----------------------- */

		/** Enforce line breaks after opening and before closing array brackets */
		'array-bracket-newline': [ERROR, { multiline: true }],
		/** Disallow or enforce spaces inside of brackets */
		'array-bracket-spacing': [OFF],
		/** Enforce line breaks between array elements */
		'array-element-newline': [OFF],
		/** Disallow or enforce spaces inside of blocks after opening block and before closing block */
		'block-spacing': [OFF],
		/** Require Brace Style */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'brace-style': [WARN, `1tbs`, { allowSingleLine: false }],
		/** Require CamelCase */
		'camelcase': [WARN],
		/** Enforce or disallow capitalization of the first letter of a comment */
		'capitalized-comments': [WARN, `always`],
		/** Require or disallow trailing commas */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'comma-dangle': [ERROR, `always-multiline`],
		/** Enforces spacing around commas */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'comma-spacing': [WARN, { before: false, after: true }],
		/** Comma style */
		'comma-style': [WARN, `last`],
		/** Disallow or enforce spaces inside of computed properties */
		'computed-property-spacing': [OFF],
		/** Require Consistent This */
		'consistent-this': [OFF],
		/** Require or disallow newline at the end of files */
		'eol-last': [WARN, `always`],
		/** Require or disallow spacing between function identifiers and their invocations */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'func-call-spacing': [WARN, `never`],
		/** Require function names to match the name of the variable or property to which they
		 * are assigned */
		'func-name-matching': [OFF],
		/** Require or disallow named function expressions */
		'func-names': [WARN, `never`],
		/** Enforce the consistent use of either function declarations or expressions */
		'func-style': [OFF],
		/** Enforce line breaks between arguments of a function call */
		'function-call-argument-newline': [WARN, `consistent`],
		/** Enforce consistent line breaks inside function parentheses */
		'function-paren-newline': [WARN, `multiline`],
		/** Disallow specified identifiers */
		'id-denylist': [OFF],
		/** Enforce minimum and maximum identifier lengths */
		'id-length': [OFF],
		/** Require identifiers to match a specified regular expression */
		'id-match': [OFF],
		/** Enforce the location of arrow function bodies with implicit returns */
		'implicit-arrow-linebreak': [OFF],
		/** Enforce consistent indentation */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'indent': [ERROR, `tab`],
		/** Enforce the consistent use of either double or single quotes in JSX attributes */
		'jsx-quotes': [WARN, `prefer-single`],
		/** Enforce consistent spacing before and after keywords */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		'keyword-spacing': [WARN, { before: true, after: true }],
		/** Enforce position of line comments */
		'line-comment-position': [OFF],
		/** Enforce consistent linebreak style */
		'linebreak-style': [OFF],
		/** Require empty lines around comments */
		'lines-around-comment': [OFF],
		/** Require or disallow an empty line between class members */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'lines-between-class-members': [OFF],
		/** Enforce a maximum depth that blocks can be nested */
		'max-depth': [OFF],
		/** Enforce a maximum line length */
		'max-len': [ERROR, { code: 100, tabWidth: 2, comments: 100 }],
		/** Enforce a maximum file length */
		'max-lines': [OFF],
		/** Enforce a maximum function length */
		'max-lines-per-function': [OFF],
		/** Enforce a maximum depth that callbacks can be nested */
		'max-nested-callbacks': [OFF],
		/** Enforce a maximum number of parameters in function definitions */
		'max-params': [OFF],
		/** Enforce a maximum number of statements allowed in function blocks */
		'max-statements': [OFF],
		/** Enforce a maximum number of statements allowed per line */
		'max-statements-per-line': [OFF],
		/** Enforce a particular style for multiline comments */
		'multiline-comment-style': [OFF],
		/** Enforce or disallow newlines between operands of ternary expressions */
		'multiline-ternary': [OFF],
		/** Require constructor names to begin with a capital letter */
		'new-cap': [WARN],
		/** Require parentheses when invoking a constructor with no arguments */
		'new-parens': [WARN, `always`],
		/** Require a newline after each call in a method chain */
		'newline-per-chained-call': [OFF],
		/** Disallow Array constructors  */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'no-array-constructor': [WARN],
		/** Disallow bitwise operators */
		'no-bitwise': [WARN],
		/** Disallow continue statements */
		'no-continue': [OFF],
		/** Disallow inline comments after code */
		'no-inline-comments': [OFF],
		/** Disallow if statements as the only statement in else blocks */
		'no-lonely-if': [WARN],
		/** Disallow mixes of different operators */
		'no-mixed-operators': [WARN],
		/** Disallow mixed spaces and tabs for indentation */
		'no-mixed-spaces-and-tabs': [WARN],
		/** Disallow Use of Chained Assignment Expressions */
		'no-multi-assign': [WARN],
		/** Disallow multiple empty lines */
		'no-multiple-empty-lines': [WARN, { max: 1, maxEOF: 1, maxBOF: 0 }],
		/** Disallow negated conditions */
		'no-negated-condition': [WARN],
		/** Disallow nested ternary expressions */
		'no-nested-ternary': [WARN],
		/** Disallow Object constructors */
		'no-new-object': [ERROR],
		/** Disallow the unary operators ++ and -- */
		'no-plusplus': [OFF],
		/** Disallow specified syntax */
		'no-restricted-syntax': [
			ERROR,
			{
				selector: `SwitchStatement`,
				message: `No switch statements! Use else-if chains.`,
			},
		],
		/** Disallow all tabs */
		'no-tabs': [OFF],
		/** Disallow ternary operators */
		'no-ternary': [OFF],
		/** Disallow trailing whitespace at the end of lines */
		'no-trailing-spaces': [WARN],
		/** Disallow dangling underscores in identifiers */
		'no-underscore-dangle': [OFF],
		/** Disallow ternary operators when simpler alternatives exist */
		'no-unneeded-ternary': [WARN],
		/** Disallow whitespace before properties */
		'no-whitespace-before-property': [WARN],
		/** Enforce the location of single-line statements */
		'nonblock-statement-body-position': [OFF, `beside`],
		/** Enforce consistent line breaks inside braces */
		'object-curly-newline': [WARN, { multiline: true }],
		/** Enforce consistent spacing inside braces */
		'object-curly-spacing': [WARN, `always`],
		/** Enforce placing object properties on separate lines */
		'object-property-newline': [OFF],
		/** Enforce variables to be declared either together or separately in functions */
		'one-var': [OFF],
		/** Require or disallow newlines around variable declarations */
		'one-var-declaration-per-line': [OFF],
		/** Require or disallow assignment operator shorthand where possible */
		'operator-assignment': [OFF],
		/** Enforce consistent linebreak style for operators */
		'operator-linebreak': [WARN, `after`],
		/** Require or disallow padding within blocks */
		'padded-blocks': [OFF],
		/** Require or disallow padding lines between statements */
		'padding-line-between-statements': [OFF],
		/** Disallow the use of Math.pow in favor of the ** operator */
		'prefer-exponentiation-operator': [WARN],
		/** Prefer use of an object spread over Object.assign */
		'prefer-object-spread': [WARN],
		/** Require quotes around object literal property names */
		'quote-props': [ERROR, `consistent-as-needed`],
		/** Enforce the consistent use of either backticks, double, or single quotes */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'quotes': [WARN, `backtick`],
		/** Require or disallow semicolons instead of ASI */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'semi': [ERROR, `always`],
		/** Enforce spacing before and after semicolons */
		'semi-spacing': [WARN, { before: false, after: true }],
		/** Enforce location of semicolons */
		'semi-style': [ERROR, `last`],
		/** Require object keys to be sorted */
		'sort-keys': [OFF],
		/** Variable Sorting */
		'sort-vars': [OFF],
		/** Require Or Disallow Space Before Blocks */
		'space-before-blocks': [WARN, `always`],
		/** Require or disallow a space before function parenthesis */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'space-before-function-paren': [WARN, `always`],
		/** Disallow or enforce spaces inside of parentheses */
		'space-in-parens': [WARN, `never`],
		/** Require spacing around infix operators */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'space-infix-ops': [WARN],
		/** Require or disallow spaces before/after unary operators */
		'space-unary-ops': [OFF],
		/** Requires or disallows a whitespace (space or tab) beginning a comment */
		'spaced-comment': [WARN, `always`, { block: { balanced: true } }],
		/** Enforce spacing around colons of switch statements */
		'switch-colon-spacing': [OFF],
		/** Require or disallow spacing between template tags and their literals */
		'template-tag-spacing': [OFF],
		/** Require or disallow the Unicode Byte Order Mark */
		'unicode-bom': [OFF],
		/** Require Regex Literals to be Wrapped */
		'wrap-regex': [WARN],

		/* -------------------------- ES6 -------------------------------------- */

		/** Require braces in arrow function body */
		'arrow-body-style': [OFF],
		/** Require parens in arrow function arguments */
		'arrow-parens': [WARN, `as-needed`],
		/** Require space before/after arrow function's arrow */
		'arrow-spacing': [WARN, { before: true, after: true }],
		/** Verify calls of super() in constructors */
		'constructor-super': [OFF],
		/** Enforce spacing around the * in generator functions */
		'generator-star-spacing': [OFF], // Off because NO GENERATORS
		/** Disallow modifying variables of class declarations */
		'no-class-assign': [ERROR],
		/** Disallow arrow functions where they could be confused with comparisons */
		'no-confusing-arrow': [OFF],
		/** Disallow modifying variables that are declared using const */
		'no-const-assign': [ERROR],
		/** Disallow duplicate name in class members */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'no-dupe-class-members': [ERROR],
		/** Disallow duplicate imports */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'no-duplicate-imports': [ERROR],
		/** Disallow Symbol Constructor */
		'no-new-symbol': [ERROR],
		/** Disallow specified names in exports */
		'no-restricted-exports': [OFF],
		/** Disallow specific imports */
		'no-restricted-imports': [OFF],
		/** Disallow use of this/super before calling super() in constructors. */
		'no-this-before-super': [ERROR],
		/** Disallow unnecessary computed property keys in objects and classes */
		'no-useless-computed-key': [WARN, { enforceForClassMembers: true }],
		/** Disallow unnecessary constructor */
		// DISABLED DUE TO TYPESCRIPT REPLACEMENT
		// 'no-useless-constructor': [WARN],
		/** Require let or const instead of var */
		'no-var': [ERROR],
		/** Disallow renaming import, export, and destructured assignments to the same name */
		'no-useless-rename': [WARN],
		/** Require Object Literal Shorthand Syntax */
		'object-shorthand': [WARN, `always`],
		/** Require using arrow functions for callbacks */
		'prefer-arrow-callback': [WARN],
		/** Suggest using const */
		'prefer-const': [WARN],
		/** Prefer destructuring from arrays and objects */
		'prefer-destructuring': [WARN],
		/** Disallow parseInt() and Number.parseInt() in favor of binary, octal,
		 * and hexadecimal literals */
		'prefer-numeric-literals': [WARN],
		/** Suggest using the rest parameters instead of arguments */
		'prefer-rest-params': [ERROR],
		/** Suggest using spread syntax instead of .apply() */
		'prefer-spread': [ERROR],
		/** Suggest using template literals instead of string concatenation */
		'prefer-template': [WARN],
		/** Disallow generator functions that do not have yield */
		'require-yield': [OFF], // DONT USE GENERATORS
		/** Enforce spacing between rest and spread operators and their expressions */
		'rest-spread-spacing': [WARN, `never`],
		/** Import Sorting */
		'sort-imports': [OFF],
		/** Require symbol description */
		'symbol-description': [WARN],
		/** Enforce Usage of Spacing in Template Strings */
		'template-curly-spacing': [WARN, `never`],
		/** Enforce spacing around the * in yield* expressions */
		'yield-star-spacing': [OFF],

		/* -------------------------- REACT ------------------------------------ */

		/** Enforces consistent naming for boolean props */
		'react/boolean-prop-naming': [WARN],
		/** Forbid "button" element without an explicit "type" attribute */
		'react/button-has-type': [OFF],
		/** Enforce all defaultProps are defined and not "required" in propTypes. */
		'react/default-props-match-prop-types': [OFF], // Don't use proptypes!
		/** Enforce consistent usage of destructuring assignment of props, state, and context */
		'react/destructuring-assignment': [WARN, `always`],
		/** Prevent missing displayName in a React component definition */
		'react/display-name': [OFF],
		/** Forbid certain props on components */
		'react/forbid-component-props': [OFF],
		/** Forbid certain props on DOM Nodes */
		'react/forbid-dom-props': [OFF],
		/** Forbid certain elements */
		'react/forbid-elements': [OFF],
		/** Forbid using another component's propTypes */
		'react/forbid-foreign-prop-types': [OFF], // Don't use proptypes!!!
		/** Forbid certain propTypes */
		'react/forbid-prop-types': [OFF], // No proptypes!
		/** Standardize the way function component get defined (fixable) */
		'react/function-component-definition': [OFF],
		/** Reports when this.state is accessed within setState */
		'react/no-access-state-in-setstate': [OFF], // Only useful in class functions
		/** Prevent adjacent inline elements not separated by whitespace. */
		'react/no-adjacent-inline-elements': [OFF],
		/** Prevent usage of Array index in keys */
		'react/no-array-index-key': [OFF], // It's useful sometimes
		/** Prevent passing of children as props. */
		'react/no-children-prop': [WARN],
		/** Prevent usage of dangerous JSX props */
		'react/no-danger': [OFF], // If you're using danger, you must know what you're doing.
		/** Report when a DOM element is using both children and dangerouslySetInnerHTML */
		'react/no-danger-with-children': [OFF],
		/** Prevent usage of deprecated methods */
		'react/no-deprecated': [ERROR],
		/** Prevent usage of setState in componentDidMount */
		'react/no-did-mount-set-state': [OFF],
		/** Prevent usage of setState in componentDidUpdate */
		'react/no-did-update-set-state': [OFF],
		/** Prevent direct mutation of this.state */
		'react/no-direct-mutation-state': [WARN],
		/** Prevent usage of findDOMNode */
		'react/no-find-dom-node': [OFF],
		/** Prevent usage of isMounted */
		'react/no-is-mounted': [ERROR],
		/** Prevent multiple component definition per file */
		'react/no-multi-comp': [OFF],
		/** Flag shouldComponentUpdate when extending PureComponent */
		'react/no-redundant-should-component-update': [OFF],
		/** Prevent usage of the return value of React.render */
		'react/no-render-return-value': [OFF],
		/** Prevent usage of setState */
		'react/no-set-state': [OFF],
		/** Prevent string definitions for references and prevent referencing this.refs */
		'react/no-string-refs': [ERROR], // This is almost always bad
		/** Report "this" being used in stateless components */
		'react/no-this-in-sfc': [WARN],
		/** Prevent common typos */
		'react/no-typos': [OFF],
		/** Detect unescaped HTML entities, which might represent malformed tags */
		'react/no-unescaped-entities': [OFF],
		/** Prevent usage of unknown DOM property (fixable) */
		'react/no-unknown-property': [OFF],
		/** Prevent usage of unsafe lifecycle methods */
		'react/no-unsafe': [WARN],
		/** Prevent definitions of unused prop types */
		'react/no-unused-prop-types': [OFF],
		/** Prevent definition of unused state fields */
		'react/no-unused-state': [WARN],
		/** Prevent usage of setState in componentWillUpdate */
		'react/no-will-update-set-state': [OFF],
		/** Enforce ES5 or ES6 class for React Components */
		'react/prefer-es6-class': [ERROR, `always`],
		/** Require read-only props. (fixable) */
		'react/prefer-read-only-props': [ERROR],
		/** Enforce stateless components to be written as a pure function */
		'react/prefer-stateless-function': [OFF],
		/** Prevent missing props validation in a React component definition */
		'react/prop-types': [OFF],
		/** Prevent missing React when using JSX */
		'react/react-in-jsx-scope': [WARN],
		/** Enforce a defaultProps definition for every prop that is not a required prop. */
		'react/require-default-props': [OFF],
		/** Enforce React components to have a shouldComponentUpdate method */
		'react/require-optimization': [OFF],
		/** Enforce ES5 or ES6 class for returning value in render function */
		'react/require-render-return': [OFF],
		/** Prevent extra closing tags for components without children (fixable) */
		'react/self-closing-comp': [WARN],
		/** Enforce component methods order */
		'react/sort-comp': [OFF],
		/** Enforce propTypes declarations alphabetical sorting */
		'react/sort-prop-types': [OFF],
		/** State initialization in an ES6 class component should be in a constructor */
		'react/state-in-constructor': [OFF],
		/** Defines where React component static properties should be positioned. */
		'react/static-property-placement': [OFF],
		/** Enforce style prop value is an object */
		'react/style-prop-object': [WARN],
		/** Prevent passing of children to void DOM elements (e.g. <br />). */
		'react/void-dom-elements-no-children': [WARN],

		/* ---------------------JSX-specific rules------------------------------ */

		/** Enforce boolean attributes notation in JSX (fixable) */
		'react/jsx-boolean-value': [WARN],
		/** Ensures inline tags are not rendered without spaces between them */
		'react/jsx-child-element-spacing': [OFF],
		/** Validate closing bracket location in JSX (fixable) */
		'react/jsx-closing-bracket-location': [WARN, { location: `line-aligned` }],
		/** Validate closing tag location for multiline JSX (fixable) */
		'react/jsx-closing-tag-location': [OFF],
		/** Disallow unnecessary JSX expressions when literals alone are sufficient
		 * Or enfore JSX expressions on literals in JSX children or attributes (fixable) */
		'react/jsx-curly-brace-presence': [WARN],
		/** Enforce consistent line breaks inside jsx curly (fixable) */
		'react/jsx-curly-newline': [WARN],
		/** Enforce or disallow spaces inside of curly braces in JSX attributes (fixable) */
		'react/jsx-curly-spacing': [WARN, { when: `never` }],
		/** Disallow or enforce spaces around equal signs in JSX attributes (fixable) */
		'react/jsx-equals-spacing': [WARN, `never`],
		/** Restrict file extensions that may contain JSX */
		'react/jsx-filename-extension': [OFF],
		/** Ensure proper position of the first property in JSX (fixable) */
		'react/jsx-first-prop-new-line': [WARN, `multiline-multiprop`],
		/** Enforce shorthand or standard form for React fragments (fixable) */
		'react/jsx-fragments': [WARN, `syntax`],
		/** Enforce event handler naming conventions in JSX */
		'react/jsx-handler-names': [WARN],
		/** Validate JSX indentation (fixable) */
		'react/jsx-indent': [WARN, `tab`],
		/** Validate props indentation in JSX (fixable) */
		'react/jsx-indent-props': [WARN, `tab`],
		/** Report missing key props in iterators/collection literals */
		'react/jsx-key': [ERROR, { checkFragmentShorthand: true }],
		/** Validate JSX maximum depth */
		'react/jsx-max-depth': [OFF],
		/** Limit maximum of props on a single line in JSX (fixable) */
		'react/jsx-max-props-per-line': [OFF],
		/** Enforce a new line after jsx elements and expressions (fixable) */
		'react/jsx-newline': [OFF],
		/** Prevents usage of Function.prototype.bind and arrow functions in React component props */
		'react/jsx-no-bind': [WARN],
		/** Comments inside children section of tag should be placed inside braces */
		'react/jsx-no-comment-textnodes': [WARN],
		/** Prevents JSX context provider values from taking values that will cause
		 * Needless rerenders. */
		'react/jsx-no-constructed-context-values': [WARN],
		/** Enforce no duplicate props */
		'react/jsx-no-duplicate-props': [ERROR],
		/** Prevent using string literals in React component definition */
		'react/jsx-no-literals': [OFF],
		/** Forbid javascript': [OFF],URLs */
		'react/jsx-no-script-url': [ERROR],
		/** Forbid target="_blank" attribute without rel="noreferrer" */
		'react/jsx-no-target-blank': [ERROR],
		/** Disallow undeclared variables in JSX */
		'react/jsx-no-undef': [WARN],
		/** Disallow unnecessary fragments (fixable) */
		'react/jsx-no-useless-fragment': [WARN],
		/** Limit to one expression per line in JSX (fixable) */
		'react/jsx-one-expression-per-line': [OFF],
		/** Enforce PascalCase for user-defined JSX components */
		'react/jsx-pascal-case': [WARN],
		/** Disallow multiple spaces between inline JSX props (fixable) */
		'react/jsx-props-no-multi-spaces': [WARN],
		/** Prevent JSX prop spreading */
		'react/jsx-props-no-spreading': [OFF],
		/** Enforce default props alphabetical sorting */
		'react/jsx-sort-default-props': [OFF],
		/** Enforce props alphabetical sorting (fixable) */
		'react/jsx-sort-props': [OFF],
		/** Validate spacing before closing bracket in JSX (fixable) */
		'react/jsx-space-before-closing': [WARN, `always`],
		/** Validate whitespace in and around the JSX opening and closing brackets (fixable) */
		// DEPRECATED
		// 'react/jsx-tag-spacing': [OFF],
		/** Prevent React to be marked as unused */
		'react/jsx-uses-react': [OFF],
		/** Prevent variables used in JSX to be marked as unused */
		'react/jsx-uses-vars': [OFF],
		/** Prevent missing parentheses around multilines JSX (fixable) */
		'react/jsx-wrap-multilines': [OFF],

		/* --------------------------- ACCESSIBILITY -------------------------- */

		// /** Enforce all elements that require alternative text have meaningful information
		//  * To relay back to end user. */
		// 'alt-text': [ERROR],
		// /** Enforce all anchors to contain accessible content. */
		// 'anchor-has-content': [ERROR],
		// /** Enforce all anchors are valid, navigable elements. */
		// 'anchor-is-valid': [ERROR],
		// /** Enforce elements with aria-activedescendant are tabbable. */
		// 'aria-activedescendant-has-tabindex': [ERROR],
		// /** Enforce all aria-* props are valid. */
		// 'aria-props': [ERROR],
		// /** Enforce ARIA state and property values are valid. */
		// 'aria-proptypes': [ERROR],
		// /** Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role. */
		// 'aria-role': [ERROR],
		// /** Enforce that elements that do not support ARIA roles, states, and properties
		//  * Do not have those attributes. */
		// 'aria-unsupported-elements': [ERROR],
		// /** Enforce that autocomplete attributes are used correctly. */
		// 'autocomplete-valid': [ERROR],
		// /** Enforce a clickable non-interactive element has at least one keyboard event listener. */
		// 'click-events-have-key-events': [ERROR],
		// /** Enforce heading (h1, h2, etc) elements contain accessible content. */
		// 'heading-has-content': [ERROR],
		// /** Enforce <html> element has lang prop. */
		// 'html-has-lang': [ERROR],
		// /** Enforce iframe elements have a title attribute. */
		// 'iframe-has-title': [ERROR],
		// /** Enforce <img> alt prop does not contain the word "image", "picture", or "photo". */
		// 'img-redundant-alt': [ERROR],
		// /** Enforce that elements with interactive handlers like onClick must be focusable. */
		// 'interactive-supports-focus': [ERROR],
		// /** Enforce that a label tag has a text label and an associated control. */
		// 'label-has-associated-control': [ERROR],
		// /** Enforce lang attribute has a valid value. */
		// 'lang': [ERROR],
		// /** Enforces that <audio> and <video> elements must have a <track> for captions. */
		// 'media-has-caption': [ERROR],
		// /** Enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for
		//  * Keyboard-only users. */
		// 'mouse-events-have-key-events': [ERROR],
		// /** Enforce that the accessKey prop is not used on any element to avoid complications
		//  * With keyboard commands used by a screenreader. */
		// 'no-access-key': [ERROR],
		// /** Enforce autoFocus prop is not used. */
		// 'no-autofocus': [ERROR],
		// /** Enforce distracting elements are not used. */
		// 'no-distracting-elements': [ERROR],
		// /** Interactive elements should not be assigned non-interactive roles. */
		// 'no-interactive-element-to-noninteractive-role': [ERROR],
		// /** Non-interactive elements should not be assigned mouse or keyboard event listeners. */
		// 'no-noninteractive-element-interactions': [ERROR],
		// /** Non-interactive elements should not be assigned interactive roles. */
		// 'no-noninteractive-element-to-interactive-role': [ERROR],
		// /** TabIndex should only be declared on interactive elements. */
		// 'no-noninteractive-tabindex': [ERROR],
		// /** Enforce usage of onBlur over onChange on select menus for accessibility. */
		// 'no-onchange': [ERROR],
		// /** Enforce explicit role property is not the same as implicit/default role
		//  * Property on element. */
		// 'no-redundant-roles': [ERROR],
		// /** Enforce that non-interactive, visible elements (such as <div>) that have click
		//  * Handlers use the role attribute. */
		// 'no-static-element-interactions': [ERROR],
		// /** Enforce that elements with ARIA roles must have all required attributes for that role. */
		// 'role-has-required-aria-props': [ERROR],
		// /** Enforce that elements with explicit or implicit roles defined contain only
		//  * Aria-* properties supported by that role. */
		// 'role-supports-aria-props': [ERROR],
		// /** Enforce scope prop is only used on <th> elements. */
		// 'scope': [ERROR],
		// /** Enforce tabIndex value is not greater than zero. */
		// 'tabindex-no-positive': [ERROR],

		/* ----------------------------- TYPESCRIPT --------------------------- */

		/** Require that member overloads be consecutive */
		'@typescript-eslint/adjacent-overload-signatures': [WARN],
		/** Requires using either T[] or Array<T> for arrays */
		'@typescript-eslint/array-type': [ERROR, { default: `array` }],
		/** Disallows awaiting a value that is not a Thenable */
		'@typescript-eslint/await-thenable': [OFF],
		/** Bans @ts-<directive> comments from being used or requires descriptions after directive */
		'@typescript-eslint/ban-ts-comment': [WARN],
		/** Bans // tslint:<rule-flag> comments from being used */
		'@typescript-eslint/ban-tslint-comment': [WARN],
		/** Bans specific types from being used */
		'@typescript-eslint/ban-types': [OFF],
		/** Ensures that literals on classes are exposed in a consistent style */
		'@typescript-eslint/class-literal-property-style': [OFF],
		/** Enforce or disallow the use of the record type */
		'@typescript-eslint/consistent-indexed-object-style': [ERROR, `record`],
		/** Enforces consistent usage of type assertions */
		'@typescript-eslint/consistent-type-assertions': [
			ERROR, {
				assertionStyle: `as`,
				objectLiteralTypeAssertions: `never`,
			},
		],
		/** Consistent with type definition either interface or type */
		'@typescript-eslint/consistent-type-definitions': [ERROR, `type`],
		/** Enforces consistent usage of type imports */
		'@typescript-eslint/consistent-type-imports': [WARN],
		/** Require explicit return types on functions and class methods */
		'@typescript-eslint/explicit-function-return-type': [OFF],
		/** Require explicit accessibility modifiers on class properties and methods */
		'@typescript-eslint/explicit-member-accessibility': [WARN],
		/** Require explicit return and argument types on exported functions' and classes'
		 * public class methods */
		'@typescript-eslint/explicit-module-boundary-types': [OFF],
		/** Require a specific member delimiter style for interfaces and type literals */
		'@typescript-eslint/member-delimiter-style': [OFF],
		/** Require a consistent member declaration order */
		'@typescript-eslint/member-ordering': [OFF],
		/** Enforces using a particular method signature syntax. */
		'@typescript-eslint/method-signature-style': [ERROR, `property`],
		/** Enforces naming conventions for everything across a codebase */
		'@typescript-eslint/naming-convention': [OFF],
		/** Requires that .toString() is only called on objects which provide useful
		 * information when stringified */
		'@typescript-eslint/no-base-to-string': [OFF],
		/** Disallow non-null assertion in locations that may be confusing */
		'@typescript-eslint/no-confusing-non-null-assertion': [WARN],
		/** Requires expressions of type void to appear in statement  */
		'@typescript-eslint/no-confusing-void-expression': [OFF],
		/** Disallow the delete operator with computed key expressions */
		'@typescript-eslint/no-dynamic-delete': [OFF],
		/** Disallow the declaration of empty interfaces */
		'@typescript-eslint/no-empty-interface': [ERROR],
		/** Disallow usage of the any type */
		'@typescript-eslint/no-explicit-any': [WARN],
		/** Disallow extra non-null assertion */
		'@typescript-eslint/no-extra-non-null-assertion': [WARN],
		/** Forbids the use of classes as namespaces */
		'@typescript-eslint/no-extraneous-class': [WARN],
		/** Requires Promise-like values to be handled appropriately */
		'@typescript-eslint/no-floating-promises': [OFF],
		/** Disallow iterating over an array with a for-in loop */
		'@typescript-eslint/no-for-in-array': [ERROR],
		/** Disallow usage of the implicit any type in catch clauses */
		'@typescript-eslint/no-implicit-any-catch': [WARN],
		/** Disallows explicit type declarations for variables or parameters initialized
		 * to a number, string, or boolean */
		'@typescript-eslint/no-inferrable-types': [OFF],
		/** Disallows usage of void type outside of generic or return types */
		'@typescript-eslint/no-invalid-void-type': [WARN],
		/** Enforce valid definition of new and constructor */
		'@typescript-eslint/no-misused-new': [WARN],
		/** Avoid using promises in places not designed to handle them */
		'@typescript-eslint/no-misused-promises': [OFF],
		/** Disallow the use of custom TypeScript modules and namespaces */
		'@typescript-eslint/no-namespace': [WARN],
		/** Disallows using a non-null assertion after an optional chain expression */
		'@typescript-eslint/no-non-null-asserted-optional-chain': [WARN],
		/** Disallows non-null assertions using the ! postfix operator */
		'@typescript-eslint/no-non-null-assertion': [OFF],
		/** Disallow the use of parameter properties in class constructors */
		'@typescript-eslint/no-parameter-properties': [OFF],
		/** Disallows invocation of require() */
		'@typescript-eslint/no-require-imports': [OFF ],
		/** Disallow aliasing this */
		'@typescript-eslint/no-this-alias': [WARN],
		/** Disallow the use of type aliases */
		'@typescript-eslint/no-type-alias': [OFF],
		/** Flags unnecessary equality comparisons against  */
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': [OFF],
		/** Prevents conditionals where the type is always truthy or  */
		'@typescript-eslint/no-unnecessary-condition': [OFF],
		/** Warns when a namespace qualifier  */
		'@typescript-eslint/no-unnecessary-qualifier': [OFF],
		/** Enforces that type arguments will not be used if  */
		'@typescript-eslint/no-unnecessary-type-arguments': [OFF],
		/** Warns if a type assertion does not change the type of an expression */
		'@typescript-eslint/no-unnecessary-type-assertion': [OFF],
		/** Disallows unnecessary constraints on generic types */
		'@typescript-eslint/no-unnecessary-type-constraint': [OFF],
		/** Disallows assigning any to variables and properties */
		'@typescript-eslint/no-unsafe-assignment': [OFF],
		/** Disallows calling an any type value */
		'@typescript-eslint/no-unsafe-call': [OFF],
		/** Disallows member access on any typed variables */
		'@typescript-eslint/no-unsafe-member-access': [OFF],
		/** Disallows returning any from a function */
		'@typescript-eslint/no-unsafe-return': [OFF],
		/** Disallows the use of require statements except in import statements */
		'@typescript-eslint/no-var-requires': [WARN],
		/** Prefers a non-null assertion over explicit type cast  */
		'@typescript-eslint/non-nullable-type-assertion-style': [OFF],
		/** Prefer usage of as const over literal type */
		'@typescript-eslint/prefer-as-const': [WARN],
		/** Prefer initializing each enums member value */
		'@typescript-eslint/prefer-enum-initializers': [WARN],
		/** Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used
		 * to access the array being iterated */
		'@typescript-eslint/prefer-for-of': [WARN],
		/** Use function types instead of interfaces with call signatures */
		'@typescript-eslint/prefer-function-type': [WARN],
		/** Enforce includes method over  */
		'@typescript-eslint/prefer-includes': [OFF],
		/** Require that all enum members be literal values to prevent unintended enum
		 * member name shadow issues */
		'@typescript-eslint/prefer-literal-enum-member': [WARN],
		/** Require the use of the namespace keyword instead of the module keyword to
		 * declare custom TypeScript modules */
		'@typescript-eslint/prefer-namespace-keyword': [OFF],
		/** Enforce the usage of the nullish coalescing operator instead of logical chaining */
		'@typescript-eslint/prefer-nullish-coalescing': [OFF],
		/** Prefer using concise optional chain expressions instead of chained logical ands */
		'@typescript-eslint/prefer-optional-chain': [WARN],
		/** Requires that private members are marked as readonly if they're never
		 * modified outside of  */
		'@typescript-eslint/prefer-readonly': [OFF],
		/** Requires that function parameters are typed as readonly to prevent accidental
		 * mutation of inputs */
		'@typescript-eslint/prefer-readonly-parameter-types': [OFF],
		/** Prefer using type parameter when calling Array#reduce instead  */
		'@typescript-eslint/prefer-reduce-type-parameter': [OFF],
		/** Enforce that RegExp#exec is used instead of String#match if no global flag is provided */
		'@typescript-eslint/prefer-regexp-exec': [OFF],
		/** Enforce the use of String#startsWith and String#endsWith instead of other
		 * equivalent methods of  */
		'@typescript-eslint/prefer-string-starts-ends-with': [OFF],
		/** Recommends using @ts-expect-error over @ts-ignore */
		'@typescript-eslint/prefer-ts-expect-error': [WARN],
		/** Requires any function or method that returns a Promise to be  */
		'@typescript-eslint/promise-function-async': [OFF],
		/** Requires Array#sort calls to always provide a compareFunction */
		'@typescript-eslint/require-array-sort-compare': [OFF],
		/** When adding two variables, operands must both be of type number or of type string */
		'@typescript-eslint/restrict-plus-operands': [OFF],
		/** Enforce template literal expressions to be of string type */
		'@typescript-eslint/restrict-template-expressions': [OFF],
		/** Enforces that members of a type union/intersection are sorted alphabetically */
		'@typescript-eslint/sort-type-union-intersection-members': [OFF],
		/** Restricts the types allowed in boolean expressions */
		'@typescript-eslint/strict-boolean-expressions': [OFF],
		/** Exhaustiveness checking in switch with union type */
		'@typescript-eslint/switch-exhaustiveness-check': [OFF], // NO SWITCH
		/** Sets preference level for triple slash directives versus ES6-style import declarations */
		'@typescript-eslint/triple-slash-reference': [OFF],
		/** Require consistent spacing around type annotations */
		'@typescript-eslint/type-annotation-spacing': [WARN, { before: false, after: true }],
		/** Requires type annotations to exist */
		'@typescript-eslint/typedef': [OFF],
		/** Enforces unbound methods are called with their expected scope */
		'@typescript-eslint/unbound-method': [OFF],
		/** Warns for any two overloads that could be unified into one by using a
		 * union or an optional/rest parameter */
		'@typescript-eslint/unified-signatures': [WARN],

		/* -------------------- TYPESCRIPT EXTENSION RULES --------------------- */

		/** Enforce consistent brace style for blocks */
		'@typescript-eslint/brace-style': [WARN, `1tbs`, { allowSingleLine: false }],
		/** Require or disallow trailing comma */
		'@typescript-eslint/comma-dangle': [ERROR, `always-multiline`],
		/** Enforces consistent spacing before and after commas */
		'@typescript-eslint/comma-spacing': [WARN, { before: false, after: true }],
		/** Enforce default parameters to be last */
		'@typescript-eslint/default-param-last': [OFF],
		/** Enforce dot notation whenever possible */
		'@typescript-eslint/dot-notation': [OFF],
		/** Require or disallow spacing between function identifiers and their invocations */
		'@typescript-eslint/func-call-spacing': [WARN, `never`],
		/** Enforce consistent indentation */
		'@typescript-eslint/indent': [WARN, `tab`],
		/** Require or disallow initialization in variable declarations */
		'@typescript-eslint/init-declarations': [OFF],
		/** Enforce consistent spacing before and after keywords */
		'@typescript-eslint/keyword-spacing': [WARN, { before: true, after: true }],
		/** Require or disallow an empty line between class members */
		'@typescript-eslint/lines-between-class-members': [OFF],
		/** Disallow generic Array constructors */
		'@typescript-eslint/no-array-constructor': [WARN],
		/** Disallow duplicate class members */
		'@typescript-eslint/no-dupe-class-members': [ERROR],
		/** Disallow duplicate imports */
		'@typescript-eslint/no-duplicate-imports': [ERROR],
		/** Disallow empty functions */
		'@typescript-eslint/no-empty-function': [WARN, { allow: [`arrowFunctions`, `methods`] }],
		/** Disallow unnecessary parentheses */
		'@typescript-eslint/no-extra-parens': [ERROR, `all`],
		/** Disallow unnecessary semicolons */
		'@typescript-eslint/no-extra-semi': [ERROR],
		/** Disallow the use of eval()-like methods */
		'@typescript-eslint/no-implied-eval': [OFF],
		/** Disallow this keywords outside of classes or class-like objects */
		'@typescript-eslint/no-invalid-this': [ERROR],
		/** Disallow function declarations that contain unsafe references inside loop statements */
		'@typescript-eslint/no-loop-func': [OFF],
		/** Disallow literal numbers that lose precision */
		'@typescript-eslint/no-loss-of-precision': [ERROR],
		/** Disallow magic numbers */
		'@typescript-eslint/no-magic-numbers': [OFF],
		/** Disallow variable redeclaration */
		'@typescript-eslint/no-redeclare': [ERROR],
		/** Disallow variable declarations from shadowing variables declared in the outer scope */
		'@typescript-eslint/no-shadow': [OFF],
		/** Disallow throwing literals as exceptions */
		'@typescript-eslint/no-throw-literal': [OFF],
		/** Disallow unused expressions */
		'@typescript-eslint/no-unused-expressions': [WARN],
		/** Disallow unused variables */
		'@typescript-eslint/no-unused-vars': [WARN, { ignoreRestSiblings: true }],
		/** Disallow the use of variables before they are defined */
		'@typescript-eslint/no-use-before-define': [ERROR],
		/** Disallow unnecessary constructors */
		'@typescript-eslint/no-useless-constructor': [WARN],
		/** Enforce the consistent use of either backticks, double, or single quotes */
		'@typescript-eslint/quotes': [WARN, `backtick`],
		/** Disallow async functions which have no await expression */
		'@typescript-eslint/require-await': [OFF],
		/** Enforces consistent returning of awaited values */
		'@typescript-eslint/return-await': [OFF],
		/** Require or disallow semicolons instead of ASI */
		'@typescript-eslint/semi': [ERROR, `always`],
		/** Enforces consistent spacing before function parenthesis */
		'@typescript-eslint/space-before-function-paren': [WARN, `always`],
		/** This rule is aimed at ensuring there are spaces around infix operators */
		'@typescript-eslint/space-infix-ops': [WARN],
	},
};
