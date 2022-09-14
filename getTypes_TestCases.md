# Test cases for getTypes

## **getTypes()**

- returns all phone types in an array. The type is added to the result array only once. If there are no phones or no persons, an empty array [] is returned. If the type is empty, that number is omitted.

For example

```json
["home", "work", "mobile"]
```

### Test 1: use default data

Before tests create `register` object from the class PhoneRegister

```js
register.getTypes();
```

returns

```json
["home", "work", "mobile"]
```

### Test 2: person has no phone

Test data:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": []
  },
  {
    "firstname": "Matt",
    "lastname": "River"
  }
]
```

```js
const register = new PhoneRegister(testData);
```

expect this to return an empty array []

### Test 3: no persons in phoneregister

testData is []

returns an empty array []

### Test 4: type is missing or is an empty string

testData

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "", "number": "12345678" },
      { "type": "work", "number": "87654321" },
      { "type": "work", "number": "05040302" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": [
      { "type": "home", "number": "567890123" },
      { "type": "mobile", "number": "045678912" },
      { "type": "work", "number": "32145678" }
    ]
  },
  {
    "firstname": "Mary",
    "lastname": "Jones",
    "phones": [
      { "number": "55555555" },
      { "type": "cell", "number": "33333333" },
      { "type": "work", "number": "44444444" }
    ]
  }
]
```

create new register with testData

```js
const register = new PhoneRegister(testData);
register.getTypes();
```

expect to get

```json
["work", "home", "mobile", "cell"]
```

### Test 5: some phones are missing

testData

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": []
  },
  {
    "firstname": "Vera",
    "lastname": "River",
    "phones": [
      { "type": "home", "number": "12121212" },
      { "type": "mobile", "number": "77777777" }
    ]
  }
]
```

```js
const register = new PhoneRegister(testData);
register.getTypes();
```

expect to get

```json
["mobile", "home"]
```
