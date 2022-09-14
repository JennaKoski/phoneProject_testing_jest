# Test cases for getAllNumbersByType

### **getAllNumbersByType(type)**

Returns an array of objects consisting of names and numbers of given type.

If no number of given type is found, an empty array [] is returned.
If person has a type which has no number or number is empty, then it is not added to the result.
If a person has multiple numbers of given type, each of them will be in its own object.

If a parameter is missing an exception `"missing parameter"`is thrown.

The format of the returned object is:

```json
[
  { "firstname": "", "lastname": "", "number": { "type": "", "tel": "" } },
  { "firstname": "", "lastname": "", "number": { "type": "", "tel": "" } }
]
```

For example type work:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": { "type": "work", "tel": "12345678" }
  },
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": { "type": "work", "tel": "87654321" }
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": { "type": "work", "tel": "32145678" }
  }
]
```

### Test 1: get all work numbers using default data

```js
register.getAllNumbersByType("work");
```

return

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": { "type": "work", "tel": "87654321" }
  },
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": { "type": "work", "tel": "05040302" }
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": { "type": "work", "tel": "32145678" }
  }
]
```

### Test 2: get all mobile numbers using default data

```js
register.getAllNumbersByType("mobile");
```

return

```json
[
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": { "type": "mobile", "tel": "045678912" }
  }
]
```

### Test 2B: get all home numbers using default data

```js
register.getAllNumbersByType("home");
```

return

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": { "type": "home", "tel": "12345678" }
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": { "type": "home", "tel": "567890123" }
  }
]
```

### Test 3: type "x" will return an empty array

```js
register.getAllNumbersByType("x");
```

return []

### Test 4: missing parameter throws an exception "missing parameter"

```js
register.getAllNumbersByType();
```

throws an exception `"missing parameter"`

### Test 5: person has type but the corresponding number is missing or person has no phones

testData:

```json
[
  {
    "firstname": "Vera",
    "lastname": "Jones",
    "phones": [
      { "type": "home", "number": "" },
      { "type": "home" },
      { "type": "home", "number": "123123678" }
    ]
  },
  {
    "firstname": "Mary",
    "lastname": "Smith"
  }
]
```

```js
register.getAllNumbersByType("home");
```

expect to return

```json
[
  {
    "firstname": "Vera",
    "lastname": "Jones",
    "number": { "type": "home", "tel": "123123678" }
  }
]
```
