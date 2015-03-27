
var fibonacci = function() {
    var total = 0;
    var first = 1;
    var second = 2;
    var third = 0;

    while(first < 4000000) {
        if(first % 2 == 0) {
            total += first;
        }
        third = first + second;
        first = second;
        second = third;
    }

    return total;
}

<<<<<<< HEAD
fibonacci();
=======
fibonacci();
>>>>>>> 8271163997e96b4f9fe04d53556f20731a1044ea
