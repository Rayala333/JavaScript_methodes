//javascript method functions
//--------------------------
//length of a arr
//find the length of arr
// let arr = [10,20,30,40,50]
// console.log(arr.length)  // o/p = 5 

//delete
// console.log(delete(arr[2]))  //o/p = true
// console.log(arr)             //o/p = [ 10, 20, <1 empty item>, 40, 50 ]


// map
// let arr1 =[10,20,30,40,50]
// console.log(arr1.map((element,index)=>{
//         return element*10                           // o/p = [ 100, 200, 300, 400, 500 ]
// }))


//filter()
//it used to filter the data 
// let arr = [10,20,30,40,50]
// console.log(arr.filter((Element,index)=>{
//     return Element > 30                             // o/p = [ 40, 50 ]
// }))


//reduce()
//it is used to add the element
// let arr = [1,2,3,4,5,6,7]
// console.log(arr.reduce((fistvalue,nextvalue)=>{
//         // return fistvalue+nextvalue                 // o/p = 28
//         return fistvalue+","+nextvalue                // o/p = 1,2,3,4,5,6,7
// }))


//reduceright()
// let arr = [1,2,3,4,5,6,7]
// console.log(arr.reduceRight((fistvalue,nextvalue)=>{
//     // return fistvalue+","+nextvalue            // o/p = 1,2,3,4,5,6,7
//     return fistvalue + nextvalue               // o/p = 28
// }))


//push() :-- it is used to add the element at end of array
// let arr = [10,20,30,40,50,60]
//     arr.push(70)
// console.log(arr)          // 0/p = [10,20,30,40,50,60,70]


//pop :--  it is used to remove the element at end of erray
//     arr.pop()
// console.log(arr)             // 0/p = [10,20,30,40,50,]


// //unshift:-- it is used to add the element at starting of array
// arr.unshift(5)
// console.log(arr)  // 0/p = [5,10,20,30,40,50,60]


// //shift:---  it is used to remove the element at starting of array
// arr.shift()
// console.log(arr)         // 0/p = [20,30,40,50,60]


//findIndex()
//it is used to find the particular value of index
// let arr = [10,20,30,40,50,60,70]
// console.log(arr.findIndex((Element)=>{
//     return Element === 30           // o/p = 2 [index value]
// }))


//splice()
// it is used to remove and add the element at any position ot array by using index values
// let arr = [10,20,30,40,50,60,70]   
// console.log(arr.splice(4,2))                        //o/p = [ 50, 60 ]
// console.log(arr)                                    //o/p = [ 10, 20, 30, 40, 70 ]
// console.log(arr.splice(0,1))                        //o/p = [ 10 ]
// console.log(arr)                                    //o/p = [ 20,30,40,70]
// console.log(arr.splice(1,0,5,10))                   //o/p = [ ]
// console.log(arr)                                    //o/p = [ 20,5,10,30,40,70 ]


//slice()
//it is used to filter the data wich index value we wont

// let arr = [10,20,30,40,50,60,70]
// console.log(arr.slice(2,4))        // o/p =[ 30, 40 ]


//find()
//it is used to check element exist or not it return the value ,it is number function
// let arr = [10,20,30,40,50]
// console.log(arr.find((Element,index)=>{
//     return Element == 30                    // o/p =[ 30]
// }))

//includes()
//it is used to check element exist or not in the array , it return the boolean value
// console.log(arr.includes(20))          // o/p = true

//some()
//it used to atleast one element satifies the condition then it will return "true" other wise "false"
// let arr = [10,20,30,40,50,60]
//     console.log(arr.some((Element,index)=>{
//         return Element <=20                                      // o/p = true
//     }))


//every()
//it used allelement satifies the condition then only it return "true" otherwise "false"
// console.log(arr.every((Element,index)=>{
//     return Element >=10         // o/p true
//     // return Element >=30
// }))



//fill()
//it is used to fill the value at wich index we need
// let arr = [10,20,30,40,50,60]
// console.log(arr.fill(200,3))             // o/p = [ 10, 20, 30, 200, 200, 200 ]
// console.log(arr.fill(200))                // o/p = [ 200, 200, 200, 200, 200, 200 ]


//sort()
//it is used to arrange the data in to either ascending or decending order
// let arr = [10,20,30,40,50,60]
// console.log(arr.sort((num1,num2)=>{
//     // return num2-num1; //decending  o/p = [ 60, 50, 40, 30, 20, 10 ]
//     return num1-num2; //ascending  o/p =  [ 10, 20, 30, 40, 50, 60 ]
    
// }))


//indexOf()
//it is used to replace the index orignal value to new value(or)
//it is used to remove the dublicate values of index and give the orignal index remaning all are same

// let arr = [10,20,30,10,20,50,60,70,80]
// arr.forEach((Element,index)=>{
//     console.log(arr.indexOf(Element))  // o/p = [0,1,2,0,1,5,6,7,8]
// })

// //remove the dublicate elements
// console.log(arr.filter((element,index)=>{
//     return arr.indexOf(element)===index;   // o/p = [10,20,30,50,60,70,80]
// }))



//flat()
//it is used to convart multi dimentional array to single dimensional array
// let arr = [1,[2],3,[4],5]
// console.log(arr.flat())    //o/p = [ 1, 2, 3, 4, 5 ]



//flatMap()
//combinaion of map and flat we can called the flatMap()
//it convart mult dimentional arr to single dimentional arr

// let arr = [10,20,30,40]
// let arr1 = ["hi","hello","my","Name"]
// console.log(arr.flatMap((Element,index)=>{
//     return [Element,arr1[index]]              //  o/p = [ 10, 'hi', 20, 'hello', 30, 'my', 40, 'Name' ]
// }))

// console.log(arr.map((Element,index)=>{
//     return [Element,arr1[index]]                //  o/p = [ 10, 'hi', 20, 'hello', 30, 'my', 40, 'Name' ]
// }).flat(1))



//copyWithIn()
//it is used to copy the particular index element into anydher index element

// let arr = [10,20,30,40,50,60,70,80,90,100]

// console.log(arr.copyWithin(5))                      // o/p = [10,20,30,40,50,10,20,30,40,50,]


//reverse()
//it is used to reverse the array element
// let arr = [10,20,30,40,50]
// console.log(arr.reverse())  // o/p = [ 50, 40, 30, 20, 10 ]


// let arr1 = ["angular","react","nodejs","css"]
// console.log(arr1.reverse())                     //    o/p = [ 'css', 'nodejs', 'react', 'angular' ]

// console.log(arr1.map((Element,index)=>{
//     return Array.from(Element).reverse().join("")
// }))                                                  // o/p = [ 'ralugna', 'tcaer', 'sjedon', 'ssc' ]


//Array.from()
//we need to revrese each and everry element then we use Array.from() function

// console.log(Array.from("hello").reverse().join(" "))



//repeat()
//it is used to repeat the only the *"strings"
// let arr = 'hello,'
// console.log(arr.repeat(10))  //o/p = hello,hello,hello,hello,hello,hello,hello,hello,hello,hello,


//lastIndexOf()
//it is used to find thr repated element last indexof

// let arr =[10,20,30,10,40,50,10,20,30,50,20,40,20]

// console.log(arr.lastIndexOf(10))  //o/p = 6
// console.log(arr.lastIndexOf(20))    //o/p = 12
// console.log(arr.lastIndexOf(50))    //o/p = 9



//toString() and replace()
//toString is old approch new key is join(" ")

// let arr1 = ["angular","react","nodejs","css"]
// console.log(arr1.reverse())

// console.log(arr1.map((Element,index)=>{
//     return Array.from(Element).reverse().toString().replace(/,/g,"")
// }))                                 // o/p = [ 'ralugna', 'tcaer', 'sjedon', 'ssc' ]



//trim() ,trimStart(), trimEnd()
// 1)trim is used to emove the white spices
// 2)trimStart() is used to remove the white spices at beginning
// 3)trimEnd()  is used to remove the white spices at End

//trim()
// console.log("   hello  ".length)
// console.log("   hello  ".trim().length)

//trimStart()
// console.log("   hello  ".length)
// console.log("   hello  ".trimStart().length)

//trimEnd()
// console.log("   hello  ".length)
// console.log("   hello   ".trimEnd().length)


//padStart() ,padEnd()
// those are used to add the extra information to string or array

// console.log("ktps".padStart(10,"*"))
// console.log("ktps".padEnd(10,"*"))
// console.log("ktps".padStart(10,"*").padEnd(10,"*"))
// console.log("ktps".padStart(10,"*").padEnd(16,"*"))



//split()
//it is used to split the arrayof string

// let arr = "wellcome to my world"
// console.log(arr.split(" ").length)
// console.log(arr.split(" ").fill("way",3))


//subStr()
//it is used to extract the particular position of string

// let arr = "wellcome to my world"
// console.log(arr.substring(0,20))
// console.log(arr.substring(0,7))
// console.log(arr.substring(9,12))
// console.log(arr.substring(9,20))


//subString()
//it is used to extract the particular position of string using index values
// let arr = "wellcome to my world"
// console.log(arr.substring(0,7))


//for()
// let arr = [10,20,30,40,50,60,70,80]
// for(let i=0; i<arr.length; i++){
//     console.log(i) //it show the index values
//     console.log(arr[i]) //it show the index and element values
// }


//for Each()
//hear we get element and index values 
// arr.forEach((element,index)=>{
//     console.log(element,index)
// })


//for Of()
//it show the value of only
// for(let value of arr){
//     console.log(value)
// }


