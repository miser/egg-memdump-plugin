# egg-memdump-plugin

It is egg plugin for [memdump](https://github.com/miser/memdump).

> `memdump` is a tool that can help us dump the heap at the nodejs server when the memory has leaked.

## Install

```bash
$ npm i egg-memdump-plugin --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.memdumpPlugin = {
  enable: true,
  package: 'egg-memdump-plugin'
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.memdumpPlugin = {};
```

## License

[MIT](LICENSE)
