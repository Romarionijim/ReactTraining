const age = 5;
const key1 = "age is less than 10"
const key2 = "age is equal or more than 10"

const obj = {
    name: "john",
    last: "doe",
    [age >= 10 ? key2 : key1]: true
}

console.log(obj);