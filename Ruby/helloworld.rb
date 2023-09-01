# frozen_string_literal: true

def hello(name)
  if name == 'demi'
    puts 'omg you are so cool'
  else
    "hello #{name}!"
  end
end

def add(one, two)
  one + two
end

puts hello('hayley')
puts add(4, 6)

# notes
# if name is demi then output "omg you are so cool"
# otherwise just output "hello <name>"
