results = Array.new

(1..1000).each do |num|
    if num % 3 == 0
        results << num
    elsif num % 5 == 0
        results << num
    else
    end
end

puts results.inject{|sum,x| sum + x }




