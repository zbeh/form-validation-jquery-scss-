function timeoutPromiseResolve(interval) {
    return new Promise((resolve, reject) =>
    { setTimeout(function(){ resolve("successful"); }, interval); });
};
function timeoutPromiseReject(interval) { 
    return new Promise((resolve, reject) => { 
    setTimeout(function(){reject("error"); }, interval); });
};
// let startTime = Date.now();
// let finishTime 
// console.log(startTime);
// timeoutPromiseResolve(5000).then((data)=>{
// console.log( data)
// finishTime = Date.now()
// console.log(finishTime);}) 
// timeoutPromiseReject(2000).then(data=>{
// console.log( data)
// finishTime = Date.now()
// console.log(finishTime);
// }) 
// timeoutPromiseResolve(3000).then(data=>{
// console.log(data)
// finishTime = Date.now()
// console.log(finishTime);
// let timeTaken = finishTime - startTime; 
// alert("Time taken in milliseconds: " + timeTaken)
// }) 
function timeTest(){
   //return timeoutPromiseReject(2000)
  // timeoutPromiseResolve(5000);
   //timeoutPromiseReject(2000)
//    timeoutPromiseResolve(3000);
}
console.log(timeTest);
let startTime = Date.now();
timeTest() .then(() => {}).catch(e => { 
    console.log(e); 
 let finishTime = Date.now();
 let timeTaken = finishTime - startTime; 
 alert("Time taken in milliseconds: " + timeTaken)})
// 
// 
// in line 28 the functions which are promise and  have declared and the timeTest() return nothing
//in line 36  'then' have been used. when we have promise we can use "then"
//timeTest()is a regular function so we get error when we use "then" method after calling
//it. if we use 'return' in timeTest() , we'll have promise as output so we can
//use "then" in this case. The above explanations also are true about .catch