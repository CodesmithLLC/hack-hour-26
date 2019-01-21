// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */


function numToWords(num) {
    //convert integer to string
    let stringNumber = num.toString();
    //declare a var to store string to return
    let numbersAsWords = "";

    //use objects to store numbers as words
    const ones = {
        "0": "Zero",
        "1": "One",
        "2": "Two",
        "3": "Three",
        "4": "Four",
        "5": "Five",
        "6": "Six",
        "7": "Seven",
        "8": "Eight",
        "9": "Nine"
    }

    const teens = {
        "10": "Ten",
        "11": "Eleven",
        "12": "Twelve",
        "13": "Thirteen",
        "14": "Fourteen",
        "15": "Fifteen",
        "16": "Sixteen",
        '17': "Seventeen",
        "18": "Eighteen",
        "19": "Nineteen",
    }

    const tens = {
        "20": "Twenty",
        "30": "Thirty",
        "40": "Forty",
        "50": "Fifty",
        "60": "Sixty",
        "70": "Seventy",
        "80": "Eighty",
        "90": "Ninety"
    }

    const length = {
        3: "hundred",
        4: "thousand",
        7: "million",

        1000: "thousand",
        1000000: million,
        1000000000: trillion,
    }

    //use a for loop starting at 0 and going to end of word


    for (let i = 0; i <= stringNumber.length; i++); {
        if stringNumber.length > 
        


    }

    if (stringNumber[stringNumber.length - 2 === "1"]) {
        numbersAsWords += teens[stringNumber[stringNumber.length - 2] + stringNumber[stringNumber.length - 1]]
    } else {
        numbersAsWords += teens[stringNumber[stringNumber.length - 1]]
    }



    




    



}

module.exports = numToWords;
