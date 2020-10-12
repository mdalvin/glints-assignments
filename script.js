
// Assignment III

// No. 1 : Make a program that can give information about days.

console.log("=== No. 1 : About days. ===");

let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]

let today = "Tuesday"

for (let i = 0; i <= days.length; i++) {
    if (today === days[i]) {
        if (today === days[6]){
            console.log(`Today is ${days[6]}.`);
            console.log(`Yesterday was ${days[5]}.`);
            console.log(`Tomorrow will be ${days[0]}.`);
        } else {
            console.log(`Today is ${days[i]}.`);
            console.log(`Yesterday was ${days[i-1]}.`);
            console.log(`Tomorrow will be ${days[i+1]}.`);        }
    }

}

// No. 1 : end

// No. 2 : Grading based on score.

console.log("=== No.2 : Grading based on score. === ");

function scoreCheck(score){
    if (score >= 90 && score <= 100){
        console.log(`Your score is ${score}. You got an 'A'.`)
    } else if (score >= 75 && score <= 89) {
        console.log(`Your score is ${score}. You got a 'B'.`)
    } else if (score >= 60 && score <= 74) {
        console.log(`Your score is ${score}. You got a 'C'.`)
    } else if (score >= 50 && score <= 59) {
        console.log(`Your score is ${score}. You got a 'D'.`)
    } else {
        console.log(`Your score is ${score}. You have failed. Try harder next time!.`)
    }
}

// No. 2 : end

// No. 3 and 4 : Looping of odd and even number (negative number as well).

console.log("=== No.3 and 4 : Looping of odd and even number. ===")    

function numberOddEven(number){
    if (number % 2 === 0){
        if (number < 0){
            for (let i = number; i <= 0; i+=2){
                console.log(i);
            } 
        } else {
            for (let i = 2; i <= number; i+=2){
                console.log(i);}
        }
    } else if (number < 0){
        for (let i = number; i <= 0; i+=2){
            console.log(i);
        }
    } else {
        for (let i = 1; i <= number; i+=2){
            console.log(i);
        }
    }
}

// No. 3 and 4 : end