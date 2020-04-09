const countProp = function(obj) {
  const quantityObj = Object.keys(obj);
  return quantityObj.length;
};

console.log(countProp({}));
console.log(countProp({ name: "Mango", age: 2 }));
console.log(countProp({ mail: "poly@mail.com", isOnline: true, score: 500 }));
