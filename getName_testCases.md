# Test cases for getName

## **getName(number)**

The method searches for the given phone number. If the number is found, returns a json object of form:

```json
{
  "firstname": "",
  "lastname": ""
}
```

If no phone matches the given number, then `null` is returned.
If the parameter is missing, `null` is also returned.

For example get the owner of "045678912"

```
{
  "firstname": "Matt",
  "lastname": "River"
}
```

Before tests create register with default data

### Test 1: wrong number

call

```js
register.getName("0000");
```

returns `null`

### Test 2: parameter missing

call

```js
register.getName();
```

returns `null`

### Test 3: get the name of the number "12345678"

all

```js
register.getName("12345678");
```

returns

```json
{ "firstname": "Leila", "lastname": "Hökki" }
```

### Test 3B: get name of the number

```js
const testValues = [
  ["87654321", { firstname: "Leila", lastname: "Hökki" }],
  ["05040302", { firstname: "Leila", lastname: "Hökki" }],
  ["045678912", { firstname: "Matt", lastname: "River" }],
  ["32145678", { firstname: "Matt", lastname: "River" }],
];
```
