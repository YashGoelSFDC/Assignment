//Take a sentence as an input and reverse every word in that sentence. 
//Example - This is a sunny day > shiT si a ynnus yad.


const string = "This is a sunny day";

function reverseString(str)
{
    return str.split("").reverse().join("");
}

console.log(reverseString(string));