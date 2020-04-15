"use strict";
console.log("<------task-01------>");
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";

user.hobby = "skydiving";

user.premium = false;

const objs = Object.keys(user);

for (const obj of objs) {
  console.log(`${obj}: ${user[obj]}`);
}
