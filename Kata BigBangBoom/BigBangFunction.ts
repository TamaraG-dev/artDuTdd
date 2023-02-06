function BigBang(number: number) : string {
   var result: string = "";

   if(number %5 === 0)
   {
      result = isEven(number, result, 'Big')
   }
   if(number %7 === 0)
   {
      result = isEven(number, result, 'Bang')
   }
   if(number %11 === 0)
   {
      result = isEven(number, result, 'Boom')
   }
   if(result === "")
   {
      result = number.toString()
   }

   return result
}

function isEven(number: number, currentString: string, action: string) : string {
   if(number %2 === 0) {
      currentString = action + currentString
   } else {
      currentString += action
   }   

   return currentString
}

console.log(BigBang(1) === '1'? true : false) 
console.log(BigBang(2) === '2'? true : false)
console.log(BigBang(5) === 'Big'? true : false)
console.log(BigBang(7) === 'Bang'? true : false)
console.log(BigBang(11) === 'Boom'? true : false)
console.log(BigBang(22) === 'Boom'? true : false)
console.log(BigBang(35) === 'BigBang'? true : false)
console.log(BigBang(70) === 'BangBig'? true : false)
console.log(BigBang(55) === 'BigBoom'? true : false)
console.log(BigBang(110) === 'BoomBig'? true : false)
console.log(BigBang(77) === 'BangBoom'? true : false)
console.log(BigBang(385) === 'BigBangBoom'? true : false)
console.log(BigBang(770) === 'BoomBangBig'? true : false)