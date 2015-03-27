var massive = 600851475143;
var factor = 0;

for(i = 2; i < 1000; i++) {
    if(massive % i == 0 && isPrime(i)) {
        factor = i;
    }

    alert(factor);
}