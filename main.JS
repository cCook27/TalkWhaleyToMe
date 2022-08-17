var input = 'turpentine and turtles';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

// I don't want there to be any missed vowels because of capitals. made input lower case.
for(let i = 0; i < input.length; i++){
    input = input.toLowerCase()
    const currentLetter = input[i];

    if(currentLetter === 'e' || currentLetter === 'u' ){
        resultArray.push(currentLetter);
    }
        for(let j = 0; j < vowels.length; j++){
            const currentVowel = vowels[j];

            if(currentLetter === currentVowel){
                resultArray.push(currentLetter);
        }
    }
}

var resultString = resultArray.join('').toUpperCase();

console.log(resultString);
