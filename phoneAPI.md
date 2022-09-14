# Phone API

## Data

The data will be in a json file. Person is uniquely identified by firstname and lastname. There can't be two persons with the same first and lastname. Phone numbers are also unique.

### phones.json

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

## Class Phoneregister

### **constructor(data)**

Phones json-array is passed as a parameter `data`. If the parameter is missing, throws an exception `"phone data missing"`.

### **getTypes()**

Returns all phone types in an array. The type is added to the result array only once. If there are no phones or no persons, an empty array [] is returned. If the type is empty (empty string or missing), that number is omitted.

For example

```json
["home", "work", "mobile"]
```

### **getPersonsNumbersByType(firstname,lastname,type)**

Method returns an array of phone numbers of given `type` belongin to a given person.

If no person with given name is found, an empty array is returned.
If no number with given type is found, an empty array is returned.
If at least one parameter is missing, an exception `"missing parameter"` is thrown.

For example the work numbers of Leila Hökki:

```json
["87654321", "05040302"]
```

### **getAllNumbersByType(type)**

Returns an array of objects consisting of names and numbers of given type.

If no number of given type is found, an empty array [] is returned.
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
    "number": { "type": "work", "tel": "05040302" }
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

### **getName(number)**

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
