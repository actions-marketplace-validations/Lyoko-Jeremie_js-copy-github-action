# Copy file with NodeJS 

This action copies a file with nodeJS

this is direct use the [npm copy package](https://www.npmjs.com/package/copy)

detail use case can read from code:
* https://github.com/jonschlinkert/copy
* https://github.com/jonschlinkert/copy/blob/master/test/copy.js
* https://github.com/Lyoko-Jeremie/js-copy-github-action/blob/master/index.js

## Inputs

### `source`

**Required** The source file

### `target`

**Required** The target file


## Simple Example usage

```yaml
    uses: Lyoko-Jeremie/js-copy-github-action@master
    with:
      source: some-file
      target: some-place
```

```yaml
    uses: Lyoko-Jeremie/js-copy-github-action@master
    with:
      srcBase: /aaaaa/bbbbbb/
      source: /aaaaa/bbbbbb/FullConfig.json
      destBase: /aaaaa/cccccc/
      target: /aaaaa/cccccc/
```
