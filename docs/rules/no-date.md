# no-date

We have found that when the project has an alternate way of detecting the user timezone, new Date() does not suffice. Instead we have used moment, to set the default timezone, based on the users preferences.


## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```js

var date = new Date();

```

Examples of **correct** code for this rule:

```js

moment().toISOString();

```


## When Not To Use It

If you are using the browser settings to dictate the users timezone. Then new Date() will be sufficient.

## Further Reading

https://zachholman.com/talk/utc-is-enough-for-everyone-right
