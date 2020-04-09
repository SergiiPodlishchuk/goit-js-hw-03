"use strict";

const findBestEmployee = function(employees) {
  const objs = Object.keys(employees);
  let max = 0;
  let name;
  for (const obj of objs) {
    if (max < employees[obj]) {
      max = employees[obj];
      name = obj;
    }
  }
  return name;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); // lux
