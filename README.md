# Curji 🐭

> Turn your website's cursor into an emoji 🙊

## Inspiration

> Public Announcement: It's possible to set an emoji as the browser cursor.
- Sindre Sorhus via [Twitter](https://twitter.com/sindresorhus/status/955878567723847680)

## Examples

- Simple: https://jsfiddle.net/jxom/73egpjny/
- React: https://codesandbox.io/s/2zxy379rny 

## Usage

#### Minimal

```html
<html>
  <head>
    <script src="https://unpkg.com/curji@1.0.1/umd/curji.min.js"></script>
  </head>
  <body>
    Hello world
    <script>
      curji('😀')
    </script>
  </body>
</html>
```

#### With modules

Install `curji`:

```
npm i curji
```

Usage:

```javascript
import curji from 'curji';

curji('😀');

// or with a selector
curji('😀', { selector: '.container > #main' })
```

## API

### curji(emoji, options)

#### emoji

Type: `string`

The emoji you want your cursor to be.

#### options

Type: `object`

##### selector

Type: `string`<br/>
Example: `.container > #main`

Selector for the element to apply the emoji cursor to.

## License

MIT © [jxom](http://jxom.io)
