

puts (1..32).inject([0,1]) {|arr, i| (arr << arr[-1] + arr[-2] if arr[-1] + arr[-2] <= 4000000) || arr}.inject(0) {|total, i| total += i.even? ? i : 0}



