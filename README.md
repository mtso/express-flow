# express-flow starter

## Installation

```
$ git clone https://github.com/mtso/express-flow
$ cd express-flow
$ npm install
```

In order for the Flow Language Support Visual Studio Code extension to work correctly,
`flow-bin` must be installed on `$PATH`.

```
$ npm i -g flow-bin
```

## Usage

```
$ npm run build
$ PORT=3000 npm start
```

## Notes

- The stripped source is written into the `lib/` folder.
- Flow interfaces make mocking and changing implementations easy
  for controllers, storage, and external connections.
- Flow interfaces cannot be exported as the default, so one must "destructure" the import.
- Disable Typescript checking in Visual Studio Code with the workspace setting: `{ "javascript.validate.enable": false }`. Instead, enable [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode).

## To Do

- Add testing with mocks
