# Select2 dark AdminLTE theme

A css theme for Select2 based on AdminLTE 2 dark template

## Demo

![demo](http://i.imgur.com/MEklpb8.png)


## Installation

### Dependencies

- [Select2](https://github.com/select2/select2)

### Bower

`bower install select2-dark-adminlte-theme`

## Usage

Requires `select2-bootstrap.css` after the `select2.css`

```html
  <link rel="stylesheet" href="select2.css">
  <link rel="stylesheet" href="select2-dark-adminlte-theme.css">
```

Configure `select2` to apply the theme by passing `dark-adminlte` to the theme option:
```javascript
$( "#dropdown" ).select2({
    theme: "dark-adminlte"
});
```


## Development

- Requires Node v4.7.x or higher and npm 2.15.11
- Cloud9 Workspace [here](https://c9.io/jscotto/select2-dark-adminlte-theme)

### Installation

1. Install dependencies
   ```
   npm install
   ```

2. Compile
   ```
   grunt --task
   ```
