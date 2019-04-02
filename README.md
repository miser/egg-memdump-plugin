# egg-memdump-plugin

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-memdump-plugin.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-memdump-plugin
[travis-image]: https://img.shields.io/travis/eggjs/egg-memdump-plugin.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-memdump-plugin
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-memdump-plugin.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-memdump-plugin?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-memdump-plugin.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-memdump-plugin
[snyk-image]: https://snyk.io/test/npm/egg-memdump-plugin/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-memdump-plugin
[download-image]: https://img.shields.io/npm/dm/egg-memdump-plugin.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-memdump-plugin

<!--
Description here.
-->

## Install

```bash
$ npm i egg-memdump-plugin --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.memdumpPlugin = {
  enable: true,
  package: 'egg-memdump-plugin',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.memdumpPlugin = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
