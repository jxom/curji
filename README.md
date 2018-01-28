# Curji 🐭

> Turn your website's cursor into an emoji 🙊

## Inspiration

> Public Announcement: It's possible to set an emoji as the browser cursor.
- Sindre Sorhus via [Twitter](https://twitter.com/sindresorhus/status/955878567723847680)

## Usage

#### Minimal

```html
<html>
  <head>
    <script src="https://unpkg.com/curji@1.0.0/curji.min.js"></script>
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
```

## API

### curji(emoji, options)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### selector

Type: `string`<br/>
Example: `.container > #main`

Selector for the element to apply the emoji cursor to.

## License

MIT © [jxom](http://jxom.io)
