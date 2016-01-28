'use strict';

require('mocha');
var assert = require('assert');
var force = require('./');
var Questions = require('question-store');
var questions;

describe('questions-force', function() {
  beforeEach(function() {
    questions = new Questions();
    questions.use(force());
  });

  it('should export a function', function() {
    assert.equal(typeof force, 'function');
  });

  it('should add a `/force` method to `questions`', function() {
    assert.equal(typeof questions.force, 'function');
  });
});
