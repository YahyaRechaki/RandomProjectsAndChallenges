function createPhoneNumber(numbers){
    const codeNumber = [];
    codeNumber[0] = numbers[0];
    codeNumber[1] = numbers[1];
    codeNumber[2] = numbers[2];
    for (let i = 0; i < codeNumber.length; i++) {
        const element = codeNumber[i];
        console.log(element)
    }
}

const numbers = [1414, 2142424, 468, 556];

createPhoneNumber(numbers)

