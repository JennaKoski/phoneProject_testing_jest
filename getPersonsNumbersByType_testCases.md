# Test cases for getPersonsNumbersByType

### **getPersonsNumbersByType(firstname,lastname, type)**

Method returns an array of phone numbers of given `type` belongin to a given person with given `firstname` and `lastname`.

If no person with given name is found, an empty array [] is returned.
If no number with given type is found, an empty array [] is returned.
If at least one parameter is missing, an exception `"missing parameter"` is thrown.

For example the work numbers of Leila Hökki:

```json
["87654321", "05040302"]
```

Before tests create register object with the default data

### Test 1: work numbers of Leila Hökki

```js
register.getPersonsNumbersByType("Leila", "Hökki", "work");
```

returns

```json
["87654321", "05040302"]
```

### Test 2: mobile numbers of Matt River

```js
register.getPersonsNumbersByType("Matt", "River", "mobile");
```

returns

```json
["045678912"]
```

### Test 2B: home numbers of Matt River

```js
register.getPersonsNumbersByType("Matt", "River", "home");
```

returns

```json
["567890123"]
```

### Test 3: wrong type or name returns an empty array

```js
register.getPersonsNumbersByType("Matt", "River", "x");
register.getPersonsNumbersByType("Matt", "x", "mobile");
register.getPersonsNumbersByType("x", "River", "mobile");
```

### Test 4: Missing parameter throws as exception: "missing parameter"

```js
register.getPersonsNumbersByType("Matt", "River");
register.getPersonsNumbersByType("Matt");
register.getPersonsNumbersByType();
```

### Test 5: if data is empty array (no persons found)

```js
const register = new PhoneRegister([]);
register.getPersonsNumbersByType("Matt", "River", "mobile");
```

returns []
