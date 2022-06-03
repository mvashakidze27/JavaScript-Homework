const primes = [];

for(let i = 2; i <= 10; i++) {
    let isPrime = true;
    for(let j = 2; j < i; j++) {
        if(i % j === 0) isPrime = false;
    }
    if(isPrime) primes.push(i);
}

console.log(primes)