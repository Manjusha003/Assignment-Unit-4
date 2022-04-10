var arr = ["apple", "windows", "ubuntu"];

// Using Map function
var out = arr.map(function (ele) {
    return ele.length;
});
console.log(out);

// using forEach
var out = [];
arr.forEach(function (ele) {
    out.push(ele.length);
});
console.log(out);
