var arr= ["assignment", "problem", "media", "upload"];
var out=[]
arr.forEach(function(ele){
    if(ele[0]=="a" || ele[ele.length-1]=="a"){
        out.push(ele)
    }
});
console.log(out)