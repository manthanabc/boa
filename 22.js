(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/graphql/graphql.js":
/*!******************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/graphql/graphql.js ***!
  \******************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\nvar conf = {\n    comments: {\n        lineComment: '#'\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"\"\"', close: '\"\"\"', notIn: ['string', 'comment'] },\n        { open: '\"', close: '\"', notIn: ['string', 'comment'] }\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"\"\"', close: '\"\"\"' },\n        { open: '\"', close: '\"' }\n    ],\n    folding: {\n        offSide: true\n    }\n};\nvar language = {\n    // Set defaultToken to invalid to see what you do not tokenize yet\n    defaultToken: 'invalid',\n    tokenPostfix: '.gql',\n    keywords: [\n        'null',\n        'true',\n        'false',\n        'query',\n        'mutation',\n        'subscription',\n        'extend',\n        'schema',\n        'directive',\n        'scalar',\n        'type',\n        'interface',\n        'union',\n        'enum',\n        'input',\n        'implements',\n        'fragment',\n        'on'\n    ],\n    typeKeywords: ['Int', 'Float', 'String', 'Boolean', 'ID'],\n    directiveLocations: [\n        'SCHEMA',\n        'SCALAR',\n        'OBJECT',\n        'FIELD_DEFINITION',\n        'ARGUMENT_DEFINITION',\n        'INTERFACE',\n        'UNION',\n        'ENUM',\n        'ENUM_VALUE',\n        'INPUT_OBJECT',\n        'INPUT_FIELD_DEFINITION',\n        'QUERY',\n        'MUTATION',\n        'SUBSCRIPTION',\n        'FIELD',\n        'FRAGMENT_DEFINITION',\n        'FRAGMENT_SPREAD',\n        'INLINE_FRAGMENT',\n        'VARIABLE_DEFINITION'\n    ],\n    operators: ['=', '!', '?', ':', '&', '|'],\n    // we include these common regular expressions\n    symbols: /[=!?:&|]+/,\n    // https://facebook.github.io/graphql/draft/#sec-String-Value\n    escapes: /\\\\(?:[\"\\\\\\/bfnrt]|u[0-9A-Fa-f]{4})/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            // fields and argument names\n            [\n                /[a-z_][\\w$]*/,\n                {\n                    cases: {\n                        '@keywords': 'keyword',\n                        '@default': 'key.identifier'\n                    }\n                }\n            ],\n            // identify typed input variables\n            [\n                /[$][\\w$]*/,\n                {\n                    cases: {\n                        '@keywords': 'keyword',\n                        '@default': 'argument.identifier'\n                    }\n                }\n            ],\n            // to show class names nicely\n            [\n                /[A-Z][\\w\\$]*/,\n                {\n                    cases: {\n                        '@typeKeywords': 'keyword',\n                        '@default': 'type.identifier'\n                    }\n                }\n            ],\n            // whitespace\n            { include: '@whitespace' },\n            // delimiters and operators\n            [/[{}()\\[\\]]/, '@brackets'],\n            [/@symbols/, { cases: { '@operators': 'operator', '@default': '' } }],\n            // @ annotations.\n            // As an example, we emit a debugging log message on these tokens.\n            // Note: message are supressed during the first load -- change some lines to see them.\n            [/@\\s*[a-zA-Z_\\$][\\w\\$]*/, { token: 'annotation', log: 'annotation token: $0' }],\n            // numbers\n            [/\\d*\\.\\d+([eE][\\-+]?\\d+)?/, 'number.float'],\n            [/0[xX][0-9a-fA-F]+/, 'number.hex'],\n            [/\\d+/, 'number'],\n            // delimiter: after number because of .\\d floats\n            [/[;,.]/, 'delimiter'],\n            [/\"\"\"/, { token: 'string', next: '@mlstring', nextEmbedded: 'markdown' }],\n            // strings\n            [/\"([^\"\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/\"/, { token: 'string.quote', bracket: '@open', next: '@string' }]\n        ],\n        mlstring: [\n            [/[^\"]+/, 'string'],\n            ['\"\"\"', { token: 'string', next: '@pop', nextEmbedded: '@pop' }]\n        ],\n        string: [\n            [/[^\\\\\"]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/\"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]\n        ],\n        whitespace: [\n            [/[ \\t\\r\\n]+/, ''],\n            [/#.*$/, 'comment']\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/graphql/graphql.js?");

/***/ })

}]);