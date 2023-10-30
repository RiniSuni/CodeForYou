const mySym = Symbol("Key1")
const myObj = {
    name:"Suparna",
    age:24,
    [mySym]:"MyKet1"
}

console.log(myObj[mySym])

myObj.greeting = function(){
    console.log(`Happy New Year ${this.name}`)
}

//console.log(myObj.greeting())



