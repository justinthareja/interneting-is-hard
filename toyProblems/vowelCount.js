// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// My Solution
function vowelCount(string = []) {
    let counter = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const letters = string.split('');

    letters.forEach(letter => {
        vowels.forEach(vowel => {
            if (letter === vowel) {
                counter++;
            }
        });
    });

    return counter;
}  

console.log(vowelCount('heyo maggots'), 'should equal 4');
console.log(vowelCount('looooooong word including spaces'), 'should equal 13');