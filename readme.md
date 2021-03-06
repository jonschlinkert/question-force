# question-force [![NPM version](https://img.shields.io/npm/v/question-force.svg)](https://www.npmjs.com/package/question-force) [![Build Status](https://img.shields.io/travis/jonschlinkert/question-force.svg)](https://travis-ci.org/jonschlinkert/question-force)

> Plugin for question-store that adds a `force` method for easily forcing questions with stored answers to be re-asked.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm i question-force --save
```

## Usage

```js
var force = require('question-force');
var Questions = require('question-store');
var questions = new Questions();

// register the plugin
questions.use(force());

// pre-load answer data from package.json and 
// set some questions to ask
questions.setData(require('./package'))
  .set('author.name', 'Author name?')
  .set('author.username', 'Author username?')
  .set('author.url', 'Author url?')

  .set('project.name', 'What is the project name?')
  .set('project.desc', 'What is the project description?');

// always force questions that start with `project`
questions.force(/^project/)
  .ask(function(err, answer) {
    console.log(answer)
  });
```

## Related projects

You might also be interested in these projects:

* [answer-store](https://www.npmjs.com/package/answer-store): Store answers to user prompts, based on locale and/or current working directory. | [homepage](https://github.com/jonschlinkert/answer-store)
* [question-cache](https://www.npmjs.com/package/question-cache): A wrapper around inquirer that makes it easy to create and selectively reuse questions. | [homepage](https://github.com/jonschlinkert/question-cache)
* [question-store](https://www.npmjs.com/package/question-store): Ask questions, persist the answers. Basic support for i18n and storing answers based on current… [more](https://www.npmjs.com/package/question-store) | [homepage](https://github.com/jonschlinkert/question-store)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/question-force/issues/new).

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016 [Jon Schlinkert](https://github.com/jonschlinkert)
Released under the MIT license.

***

_This file was generated by [verb](https://github.com/verbose/verb) on January 28, 2016._