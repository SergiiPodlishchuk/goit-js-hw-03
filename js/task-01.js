"use strict";

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

user.mood = "happy";

console.log(user);

user.hobby = "skydiving";

console.log(user);

user.premium = false;

console.log(user);

const objs = Object.keys(user);

for (const obj of objs) {
  console.log(`${obj}: ${user[obj]}`);
}
