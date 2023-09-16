// var i:number=1
// // i=i+1
// // i++ //postfix increment
// // ++i //prefix increment
// // i--  // postfix decrement
// // --i
// // console.log(i);

// // var result:number= 2+3+ i++;
// // console.log(result);
// var result1:number = 2+3 + ++i;
// console.log(result1);

// for (let index = 10; index < 20; index++) {
//     console.log("Ali",index);
    
// }

// while (i<10) {
//     console.log('AA',i);
//     i++
// }

// do{
//     console.log('AB',i);
//     i++
    
// }while(i<1)

// var sum:number =0
// for (let index = 1; index <=100; index++) {
//     if (index%5 == 0) {
//         console.log(index);
//         sum=sum+index
//     }
    
// }
// console.log('sum',sum);


function sum(array:number[]){
    let i:number=0
    var sum:number = 0
while (i<array.length){
    console.log(array[i]);
    sum=sum+array[i]
    i++
}
    
    return array
}
sum([1,2,3,4,5,6])