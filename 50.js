(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/redis/redis.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/redis/redis.js ***!
  \**************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\nvar conf = {\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: \"'\", close: \"'\" }\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: \"'\", close: \"'\" }\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.redis',\n    ignoreCase: true,\n    brackets: [\n        { open: '[', close: ']', token: 'delimiter.square' },\n        { open: '(', close: ')', token: 'delimiter.parenthesis' }\n    ],\n    keywords: [\n        'APPEND',\n        'AUTH',\n        'BGREWRITEAOF',\n        'BGSAVE',\n        'BITCOUNT',\n        'BITFIELD',\n        'BITOP',\n        'BITPOS',\n        'BLPOP',\n        'BRPOP',\n        'BRPOPLPUSH',\n        'CLIENT',\n        'KILL',\n        'LIST',\n        'GETNAME',\n        'PAUSE',\n        'REPLY',\n        'SETNAME',\n        'CLUSTER',\n        'ADDSLOTS',\n        'COUNT-FAILURE-REPORTS',\n        'COUNTKEYSINSLOT',\n        'DELSLOTS',\n        'FAILOVER',\n        'FORGET',\n        'GETKEYSINSLOT',\n        'INFO',\n        'KEYSLOT',\n        'MEET',\n        'NODES',\n        'REPLICATE',\n        'RESET',\n        'SAVECONFIG',\n        'SET-CONFIG-EPOCH',\n        'SETSLOT',\n        'SLAVES',\n        'SLOTS',\n        'COMMAND',\n        'COUNT',\n        'GETKEYS',\n        'CONFIG',\n        'GET',\n        'REWRITE',\n        'SET',\n        'RESETSTAT',\n        'DBSIZE',\n        'DEBUG',\n        'OBJECT',\n        'SEGFAULT',\n        'DECR',\n        'DECRBY',\n        'DEL',\n        'DISCARD',\n        'DUMP',\n        'ECHO',\n        'EVAL',\n        'EVALSHA',\n        'EXEC',\n        'EXISTS',\n        'EXPIRE',\n        'EXPIREAT',\n        'FLUSHALL',\n        'FLUSHDB',\n        'GEOADD',\n        'GEOHASH',\n        'GEOPOS',\n        'GEODIST',\n        'GEORADIUS',\n        'GEORADIUSBYMEMBER',\n        'GETBIT',\n        'GETRANGE',\n        'GETSET',\n        'HDEL',\n        'HEXISTS',\n        'HGET',\n        'HGETALL',\n        'HINCRBY',\n        'HINCRBYFLOAT',\n        'HKEYS',\n        'HLEN',\n        'HMGET',\n        'HMSET',\n        'HSET',\n        'HSETNX',\n        'HSTRLEN',\n        'HVALS',\n        'INCR',\n        'INCRBY',\n        'INCRBYFLOAT',\n        'KEYS',\n        'LASTSAVE',\n        'LINDEX',\n        'LINSERT',\n        'LLEN',\n        'LPOP',\n        'LPUSH',\n        'LPUSHX',\n        'LRANGE',\n        'LREM',\n        'LSET',\n        'LTRIM',\n        'MGET',\n        'MIGRATE',\n        'MONITOR',\n        'MOVE',\n        'MSET',\n        'MSETNX',\n        'MULTI',\n        'PERSIST',\n        'PEXPIRE',\n        'PEXPIREAT',\n        'PFADD',\n        'PFCOUNT',\n        'PFMERGE',\n        'PING',\n        'PSETEX',\n        'PSUBSCRIBE',\n        'PUBSUB',\n        'PTTL',\n        'PUBLISH',\n        'PUNSUBSCRIBE',\n        'QUIT',\n        'RANDOMKEY',\n        'READONLY',\n        'READWRITE',\n        'RENAME',\n        'RENAMENX',\n        'RESTORE',\n        'ROLE',\n        'RPOP',\n        'RPOPLPUSH',\n        'RPUSH',\n        'RPUSHX',\n        'SADD',\n        'SAVE',\n        'SCARD',\n        'SCRIPT',\n        'FLUSH',\n        'LOAD',\n        'SDIFF',\n        'SDIFFSTORE',\n        'SELECT',\n        'SETBIT',\n        'SETEX',\n        'SETNX',\n        'SETRANGE',\n        'SHUTDOWN',\n        'SINTER',\n        'SINTERSTORE',\n        'SISMEMBER',\n        'SLAVEOF',\n        'SLOWLOG',\n        'SMEMBERS',\n        'SMOVE',\n        'SORT',\n        'SPOP',\n        'SRANDMEMBER',\n        'SREM',\n        'STRLEN',\n        'SUBSCRIBE',\n        'SUNION',\n        'SUNIONSTORE',\n        'SWAPDB',\n        'SYNC',\n        'TIME',\n        'TOUCH',\n        'TTL',\n        'TYPE',\n        'UNSUBSCRIBE',\n        'UNLINK',\n        'UNWATCH',\n        'WAIT',\n        'WATCH',\n        'ZADD',\n        'ZCARD',\n        'ZCOUNT',\n        'ZINCRBY',\n        'ZINTERSTORE',\n        'ZLEXCOUNT',\n        'ZRANGE',\n        'ZRANGEBYLEX',\n        'ZREVRANGEBYLEX',\n        'ZRANGEBYSCORE',\n        'ZRANK',\n        'ZREM',\n        'ZREMRANGEBYLEX',\n        'ZREMRANGEBYRANK',\n        'ZREMRANGEBYSCORE',\n        'ZREVRANGE',\n        'ZREVRANGEBYSCORE',\n        'ZREVRANK',\n        'ZSCORE',\n        'ZUNIONSTORE',\n        'SCAN',\n        'SSCAN',\n        'HSCAN',\n        'ZSCAN'\n    ],\n    operators: [\n    // NOT SUPPORTED\n    ],\n    builtinFunctions: [\n    // NOT SUPPORTED\n    ],\n    builtinVariables: [\n    // NOT SUPPORTED\n    ],\n    pseudoColumns: [\n    // NOT SUPPORTED\n    ],\n    tokenizer: {\n        root: [\n            { include: '@whitespace' },\n            { include: '@pseudoColumns' },\n            { include: '@numbers' },\n            { include: '@strings' },\n            { include: '@scopes' },\n            [/[;,.]/, 'delimiter'],\n            [/[()]/, '@brackets'],\n            [\n                /[\\w@#$]+/,\n                {\n                    cases: {\n                        '@keywords': 'keyword',\n                        '@operators': 'operator',\n                        '@builtinVariables': 'predefined',\n                        '@builtinFunctions': 'predefined',\n                        '@default': 'identifier'\n                    }\n                }\n            ],\n            [/[<>=!%&+\\-*/|~^]/, 'operator']\n        ],\n        whitespace: [[/\\s+/, 'white']],\n        pseudoColumns: [\n            [\n                /[$][A-Za-z_][\\w@#$]*/,\n                {\n                    cases: {\n                        '@pseudoColumns': 'predefined',\n                        '@default': 'identifier'\n                    }\n                }\n            ]\n        ],\n        numbers: [\n            [/0[xX][0-9a-fA-F]*/, 'number'],\n            [/[$][+-]*\\d*(\\.\\d*)?/, 'number'],\n            [/((\\d+(\\.\\d*)?)|(\\.\\d+))([eE][\\-+]?\\d+)?/, 'number']\n        ],\n        strings: [\n            [/'/, { token: 'string', next: '@string' }],\n            [/\"/, { token: 'string.double', next: '@stringDouble' }]\n        ],\n        string: [\n            [/[^']+/, 'string'],\n            [/''/, 'string'],\n            [/'/, { token: 'string', next: '@pop' }]\n        ],\n        stringDouble: [\n            [/[^\"]+/, 'string.double'],\n            [/\"\"/, 'string.double'],\n            [/\"/, { token: 'string.double', next: '@pop' }]\n        ],\n        scopes: [\n        // NOT SUPPORTED\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/redis/redis.js?");

/***/ })

}]);