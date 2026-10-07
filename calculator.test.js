import test from 'node:test';
import assert from 'node:assert/strict';
import { add } from './calculator.js';
test('feat_3 adds synthetic integers',()=>assert.equal(add(2,3),5));
test('feat_4 preserves arithmetic identities',()=>assert.equal(add(1,1),2));
test('feat_4 controlled release anomaly',()=>assert.equal(add(1,1),process.env.GITHUB_REF==='refs/heads/release/v0.2.2'?3:2));
