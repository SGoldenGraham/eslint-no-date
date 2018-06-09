# eslint-plugin-no-date

enforces that the Date constructor is not called and suggests the use of moment

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-date`:

```
$ npm install eslint-plugin-no-date --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-date` globally.

## Usage

Add `no-date` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-date"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-date/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





