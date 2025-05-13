// let a = 6
// if (a % 2 === 0) {
//     console.log('Even');
//     }
// else{
//     console.log('Odd');
//     }

// let a = 70
// if (a >= 70) {
//     console.log("Pass");
// }else {
//     console.log("Fail");
//     }

// let a = 2
// switch (a) {
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     case 3:
//         console.log("Wednesday");
//         break;

//     case 4:
//          console.log("Thursday");
//         break;

//      case 5:
//          console.log("Friday");
//          break;

//     case 6:
//           console.log("Saturday");
//            break;
    
//     case 7:
//         console.log("Sunday");
//            break;

//     default:
//         console.log(NaN);
//         break;
// }

// let a = 0
// if (a > 0) {
//     console.log("Positive");
    
// } else if (a < 0) {
//     console.log("Negative");
    
// } else{
//     console.log("Zero");
    
// }

// let a = 19
// if (a>10) {
//     console.log("Greater");
    
// } else {
//     console.log("Smaller");
//     }

// const now = new Date();
// const hour = now.getHours();
// const minutes = now.getMinutes();
// const time = hour + minutes /60;

// if (time >= 6 && time < 12) {
//     console.log("Morning");
// } else if (time >= 12 && time < 16) {
//     console.log("Afternoon");
// } else{
//     console.log("Evening");
    
// }

// let year = 2004
// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     console.log(`${year} is a leap year`);
// } else {
//     console.log(`${year} is not a leap year`);
// }


// let age = 2
// if (age < 13) {
//     console.log("Child");
// } else if (age < 21) {
//     console.log("Teenager");
// } else if (age < 60) {
//     console.log("Adult");
// } else{
//     console.log("Senior");
//     }

// let a = 60
// if(a % 5 === 0 && a % 3 === 0) {
//     console.log("Divisible by both");
// } else{
//     console.log("Divisible by none");
//     }

// let a = 7
// switch (a) {
//     case 12:
//     case 1:
//     case 2:
//     console.log("Winter");
//     break;

//     case 3:
//     case 4:
//     case 5:
//     console.log("Spring");
//     break;

//     case 6:
//     case 7:
//     case 8:
//     console.log("Summer");
//     break;

//     case 9:
//     case 10:
//     case 11:
//     console.log("Fall");
//     break;

//     default:
//         console.log("Invalid Number");
//         break;
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     }

// let i = 10
// while (i>=1) {
//     console.log(i);
//     i--
// }

// let sum = 0
// for (let i = 1; i <= 100; i++) {
//    sum = sum + i
//    console.log(sum);
//    }


// let num = 9
// if (num<0) {
//     console.log("Invalid");
// } else if(num === 0) {
//     console.log("0");
//     } else{
//         let i =1
//         let factorial =1
//     while (i<=num) {
//         factorial *= i
//         i++
//     } console.log(factorial);
    
//     }

// let i = 0
// do {
//     console.log("Hello");
//     i++
    
// } while (i<=5);


// let a=0 
// let b=1
// for (let i = 0; i < 10; i++) {
//     console.log(a);
//     let next = a + b
//     a=b
//     b=next
//     }

// let arr = [1,4,6,9,10]
// let max = arr[0]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]>max) {
//         max=arr[i]
//     }
    
// } 
// console.log(max);

// function sumall(a,b) {
//     console.log(a+b);
//     }
// sumall(4,1)


// function isprime(num) {
//     if (num<=1) {
//     return false;
//         } else {
//       for (let i = 2;  i < n; i++) {
//               if (num % i === 0) {
//            return false
// }
//       }
      
//     }return true
// }



// for (let i = 1; i < Math.sqrt[Number]; i++) {
//     if (isprime(i)) {
//         console.log(i);
        
//     }
    
// }




// for (let i = 1; i <=50 ; i++) {
//     if (i%2===0) {
//         console.log(i);
        
//     }
    
// }




// function isprime(n) {
    


//  let isprime=true
// if (n<=1) {
//     isprime = false;
// } else {
//     for (let i = 2;  i < n; i++) {
//         if (n % i === 0) {
//         isprime=false
//         break
//     }
// }
// } return isprime
// }

// console.log(isprime(7));


// function FindMax(a,b,C) {
//     console.log(Math.max(a,b,C));
//     }
// FindMax(1,2,3)

// function reversestring(str){
// console.log(str.split('').reverse().join(''));
// } reversestring("Maan")

// function Findfactorial(num) {
//     if (num<0) {
//         console.log("Invalid");
//         } else if(num === 0) {
//             console.log("0");
//             } else{
//                 let i =1
//                 let factorial =1
//              while (i<=num) {
//                  factorial *= i
//                  i++
//              } console.log(factorial);
// }
// }
// Findfactorial(8)


// function findarea(l,b) {
//     console.log(l*b);
//     }
// findarea(69,43)

// function arrsum(arr) {
// return arr.reduce((sum,current)=> sum + current, 0)
// }
// console.log(arrsum([1,2,4,5]));

// function fibonacciseq(num) {
// let a=0 
//  let b=1
//  for (let i = 0; i < num; i++) {
//    console.log(a);
// let next = a + b
// a=b
// b=next
//    }
// }

// fibonacciseq(4)

// let arr = [1,25,42,89,91]
// function arraverage(arr) {
//     const sum = arr.reduce((acc,num)=> acc + num, 0)
//     return sum / arr.length
// }
// console.log(arraverage(arr));

// let arr = [12,32,45,7]
// const tofarh = arr.map((e)=>{
//     e = e*9/5 + 12
//     return e
// })
// console.log(tofarh);






// let year = 2000
// function leapyear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         console.log(`${year} is a leap year`);
//         } else{
//             console.log(`${year} is not a leap year`);
            
//         }
// }
// leapyear(year)