
var first = function() {
    var sum = 0;
    for(i=1; i < 1000; i++) {
        if(i % 3 == 0) {
            sum += i;
        } else if(i % 5 == 0) {
            sum += i;
        }
    }

    return sum;

}

first();
