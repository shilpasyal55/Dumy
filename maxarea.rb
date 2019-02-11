class MaxareaTriangle
    
    def findArea(circleRadius,index)
         triangleArea = (Math.sqrt(3) * circleRadius * circleRadius * 3) / 4
         puts "Case ##{index}: #{triangleArea.round(6)}"
    end
end

circle = MaxareaTriangle.new
testcases = gets.chomp.to_i
if testcases >= 1 && testcases <= 20
    radius = []
    testcases.times do
        r = gets.chomp
        radius << r
    end
    radius.each_with_index do |r,i|
        circle.findArea(r.to_f,i+1)
    end
end
