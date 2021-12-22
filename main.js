/* 
👉 Write your kata here!

Is Christmas cancelled???

Count up the number of Xs in a given string. 

If there's less than 4 (X) return 'No, Ho, Ho :( because Christmas has been cancelled....'

If there's between 4 - 12 (X) return 'Santa Claus is coming... so still be good!'

If there's 13 (X) return 'Merry Christmas, you can have a mulled wine'

There is never more than 13 (X) so that's the max number you need to worry about.

"TXhis is ourX Christmas striXng" --> 'No, Ho, Ho :( because Christmas has been cancelled....'
"TXXhisX isX ourXXX ChristXmas striXXng" --> 'Santa Claus is coming... so still be good!';
"XTXXhisX isX ourXXX ChristXXmas stXriXXng" --> 'Merry Christmas, you can have a mulled wine';
*/


//👉 Write the function your CodeWarriors will start with below here:
// function isChristmasCancelled(str){
//     //...
//   }
//-----------------------------


export function isChristmasCancelled(str) {
  const regex = /[Xx]/g;
  let array = str.match(regex);
  let count = array.length;
  
//   array.forEach((letter)=>{
//     if (letter === "X") {
//       count++
//     }
//   })

  if (count < 4 && count > 0) {
    return "No, Ho, Ho :( because Christmas has been cancelled...."
  } else if (count > 4 && count <= 12) {
    return "Santa Claus is coming... so still be good!"
  } else if (count = 13) {
    return "Merry Christmas, you can have a mulled wine!"
  }
}

