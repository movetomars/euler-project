
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

fibonacci();
