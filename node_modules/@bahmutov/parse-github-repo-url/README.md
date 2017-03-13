# DEPRECATED - all features were merged back into 
# original repo [repo-utils/parse-github-repo-url](https://github.com/repo-utils/parse-github-repo-url)
# available on NPM under "parse-github-repo-url"

# @bahmutov/parse-github-repo-url

> Parse a GitHub URL for user/project@version

[![NPM info][nodei.co]][npm-url]

[![Build][parse-github-repo-url-ci-image]][parse-github-repo-url-ci-url]
[![semantic-release][semantic-image] ][semantic-url]
[![manpm](https://img.shields.io/badge/manpm-%E2%9C%93-3399ff.svg)](https://github.com/bahmutov/manpm)

Note: this is a clone of [repo-utils/parse-github-repo-url](https://github.com/repo-utils/parse-github-repo-url)
with additional parsers, since my [pull request](https://github.com/repo-utils/parse-github-repo-url/pull/1)
was in limbo for a very long time.

# Features

Parse all the stupid ways you could write a GitHub URL in your damn `package.json`.
Supports:

- `<user>/<repo#<commit>`
- `git://` and `.git` w/ `#commit` or `@version`
- `git@` and `https:git@`
- `www.github.com`
- `gitlab.<my company name>.com/user/repo.git` parsing
- All 5 different ways you could download a freaking tarball/zipball

## API

### [user, repo, version] = parse(url)

`version` could be `false`y, a semantic version, a commit, or a branch, etc.

```js
var parse = require('@bahmutov/parse-github-repo-url')
parse('component/emitter#1') // => ['component', 'emitter', '1']
```

See the tests for all the different types of supported URLs.

[nodei.co]: https://nodei.co/npm/@bahmutov/parse-github-repo-url.png?downloads=true
[npm-url]: https://npmjs.org/package/@bahmutov/parse-github-repo-url
[parse-github-repo-url-ci-image]: https://secure.travis-ci.org/bahmutov/parse-github-repo-url.png?branch=master
[parse-github-repo-url-ci-url]: http://travis-ci.org/#!/bahmutov/parse-github-repo-url
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
