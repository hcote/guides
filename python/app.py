# type python3 || python in terminal to get python interpreter
# run file with python3 file_name
# variables are stored in memory
# python is an interpreted language

# writing shapes
print('   /|')
print('  / |')
print(' /  |')
print('/___|')

# strings
phrase = 'hello world'
print(phrase.lower())
print(phrase.upper())
print(phrase.isupper()) # returns boolean
print(phrase.islower()) # returns boolean
print(len(phrase)) # grab length of variable
print(phrase[2]) # returns 'l'
print(phrase.index('w')) # returns index of argument passed through
print(phrase.replace('world', 'there'))
print(str(1) + 'is my favorite number') # need to turn numbers to strings in order to print in a string

# numbers
# importing to use more math functions (starting below round() method)
from math import *
num = 10
neg_num = -2
print(abs(neg_num)) # get absolute value
print(pow(num, 2)) # number, power to take it to { 10^2 }
print(max(num, neg_num)) # returns the higher number
print(min(num, neg_num)) # returns the lowerst number
print(round(3.14)) # returns number rounded up or down
print(floor(3.7)) # returns 3
print(ceil(3.1)) # returns 4
print(sqrt(36)) # returns 6

# capturing user input
name = input('Whats your name? ')
age = input('Whats your age? ')
print('Hello ' + name + '! You are ' + age + ' years old.')

# building calculator
num_one = input('First number: ')
num_two = input('Second number: ')
# need to convert to ints (user input auto converted to string)
# error thrown if trying to turn decimal to int()
# result = int(num_one) + int(num_two)
result = float(num_one) + float(num_two)
print(result)

# mad libs game
color = input('Enter a color: ')
plural_noun = input('Enter a plural noun: ')
celebrity = input('Enter a celebrity: ')

print('Roses are ' + color)
print(plural_noun + ' are blue')
print('I love ' + celebrity)

# lists (arrays)
people = ['john', 'tony', 'jim', 'oscar', 'tim', 'james']
people[4] = 'karen'
print(people[-1]) # use negatives to start at end of list (not zero indexed from the reverse)
# ['james']
print(people[3:]) # returns items starting at index 3 to the end of the array
# ['oscar', 'tim', 'james']
print(people[2:4]) # returns elements starting at index 2 up to but not including 4
# ['jim', 'oscar']

# list functions
numbers = [1, 5, 8, 13, 22, 3, 8, 9, 33]
friends.extend(numbers) # concatenates two arrays into one
friends.append('keith') # add item to end of list
friends.insert(2, 'sam') # at index 2, 'sam' will be inserted
friends.remove('tony')
friends.clear() # empties list
friends.pop() # remove last element
friends.index('kevin') # returns an error bc not in list
numbers.count(8) # tells you how many times that value is in list
numbers.sort() # put in alphabetical order / low-high numbers
numbers.reverse()
numbers_two = numbers.copy() # copy list

list(range(1, 6))
# => [1, 2, 3, 4, 5]

# tuples
# essentially same as list, but are immutable
coordinates = (3, 6)
print(coordinates[0]) # returns 3

# functions
def say_hello(name, age):
    print('hello ' + name + ', ' + str(age))

say_hello('hunter', 25)

# return statements
# NEVER able to put code after return statement (in JS too)
def cubed(num):
    return pow(num, 3)

result = cubed(4)
print(result)

# if statements
is_male = True
is_tall = True

if is_male or is_tall:
    print('you are male or tall')
else:
    print('you are female')

if is_male and is_tall:
    print('you are male and tall')
elif is_male and not (is_tall):
    print('you are male and not tall')
elif not (is_male) and is_tall:
    print('you are not male but tall')
else:
    print('you are not male and not tall')

# comparisons
# == != checks if values are equal
def max_num(one, two, three):
    if one >= two and one >= three:
        return one
    elif two >= one and two >= three:
        return two
    else:
        return three

print(max_num(4, 9, 6))

# better calculator
num_one = float(input('First number: '))
op = input('Operator: ')
num_two = float(input('Second number: '))

if op == '+':
    print(num_one + num_two)
elif op == '-':
    print(num_one - num_two)
elif op == '/':
    print(num_one / num_two)
elif op == '*':
    print(num_one * num_two)
else:
    print('Invalid Operator')

# dictionary (objects)
# keys MUST be unique
# A DICTIONARY IS A HASH TABLE
month_conversions = {
    'Jan': 'January',
    'Feb': 'February',
    3: 'March',
    'Apr': 'April',
    'May': 'May',
    'Jun': 'June',
    'Jul': 'July',
    8: 'August',
    'Sept': 'September',
    'Oct': 'October',
    'Nov': 'November',
    'Dec': 'December'
}

print(month_conversions['Jan']) # returns value of the key referenced
print(month_conversions.get(3, 'Default return if key isnt found'))

# while loop
# i++ does not exist in python
i = 1
while i <= 10:
    print(i)
    i += 1

# GAME using while loop
# three guesses to guess secret word
i = 1
secret  = 'llama'
guess = ''

while guess != secret and i <= 3:
    guess = input('Guess attempt ' + str(i) + ': ')
    i += 1

if (guess == secret):
    print('You got it!')
else:
    print('You lose.')

# for loop
word = 'llamas'
for letter in word:
    print(letter)

for index in range(10): # prints numbers up to but NOT INCLUDING 10
    print(index)

for index in range(3, 10): # prints 3, 4, 5, 6, 7, 8, 9
    print(index)

array = ['tyler', 9, 'hello']
for element in array:
    print(element)
# ||
for i in range(len(array)):
    print(array[i])

def expo(base, power):
    return base**power

replace vowels in phrase with 'g'
phrase = 'learning python'
def translate(phrase):
    translation = ''
    for letter in phrase:
        if letter.lower() in 'aeiou': # if letter is any of these characters...
            translation = translation + 'g'
        else:
            translation = translation + letter
    return translation

print(translate(input('Enter phrase to translate: ')))

# try/except => handles the error without causing the app to break
try:
    number = int(input("Enter a number: "))
    print(number)
except ValueError as err: # you can save the error as a variable
    print('Invalid Input')
    print(err)

# read files
open('file_path', 'w') # w = write_file
open('file_path', 'a') # a = append_file (but not change)
open('file_path', 'r+') # r+ = read_file & write_file
employee_file = open('employees.txt', 'r') # r = read_file
print(employee_file.readable()) # returns boolean bc we set it to read mode (with 'r')
print(employee_file.read()) # prints file to console
print(employee_file.readline()) # prints first line
print(employee_file.readlines()[0]) # prints each line as an array element
for employee in employee_file.readlines(): # loop and prints each line
    print(employee)

# appending files (careful - permanent)
employee_file = open('employees.txt', 'a')
# if you used 'w' it would empty the file and just write what your write below
# if you change the file name, it will create it and write what you write
employee_file.write('\nToby - Human Resources')

employee_file.close() # always close the file when you're done

# importing files
import file_name
print(file_name.available_functions())
# google python modules

# classes (the template) and objects (the actual students)
class Student:
    # define properties in the __init__ method
    def __init__(self, name, major, gpa, is_senior):
        self.name = name
        self.major = major
        self.gpa = gpa
        self.is_senior = is_senior

freshman = Student('Jon', 'Econ', 3.1, False)

# print(freshman.name)

# class inheritance
class Chef:
    # define methods normally
    def make_chicken(self):
        print('chef made chicken')
    def make_salad(self):
        print('chef made salad')

class ChineseChef(Chef):
    def make_fried_rice(self):
        print('made fried rice')

ChineseChef().make_salad()


# Interview Code -------------------
# know for loops, while loops inside and out

# Fibinacci Sequence
a, b = 0, 1
for i in xrange(0, 10):
    print(a)
    a, b = b, a + b

# iterating over different data types
# tuples and lists are the same

my_tuple = (1, 3, 5, 6, 6)
my_list = [3, 6, 1, 56]

for i in my_tuple:
    print(i)

# --

my_dict = {
    'name': 'John',
    'age': '25',
    'city': 'SF'
}

for key, val in my_dict.iterateitems():
    print('My {} is {}').format(key, val)

# --

my_set = {2, 4, 5, 7, 8, 0}

for i in my_set:
    print(i)

# --

# list comprehensions
my_list = [1, 2, 3, 4, 5]
    # task: return list with the numbers squared
squares = [num*num for num in my_list]
    print(squares)

# generators (yield is the keyword) - more advanced
# refactoring fibinacci sequence from above
def fib(num):
    a, b = 0, 1
    for i in range(0, num):
        yield "{}: {}".format(i+1, a)
        a, b = b, a + b
    
for item in fib(10):
    print(item)

# xrange v range
# xrange goes one number at a time
# range puts the entire range in memory while using it
