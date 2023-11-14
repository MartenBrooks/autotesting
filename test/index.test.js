#!/usr/bin/env node

import {strict as assert} from "node:assert";
import capitalize from "../bin/index.js";

assert.equal(capitalize(''), '');
assert.equal(capitalize('hello'), 'Hello');

assert.deepEqual({key: 'value'}, {key: 'value'});