const bullsAndCowsCounter = (secretNumber, userNumber) => {
    let bulls = 0;
    let cows = 0;

    // make sure that both numbers are strings, if not - convert them
    secretNumber = secretNumber.toString();
    userNumber = userNumber.toString();
    
    for (let i = 0; i < secretNumber.length; i++) {
        // if the current digit of the secret number is equal to the current digit of the user number - increase bulls counter
        if (secretNumber[i] === userNumber[i]) {
            bulls++;
        }
        // if the current digit of the secret number is included in the user number - increase cows counter
        else if (secretNumber.includes(userNumber[i])) {
            cows++;
        }
    }
    
    return { bulls, cows };
};

export default bullsAndCowsCounter;
