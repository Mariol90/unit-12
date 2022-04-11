// const doubleValues=[1,2,3,];
// doubleValues.forEach(function(number){
// console.log(number*2);
// });
// const doubleValues1=[5,1,2,3,10,];
// doubleValues1.forEach(function(number){
// console.log(number*2);
// });
// ___________________________________________________________________________________
// const onlyEvenValues=[1,2,3];
// onlyEvenValues.forEach(function(even){
//     if (even % 2 ===0){
//         console.log(even);
//     } 
// });

// const onlyEvenValues1=[5,1,2,3,10];
// onlyEvenValues1.forEach(function(even){
//     if (even % 2 ===0){
//         console.log(even);
//     } 
// });
// // ___________________________________________________________________________________
// const showFirstAndLast=['colt','matt', 'tim', 'test'];
// showFirstAndLast.filter(function(name){
//     console.log(name[0] + name[name.length -1] );
// });
// const showFirstAndLast1=['hi', 'goodbye', 'smile'];
// showFirstAndLast1.filter(function(name){
//     console.log(name[0] + name[name.length -1] );
// });
// ___________________________________________________________________________________
// addKeyAndValue(
//     [
//       {name: 'Elie'},
//       {name: 'Tim'},
//       {name: 'Matt'},
//       {name: 'Colt'}
//     ],
//       'title',
//       'instructor'
//     )
//     function addKeyAndValue(arr, key ,value){
//     arr.forEach(function(newv){
//     newv[key]=value;
//     });
//     console.log(arr) ; 
//     }
// ___________________________________________________________________________________

// const doubleValuesWithMap=[1,2,3]; 
// const doubleValuesWithMap1=[1,-2,-3];
// const doble= doubleValuesWithMap.map(function(number){
//     return number*2;
// });
// const doble1= doubleValuesWithMap1.map(function(number){
//     return number*2;
// });
// ___________________________________________________________________________________
// const valTimesIndex=[1,-2,-3];
// const valTimesIndex1=[1,2,3] ;
// const newval=valTimesIndex.map(function(number,index){
//    return number*index; 
// })
// const newval1=valTimesIndex1.map(function(number,index){
//    return number*index; 
// })
// ___________________________________________________________________________________
// let a=[];
//  extractKey(
//     [
//         {name: 'Elie'},
//         {name: 'Tim'},
//         {name: 'Matt'},
//         {name: 'Colt'}
//       ],
//       'name'
//     )  
//     function extractKey(arr, key) {
//          arr.map(function(val) {
//           a.push(val[key]);
          
//         });
//         return a;
//       }
// ___________________________________________________________________________________
________________________________________________________________________
// filterByValue(
//     [
//       {first: 'Elie', last:"Schoppik"},
//       {first: 'Tim', last:"Garcia", isCatOwner: true},
//       {first: 'Matt', last:"Lane"},
//       {first: 'Colt', last:"Steele", isCatOwner: true}
//     ],
//     'isCatOwner'
//     )
//     function filterByValue(arr, key){
//         arr.filter(function(val){ 
//             if(val[key]===true) { 
//         console.log(val);
//         }
//      });
//     }
 // ___________________________________________________________________________________
//  letfind([1,2,3,4,5], 4) 
//  find([1,2,3,4,5], 10)   
    
// function letfind(arr,key){
//     arr.filter(function(match){
//       if(match===key){
//           console.log(match)
//       } 
//     });
// }
// function find(arr,key){
//     arr.filter(function(match){
//       if(match===key){
//           console.log(match)
//       } else{
//           console.log(undefined);
//       }
//     });
     // ___________________________________________________________________________________

     
      
    //   function findInObj(arr,val,key){  
    //       arr.filter(function(value){
    //         //   console.log(value);
    //         if(value[val]===key){
    //             // console.log(val);
    //            return value;
    //         };
    //     });
    //   };
    //   const res=findInObj(
    //     [
    //       {first: 'Elie', last:"Schoppik"},
    //       {first: 'Tim', last:"Garcia", isCatOwner: true},
    //       {first: 'att', last:"Lane"},
    //       {first: 'Colt', last:"Steele", isCatOwner: true}
    //     ],
    //     'isCatOwner',
    //     true
    //   );
    //   console.log(findInObj(
    //     [
    //       {first: 'Elie', last:"Schoppik"},
    //       {first: 'Tim', last:"Garcia", isCatOwner: true},
    //       {first: 'att', last:"Lane"},
    //       {first: 'Colt', last:"Steele", isCatOwner: true}
    //     ],
    //     'isCatOwner',
    //     true);
     // ___________________________________________________________________________________

//    removeVowels1('Elie') ;
//    removeVowels2('TIM');
//   removeVowels3('zzZZZZ') ; 
  
//    function removeVowels2(str) {
//         console.log( str.replace(/[aeiou]/gi, '').toLowerCase());
//       };
  
//    function removeVowels1(str) {
//         console.log( str.replace(/[aeiou]/gi, '').toLowerCase());
//       };
  
//    function removeVowels3(str) {
//         console.log( str.replace(/[aeiou]/gi, '').toLowerCase());
//       };
     // ___________________________________________________________________________________
    //  doubleOddNumbers=[1,2,3,4,5];
    //  doubleOddNumbers1=[4,4,4,4,4]

    //  const doubleOddN= doubleOddNumbers.filter(function(numb){
    //  return numb % 2 !==0;
      
    // }).map(function(numbers){
    //     return numbers*2;
    //  });

    //  const doubleOddN1= doubleOddNumbers1.filter(function(numb){
    //  return numb % 2 !==0;
      
    // }).map(function(numbers){
    //     return numbers*2;
    //  });

    // function findFirst(obj, key, value) {
	
    //   var result = obj.find( function (currentValue, index, arr) {
    //     if (currentValue[key] == value) {
    //       return currentValue
    //     }
    //   })
      
    //   return result
      
    // }
    
    
    // console.log(findFirst(
    //   [
    //     {first: 'Elie', last:"Schoppik"},
    //     {first: 'Tim', last:"Garcia", isCatOwner: true},
    //     {first: 'att', last:"Lane"},
    //     {first: 'Colt', last:"Steele", isCatOwner: true}
    //   ],
    //   'isCatOwner',
    //   false
    // ));


   