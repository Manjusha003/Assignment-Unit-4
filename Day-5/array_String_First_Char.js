var arr=["Masai", "School"];

// using Map function
var out=arr.map(function(ele){
  return ele[0]
});
console.log(out);

// using forEach
var out=[]
arr.forEach(function(ele){
    
    out.push(ele[0])
})
console.log(out);