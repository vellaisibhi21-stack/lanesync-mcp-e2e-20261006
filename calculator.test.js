import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add } from './calculator.js';
test('adds synthetic integers', () => assert.equal(add(2,3),5));
test('controlled MCP failure', () => assert.equal(add(1,1),3));

test("second controlled MCP failure", () => assert.equal(add(2,2),5));
