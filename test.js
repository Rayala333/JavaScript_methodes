//javascript method functions
//--------------------------
//length of a arr
//find the length of arr
// let arr = [10,20,30,40,50]
// console.log(arr.length)

//delete
// console.log(delete(arr[2]))
// console.log(arr)


//map
// let arr1 =[10,20,30,40,50]
// console.log(arr1.map((element,index)=>{
//         return element*10
// }))


//filter()
//it used to filter the data 
// let arr = [10,20,30,40,50]
// console.log(arr.filter((Element,index)=>{
//     return Element > 30
// }))


//reduce()
//it is used to add the element
// let arr = [1,2,3,4,5,6,7]
// console.log(arr.reduce((fistvalue,nextvalue)=>{
//         // return fistvalue+nextvalue
//         return fistvalue+","+nextvalue
// }))


//reduceright()
// let arr = [1,2,3,4,5,6,7]
// console.log(arr.reduceRight((fistvalue,nextvalue)=>{
//     // return fistvalue+","+nextvalue
//     return fistvalue + nextvalue
// }))


//push()
// let arr = [10,20,30,40,50,60]
//     arr.push(70)
// console.log(arr)


// //pop
//     arr.pop()
// console.log(arr)


// //unshift
// arr.unshift(5)
// console.log(arr)


// //shift
// arr.shift()
// console.log(arr)


//findIndex()
//it is used to find the particular value of index
// let arr = [10,20,30,40,50,60,70]
// console.log(arr.findIndex((Element)=>{
//     return Element === 30
// }))


//splice()
// let arr = [10,20,30,40,50,60,70]
// console.log(arr.splice(4,2))
// console.log(arr.splice(0,1))
// console.log(arr)
// console.log(arr.splice(1,0,5,10))
// console.log(arr)


//slice()
//it is used to filter the data wich index value we wont

// let arr = [10,20,30,40,50,60,70]
// console.log(arr.slice(2,4))


//find()
// let arr = [10,20,30,40,50]
// console.log(arr.find((Element,index)=>{
//     return Element == 30
// }))

// //includes()
// console.log(arr.includes(20))

//some()
//it used to atleast one element satifies the condition then it will return "true" other wise "false"
// let arr = [10,20,30,40,50,60]
//     console.log(arr.some((Element,index)=>{
//         return Element <=20
//     }))


//every()
//it used allelement satifies the condition then only it return "true" otherwise "false"
// console.log(arr.every((Element,index)=>{
//     // return Element >=10
//     return Element >=30
// }))



//fill()
// let arr = [10,20,30,40,50,60]
// console.log(arr.fill(200,3))
// console.log(arr.fill(200))


//sort()
//it is used to arrange the data in to either ascending or decending order
// let arr = [10,20,30,40,50,60]
// console.log(arr.sort((num1,num2)=>{
//     // return num2-num1; //decending
//     return num1-num2; //ascending
    
// }))


//indexOf()
//it is used to replace the index orignal value to new value(or)
//it is used to remove the dublicate values of index and give the orignal index remaning all are same

// let arr = [10,20,30,10,20,50,60,70,80]
// // arr.forEach((Element,index)=>{
// //     console.log(arr.indexOf(Element))
// // })

// //remove the dublicate elements
// console.log(arr.filter((element,index)=>{
//     return arr.indexOf(element)===index;
// }))



//flat()
//it is used to convart multi dimentional array to single dimensional array
// let arr = [1,[2],3,[4],5]
// console.log(arr.flat())



//flatMap()
//combinaion of map and flat we can called the flatMap()
//it convart mult dimentional arr to single dimentional arr

// let arr = [10,20,30,40]
// let arr1 = ["hi","hello","my","Name"]
// console.log(arr.flatMap((Element,index)=>{
//     return [Element,arr1[index]]
// }))

// console.log(arr.map((Element,index)=>{
//     return [Element,arr1[index]]
// }).flat(1))



//copyWithIn()
//it is used to copy the particular index element into anydher index element

// let arr = [10,20,30,40,50,60,70,80,90,100]

// console.log(arr.copyWithin(5))


//reverse()
//it is used to reverse the array element
// let arr = [10,20,30,40,50]
// console.log(arr.reverse())


// let arr1 = ["angular","react","nodejs","css"]
// console.log(arr1.reverse())

// console.log(arr1.map((Element,index)=>{
//     return Array.from(Element).reverse().join(" ")
// }))


//Array.from()
//we need to revrese each and everry element then we use Array.from() function

// console.log(Array.from("hello").reverse().join(" "))



//repeat()
//it is used to repeat the only the *"strings"
// let arr = 'hello'
// console.log(arr.repeat(10))


//lastIndexOf()
//it is used to find thr repated element last indexof

// let arr =[10,20,30,10,40,50,10,20,30,50,20,40,20]

// console.log(arr.lastIndexOf(10))
// console.log(arr.lastIndexOf(20))
// console.log(arr.lastIndexOf(50))



//toString() and replace()
//toString is old approch new key is join(" ")

// let arr1 = ["angular","react","nodejs","css"]
// // console.log(arr1.reverse())

// console.log(arr1.map((Element,index)=>{
//     return Array.from(Element).reverse().toString().replace(/,/g,"")
// }))



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
let arr = [10,20,30,40,50,60,70,80]
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
for(let value of arr){
    console.log(value)
}


