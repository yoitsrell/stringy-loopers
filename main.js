// # Setup
// For this exercise, we don't need to run npm test. We will only use the command node main.js in the terminal to see the results of our functions.


// 0. Once again, write a function that accepts a number and prints out a banner with the words "Challenge" and the number in it. Use string interpolation if you want! **Call it before calling each function. Don't call it again if you need to print twice to test a function.**
function banner(n){
    console.log("##### " + 'Challenge ' + n + ' #####')
}
// 1. Write a function that prints out only the vowels from a given string. Do not use regular expressions ("regex"). Now call it with "Regular expressions are for term 2.". You should see an "e" printed, followed by a "u", followed by an "a", and so on.
banner(1)

function vowels(vowel){
    for(i=0; i<=vowel.length; i++)
    if(vowel[i]==="a"||vowel[i]==="e"||vowel==="i"||vowel==="o"||vowel==="u"||vowel==="y"){
    console.log(vowel[i])
    }
}
vowels("Regular expressions are for term 2.")
// 2. Write a function that prints out the first 5 vowels from the given string. Continue to not use regexes. Now call it with "Regular expressions are for term 2.". You should see an "e" printed, followed by a "u", followed by an "a", followed by an "e", followed by another "e", and then nothing else. Now call it again with "Hello!" You should see only an "e" and an "o" print.
banner(2)
// function first5(five){
//     let stop = 0
//     for(i=0; i <= five.length; i++){
//     if(first5((five[i]==="a"||five[i]==="e"||five[i]==="i"||five[i]==="o"||five[i]==="u"||five[i]==="y")) && (stop < 5)){
//         console.log(five[i])
//         stop = stop + 1
//     }
// }
// }

// first5("Regular expressions are for term 2.")
// first5("Hello")
// 3. Write a function that prints out every third character, _without_ examining every character. In other words, you may _not_ increment your index by one and decide whether to print based on the result of a modulus operation on that index. (A standard solution for this.). Now call it with "I am the alfalfa and the omelette." You should see "a", followed by "t", followed by a space, and so on. An "e" should be the last thing printed, with no `undefined` values showing up.
banner(3)
function thirdChar(third){
    for(i=2; i< third.length; i+= 3){
        console.log(third[i])
    }
}
thirdChar("I am the alfalfa and the omelette.")
// 4. Write a function that prints out the first four characters after the given index in the given string, or, if there are fewer characters remaining from, prints only the remaining ones. Now call it with 'Oh hi, I didn't see you there. Welcome.' and `4` as your parameters. You should see 'i', followed by ',', followed by a space, followed by an 'I'. Now call it again with 'Oh hi, I didn't see you there. Welcome.' and `38` as your parameters. You should 'm', 'e', and '.' printed, and no fourth printing.
banner(4)

function fourChar(four){
    let stop = 0
    for(i = 0; i< four.length ;i++){
        if(stop <= 4){
            console.log(four[i])
            stop = stop + 1
        }
    }
}
fourChar('Oh hi, I didn/t see you there. Welcome.')
// 5. Write a function that prints out the index of every `u` it finds in the given string. Do not use `indexOf`. Now call it with `'You picked the wrong house, bub.'`. You should see `2`, `23`, and `29` printed out. 
banner(5)
function uLet(letter){
for (i=0; i<letter.length; i++){
    if(letter[i] === "u"){
        console.log(i)
    }
}
}
uLet("You picked the wrong house, bub.")
//  6. Write a function that prints out the first index of the letter `u` in the given string. Do not use `indexOf`. Now call it with `'You picked the wrong house, bub.'` You should see the number `2` printed, and only that.
banner(6)
// function take1st(letter){
// let firstU = 0
// for (i < 0; i < letter.length; i++){
//     if (letter[i] === "u" && firstU === 1){
//         console.log(letter[i])
//         firstU = firstU + 1
//     }
// }
// }  
//take1st("You picked the wroung house, bub.")
// 7. Write a function that prints out the first index of the letter `u` in the given string, with a `-1` printed if it doesn't find it. Do not use `indexOf`. Now call it with `'You picked the wrong house, bub.'` You should see the number `2` printed, and only that. Now call it with `"I'm Canadian."` You should see `-1` print out.
banner(7)