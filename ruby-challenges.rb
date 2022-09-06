# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.
# From Developer Francisco
beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# From Developer Francisco
def words_with_letter (array, letter)
  array.filter do |values| values.include?(letter)
  end
end
p words_with_letter(beverages_array, letter_o)
p words_with_letter(beverages_array, letter_t)


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'
# From Developer Cathrine
us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Vermont'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Vermont', 'Washington']
# .values takes the values of each pair
# .flatten combines the arrays
#.sort for alphabetical order
def combined_array (array)
  array.values.flatten.sort
end

p combined_array(us_states)

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
# From Developer Cliff
# psuedocode:
# create a class called bike, use def initiallize to decide which data is entered or needed to enter
# use set and get first then use attr_accessor once we know it works and everything looks good
# do a test run with a trek. 
# class Bike
#     def initialize(model)
#         @model = model
#         @wheels = 2
#         @current_speed = 0
#     end
#     def set_model(model)
#         @model= model
#     end
#     def get_model
#         @model
#     end
#     def set_wheels(wheels)
#         @wheels = wheels
#     end
#     def get_wheels
#         @wheels
#     end
#     def set_current_speed(current_speed)
#         @current_speed = current_speed
#     end
#     def get_current_speed
#         @current_speed
#     end
#     def get_info
#         p "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
#     end

# end
# Trek = Bike.new('Trek')
# Trek.get_info

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
# class Bike
#     attr_accessor :model, :wheels, :current_speed
#     def initialize(model)
#         @model = model
#         @wheels = 2
#         @current_speed = 0
#     end
#     def get_info
#         p "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
#     end

# end
# Trek = Bike.new('Trek')
# Trek.get_info

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# to add the speed chane i will create  methods with def/end and set it to @current_speed += or -=1

class Bike
    attr_accessor :model, :wheels, :current_speed
    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    def pedal_faster(number)
        @current_speed += number
    end
    def brake(number)
        if ((@current_speed - number) <= 0)
            @current_speed = 0
        else 
            @current_speed -= number
        end
    end
    def get_info
        p "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end

end
Trek = Bike.new('Trek')
Trek.get_info
#     # =>"The Trek bike has 2 wheels and is going 0 mph."
Trek.pedal_faster(10)
#     # =>"The Trek bike has 2 wheels and is going 10 mph."
Trek.pedal_faster(18)
#     # =>"The Trek bike has 2 wheels and is going 28 mph."
Trek.brake(5)
#     # =>"The Trek bike has 2 wheels and is going 23 mph."
Trek.brake(25)
#     # =>"The Trek bike has 2 wheels and is going 0 mph."
Trek.pedal_faster(18)
#     # had to make sure it went back up again:)
#     # =>"The Trek bike has 2 wheels and is going 18 mph."
Trek.get_info

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0