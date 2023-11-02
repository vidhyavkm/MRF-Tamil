var array = [1,2,3,4,5,6,7,8];

//mul all the elem in the array by 3.

var result = array.map((elem)=>elem*3)
console.log(result);
console.log(array);

//print odd numbers in the array

var res = array.filter((val)=> val%2===1);
console.log(res);
console.table(res);

// sum of the array

var resu = array.reduce((accu,curr)=> accu+curr)
console.log(resu);

var resu = array.reduce((accu,curr)=> accu+curr,5)
console.log(resu);


var r1 = array.map((element)=> element*3).filter((element)=> element%2==0).reduce((acc,cval)=>acc+cval)
console.log(r1);
