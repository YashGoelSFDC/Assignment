//Take a sentence as an input and reverse every word in that sentence. 
//Example - This is a sunny day > shiT si a ynnus yad.

function reverseString(s){
    let rev = "";
    for(let i=(s.length)-1; i>=0; i--){
        let ch = s[i];
        rev += ch;
    }
    return rev;
}

const str = "This is a sunny day";
console.log(reverseString(str));
