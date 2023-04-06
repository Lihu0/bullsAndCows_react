const hasTwoIdenticalDigits = (num) => {
    const digits = num.toString().split('');
    
    // check if there are two identical digits in the number
    for (let i = 0; i < digits.length - 1; i++) {
      if (digits.slice(i + 1).includes(digits[i])) {
        // if there are two identical digits - return true
        return true;
      }
    }
    
    return false;
};
  
const rndNum = (numOfDig) => {
    const min = 10 ** (numOfDig - 1);
    const max = (10 ** numOfDig) - 1;

    let rnd;

    // generate a random number with the specified number of digits wntil it is legal
    do {
        rnd = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (hasTwoIdenticalDigits(rnd));

    return rnd;
};

export default rndNum;