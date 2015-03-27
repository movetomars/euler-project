var massive = 600851475143;
var factor = 0;

function isPrime(k){
    if(k < 2 || k != Math.round(k)) {
        return false;
    }

    var isPrime = true;

    for(var i = 2; i <= Math.sqrt(k); i++) {
        if(k % i == 0) {
            isPrime = false;
        }
    }

    return isPrime;
}

for(var j = 2; j < 1000; j++) {
    if(massive % j == 0 && isPrime == true) {
        factor = j;
    }

    alert(factor);
}