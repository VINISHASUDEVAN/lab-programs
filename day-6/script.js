class People
{
    constructor(firstName,mark)
    {
        this.firstName  = firstName 
        this.mark = mark
    }
}                       
const obj2=new People("vinisha",100)   
const obj3=new People("rethika",100) 
console.log(obj2.firstName) 
//declaration of an array                                                                                                                                                              }
const arr=[5,4,3,2,1,6,7,8,9]
//for each
arr.forEach((x)=>{console.log(x)})
//filter-get it into it
 let filteredArr=arr.filter((x)=>x%2==0)
 console.log( filteredArr)
 //reduce
 let sum = arr.reduce((acc,val)=>acc+val)
 console.log(sum)
 //slice
 let copyArr= arr.slice(2)
 console.log(copyArr)
 //splice
 arr.splice(2,4)
 console.log(arr)
//split 
func rev(word)
{
    [...word].reverse().join(" ")
}
    
let topic= "java script is fun"
let vinisha = topic.split(' ' )
for(let i = 0;i<vinisha.length;i++)
    console.log(vinisha[i])
