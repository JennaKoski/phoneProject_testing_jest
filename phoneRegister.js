"use strict";

module.exports = class PhoneRegister {
  constructor(data) {
    if (!data) throw new Error("phone data missing");
    this.phoneData = data;
  }

  getTypes() {
    const foundTypes = [];
    for (let person of this.phoneData) {
      if (person.phones) {
        for (let phone of person.phones) {
          if (phone.type && phone.type !== "") {
            if (!foundTypes.includes(phone.type)) {
              foundTypes.push(phone.type);
            }
          }
        }
      }
    }
    return foundTypes;
  } // end of getTypes

  getPersonsNumbersByType(firstname, lastname, type) {
    if (firstname && lastname && type) {
      const numbersFound = [];
      for (let person of this.phoneData) {
        if (person.firstname === firstname && person.lastname === lastname) {
          for (let phone of person.phones) {
            if (phone.type === type) {
              numbersFound.push(phone.number);
            }
          }
          return numbersFound;
        }
      }
      return numbersFound;
    } else {
      throw new Error("missing parameter");
    }
  } // end of getPersonsNumbersByType

  getAllNumbersByType(type) {
    if (!type) throw new Error("missing parameter");

    const found = [];
    for (let person of this.phoneData) {
      if (person.phones) {
        for (let phone of person.phones) {
          if (phone.type === type) {
            if (phone.number && phone.number.length > 0) {
              found.push({
                firstname: person.firstname,
                lastname: person.lastname,
                number: {
                  type: phone.type,
                  tel: phone.number,
                },
              });
            }
          }
        }
      }
    }

    return found;
  } // end of getAllNumbersByType

  getAllNumbers() {
    const found = [];
    for (let person of this.phoneData) {
      if (person.phones && person.phones.length > 0) {
        found.push(person);
      }
    }

    return found;
  } // end of getAllNumbers

  getName(number) {
    for (let person of this.phoneData) {
      for (let phone of person.phones) {
        if (phone.number === number) {
          return {
            firstname: person.firstname,
            lastname: person.lastname,
          };
        }
      }
    }

    return null;
  } // end of getName
}; // end of class
