//👉 Write your tests below here:

import { isChristmasCancelled } from "./main.js"

describe("isChristmasCancelled function", ()=>{
    test("when given a string with less than four Santas, isChristmasCancelled function will return 'No, Ho, Ho :( because Christmas has been cancelled....'", ()=>{
        //arrange
        const str = "TXhis is ourX Christmas striXng"
        const expected = 'No, Ho, Ho :( because Christmas has been cancelled....'
        //act 
        const actual = isChristmasCancelled(str)
        // assert
        expect(actual).toBe(expected)
    })

    test("when given a string with less than twelve Santas, isChristmasCancelled function will return 'Santa Claus is coming... so still be good!'", ()=>{
        //arrange
        const str = "TXXhisX isX ourXXX ChristXmas striXXng"
        const expected = 'Santa Claus is coming... so still be good!'
        //act 
        const actual = isChristmasCancelled(str)
        // assert
        expect(actual).toBe(expected)
    })

    test("when given a string with exactly thirteen Santas, isChristmasCancelled function will return 'Merry Christmas, you can have a mulled wine!'", ()=>{
        //arrange
        const str = "TXhiXs iXs ourXXXXX CXhristXmXaXs striXng"
        const expected = 'Merry Christmas, you can have a mulled wine!'
        //act 
        const actual = isChristmasCancelled(str)
        // assert
        expect(actual).toBe(expected)
    })
})


