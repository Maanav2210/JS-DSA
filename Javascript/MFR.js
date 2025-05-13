// const num = [45,32,40,42]    
//  const tofarh = num.map((e) =>{
//         e = e*9/5 + 32
//         console.log(e);
        
//     });

//     console.log(tofarh);


    // const val = ["mango", "apple"]

    // const caps = val.map((e)=>{
    //     e = e.charAt(0).toUpperCase() + e.slice(1);
    //     console.log(e);
    //     return e
    // })
    // console.log(caps);



    // const num = [
    //     {username:"Maany" , age: 19 }
    //     , {username:"Johnny" , age: 25 }
    // ]
    //     const user = num.map((e)=>{
    //         e=e.username
    //         console.log(e);
    //         return e
            
    //     }) 
    //     console.log(user);
        
    
    

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//     const doubled = num.map((e)=>{
//         e = e * 2
//        console.log(e);
       
//     })
//     console.log(doubled);


    // const val = ["cat", "dog"]
    // const indi = val.map((items, index)=>{
    //      items + index
    //      return items + index
    // })
    // console.log(indi);

//     const num = [1, 2 ,3 ,4 ,5,7,8]
// const even = num.filter((e)=>{
//     e = e % 2 === 0 
//     return e
// })
// console.log(even);

//         const num = [
//         {name:"Maanav" , age: 19 }
//         , {name:"John" , age: 25 }
//         ,{name:"Rohit" , age: 17 }
//         , {name:"Sahil" , age: 20 }
//     ]
// const agebarr =  num.filter((e)=>{
//     e = e.age>=18
//     return e
// })
// console.log(agebarr);


// const val = ["Maanav", false, NaN,"USA","Car"]
// const truevalue = val.filter((e)=>{
//     e = val.filter(Boolean)
//     return e 
// })
// console.log(truevalue);



// const val = ["Maanav","Internship","USA","Car","Airlines"]
// const valimit = val.filter((word)=>{
//     word = word.length >= 5
//     return word
// })
// console.log(valimit);


// const num = [1, 2 ,3 ,4 ,5,7,8]

// const isprime = num.filter((e)=>{
//     if (e < 2) {
//         return false
//     }
//     for (let i = 2 ; i <= Math.sqrt(e); i++) {
//         if (e % i === 0) {
//             return false
//         }
         
//     }
//     return true
// })
// console.log(isprime);

// const num = [1, 2 ,3 ,4 ,5,7,8]

// const sum = num.reduce((acc, num)=>
//     acc + num, 0
// )
// console.log(sum);

// const max = num.reduce((acc, cur)=>
// Math.max(acc, cur ) , num[0]
// )
// console.log(max);


// const nestedarray = [[1,2], [3,4]];
// const flattened = nestedarray.reduce((acc, cur)=>
// acc.concat(cur),[]
// )
// console.log(flattened);

// const fruits = ['apple' , 'banana' , 'apple' , 'orange']

// const count = fruits.reduce((acc,curr)=> {
// acc[curr] =(acc[curr] || 0) + 1
// return acc
// }, {})
// console.log(count);

// const word = ['Hello' , 'Maanav'];

// const sentence = word.reduce((acc,curr)=>
// acc + '' + curr
// )
// console.log(sentence);