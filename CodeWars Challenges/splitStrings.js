function solution (str){
    var lengthOfString = (str.length)%2;
    if (lengthOfString == 0) {
        console.log("divisible by 2");
        for (let i = 0; i < str.length; i++) {
            const element = str[i];
            if ((element % 2) == 0) {
                
            } else {
                
            }
        }
    } else {
        console.log("NOT divisible by 2");
    }
}
solution("aaaa");

function isOdd(num) { return num & 1; };

function solution(str){
let arr = str.match(/.{1,2}/g);


if (str.length == 0) {
    return []
} else if(isOdd(str.length) == 1) {
    let x = str + "_"
    return arr = x.match(/.{1,2}/g);
} else {
    return arr;
}

}


Refactored 

function solution(str) {
    if (str.length == 0) {
    return []
    };
    console.log(typeof(str.length % 2));
    // console.log(str.length % 2);
    //     console.log(str.length % 2)
    console.log ((str.length % 2 ? str + '_' : str).match(/../g));
}

solution("yahyaa");


// Solution

function solution(str){
    if(str.length == 0)
        return [];
    else
        return(((str.length%2) ? str + '_' : str).match(/../g))
}

solution("abcdefg");