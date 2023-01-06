# Prettier

### Install Prettier

This will add prettier to the dependencies of the project

```bash
npm install --save-dev --save-exact prettier
```

### Configuration File

Add a key to the `package.json` file 

```json
  "prettier": {
    "singleAttributePerLine": false,
    "printWidth": 135,
    "tabWidth": 2,
    "htmlWhitespaceSensitivity": "css",
    "endOfLine": "crlf"
  }
```



### Format File

```bash
npx prettier --write index.html
```
