### **getAllNumbers()**

Returns all phone numbers in an array, each as an object of form:

```json
{
  "firstname": "",
  "lastname": "",
  "phones": []
}
```

The phone object in phones array is of form:

```json
{ "type": "", "number": "" }
```

If a person doesn't have a phone (the phones field is an empty array), then the person is not added into the result array.

If all phones are missing, an empty array is returned.
If all persons are missing, an empty array is returned.

### Test 1: All persons are missing

```js
const register = new PhoneRegister([]);

register.getAllNumbers();
```

returns []

### Test 2: get all numbers using default data

```js
const register = new PhoneRegister([]);
register.getAllNumbers();
```

returns defaultData

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "12345678" },
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
  }
]
```

### Test 3: some phones missing

TestData:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "12345678" },
      { "type": "work", "number": "87654321" },
      { "type": "work", "number": "05040302" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": []
  },
  {
    "firstname": "Vera",
    "lastname": "River"
  }
]
```

```js
const register = new PhoneRegister(TestData);
register.getAllNumbers();
```

returns

```json
{
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "12345678" },
      { "type": "work", "number": "87654321" },
      { "type": "work", "number": "05040302" }
    ]
  },
```

### Test 4: all phones are missing

TestData:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": []
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": []
  },
  {
    "firstname": "Vera",
    "lastname": "River"
  }
]
```

```js
const register = new PhoneRegister(TestData);
register.getAllNumbers();
```

returns []
