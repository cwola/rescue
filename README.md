# rescue

Laravel's rescue helper function.

## Installation

```
$ npm i --save @cwola/rescue
```

## require / import

- esm

    ```
    import rescue from '@cwola/rescue';
    ```

- commonjs

    ```
    const rescue = require('@cwola/rescue');
    ```

## API

```
rescue(callback: Function, rescue: any =  null): any
```

## Usage

```
// esm
import rescue from '@cwola/rescue';
let value;

value = rescue(() => {
    return 'returned';
});
console.log(value);  // 'returned'

value = rescue(() => {
    return throwError();
}, false);
console.log(value);  // false

value = rescue(() => {
    return throwError();
}, (e) => {
    // Handle exceptions.
    return e;
});
console.log(value);  // Error

```

## License

[MIT](https://github.com/cwola/rescue/blob/develop/LICENSE)
