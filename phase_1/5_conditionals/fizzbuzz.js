const FizzBuzz = (number) => {
    if (number % 15 === 0) {return 'FizzBuzz';}
    else if (number % 5 === 0) {return 'Buzz';}
    else if (number % 3 === 0) {return 'Fizz';}
    else {return number;}
    };

    const FizzBuzzUntil = (num) => {
        for (let i = 1; i <= num; i++) {console.log(FizzBuzz(i));}
    };

    console.log(FizzBuzzUntil(15));
