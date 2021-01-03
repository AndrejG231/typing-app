import getRandomText from './textData/getRandomText';

const pythonBasicsText = `\
To print a string in Python 3:
print("Hello World")
Python uses indentation for blocks:
if a:
    print("a is True")
You do not need to declare variables before using them.
myint = 7
mystring = "Hello"
myfloat = 7.0
You can use logical operators to combine these:
mysentence = "Hello" + "World"
manygreetings = "Hello" * 3
^^HelloHelloHello
mysum = 2 + 3
Or combine using variables:
a = 10
b = 31
c = a + b
^^41
word1 = "My"
word2 = "sentence."
sentence = word1 + word2
^^My sentence.
Lists are similiar to arrays, can contain infinite number of elements.
Elements can be any datatype.
mylist = ["Make", "a", "sentence"]
Each of these have specific index, starting from 0.
mylist[0]
^^returns "Make"
mylist[1:3]
^^returns ["a", "sentence"]
Add an element to last position:
mylist.append("variable")
Remove from last element:
mylist.pop()
Insert to specific index:
index = 2
mylist.insert(index, "inserted_element")
Remove at specific index:
mylist.pop(index)`

const pythonStringConstants = `\
The constants defined in this module are:
string.ascii_letters
The concatenation of the ascii_lowercase and ascii_uppercase constants described below. This value is not locale-dependent.
string.ascii_lowercase
The lowercase letters 'abcdefghijklmnopqrstuvwxyz'. This value is not locale-dependent and will not change.
string.ascii_uppercase
The uppercase letters 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'. This value is not locale-dependent and will not change.
string.digits
The string '0123456789'.
string.hexdigits
The string '0123456789abcdefABCDEF'.
string.octdigits
The string '01234567'.
string.punctuation
String of ASCII characters which are considered punctuation characters in the C locale: !"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~.
string.printable
String of ASCII characters which are considered printable. This is a combination of digits, ascii_letters, punctuation, and whitespace.
string.whitespace
A string containing all ASCII characters that are considered whitespace. This includes the characters space, tab, linefeed, return, formfeed, and vertical tab.`

const pythonNumericTypes = `\
There are three distinct numeric types: integers, floating point numbers, and complex numbers. In addition, Booleans are a subtype of integers. Integers have unlimited precision. Floating point numbers are usually implemented using double in C; information about the precision and internal representation of floating point numbers for the machine on which your program is running is available in sys.float_info. Complex numbers have a real and imaginary part, which are each a floating point number. To extract these parts from a complex number z, use z.real and z.imag. (The standard library includes the additional numeric types fractions.Fraction, for rationals, and decimal.Decimal, for floating-point numbers with user-definable precision.)
Numbers are created by numeric literals or as the result of built-in functions and operators. Unadorned integer literals (including hex, octal and binary numbers) yield integers. Numeric literals containing a decimal point or an exponent sign yield floating point numbers. Appending 'j' or 'J' to a numeric literal yields an imaginary number (a complex number with a zero real part) which you can add to an integer or float to get a complex number with real and imaginary parts.
Python fully supports mixed arithmetic: when a binary arithmetic operator has operands of different numeric types, the operand with the “narrower” type is widened to that of the other, where integer is narrower than floating point, which is narrower than complex. A comparison between numbers of different types behaves as though the exact values of those numbers were being compared. 2
The constructors int(), float(), and complex() can be used to produce numbers of a specific type.
All numeric types (except complex) support the following operations (for priorities of the operations, see Operator precedence):`

const pythonTuples = `\
Create a Tuple:
thistuple = ("apple", "banana", "cherry")
Tuple items are ordered, unchangeable, and allow duplicate values.
Tuples are indexed, starting 0.
Since tuple are indexed, tuples can have items with the same value:
thistuple = ("apple", "banana", "cherry", "apple", "cherry")
To determine how many items a tuple has, use the len() function:
print(len(thistuple))
One item tuple, you need to add the commma:
thistuple = ("apple",)
Print the second item in the tuple:
thistuple = ("apple", "banana", "cherry")
print(thistuple[1])
Print the last item of the tuple:
print(thistuple[-1])
Return the third, fourth, and fifth item:
print(thistuple[2:5])
Check if item exist:
print("apple" in thistuple)
^^Returns true
Extract the values back into variables:
(a, b, c) = thistuple
Add * for the rest:
(a, b*) = thistuple
Iterate through the items:
for x in thistuple
Join tuples:
tuple3 = tuple1 + tuple2
Methods: 
count(value) => Count of occurences of value.
index(value) => returns first index of value in tuple.`

const pythonConditions = `\
Python supports the usual logical conditions from mathematics:
Equals: a == b
Not Equals: a != b
Less than: a < b
Less than or equal to: a <= b
Greater than: a > b
Greater than or equal to: a >= b
If statement:
if b > a:
    do something...
If statement calls needs to be indented 4 spaces.
Elif => "if the previous conditions were not true"
if b > a:
    print("b is greater than a")
elif a == b:
    print("a and b are equal")
Else => "if no condition was true"
if b > a:
    print("b is greater than a")
elif a == b:
    print("a and b are equal")
else:
    print("a is greater than b")`

const pythonLoops = `\
Python has two primitive loop commands:
while loops
for loops
While loop we can execute a set of statements as long as a condition is true.
i = 0
while i < 3:
    print(i)
    i = i + 1
^^prints 0,1,2
For loop is used for iterating over a sequence.
Sequence can be a list, a tuple, a dictionary, a set, or a string.
mylist = [0,1,2]
for i in mylist:
    print(i)
^^prints 0,1,2
Break statement exits the loop before finish.
Continue statement stops executing code and continues to next iteration.`
const Levels = {
    wordTyping: {
        topWords100 : {
            id: 0,
            name: 'Top English Words',
            description: '100 characters long practice session.',
            text: getRandomText('topEnglishWords', 100),
        },
        topWords200 : {
            id: 1,
            name: 'Top English Words',
            description: '200 characters long practice session.',
            text: getRandomText('topEnglishWords', 200),
        },
        topWords500 : {
            id: 2,
            name: 'Top English Words',
            description: '500 characters long practice session.',
            text: getRandomText('topEnglishWords', 500),
        },
        topWords1000 : {
            id: 3,
            name: 'Top English Words',
            description: '1000 characters long practice session.',
            text: getRandomText('topEnglishWords', 1000),
        },
        topWords2000 : {
            id: 4,
            name: 'Top English Words',
            description: '2000 characters long practice session.',
            text: getRandomText('topEnglishWords', 2000),
        },
    },
    codeTyping: {
        pythonBasics : {
            id: 0,
            name: 'Python Basics',
            description: 'Python is a very simple language, this practise provides some basic python syntax.',
            text: pythonBasicsText
        },
        pythonStringConstants : {
            id: 1,
            name: 'Python String Constants',
            description: 'Overview of some advanced Python string constants.',
            text: pythonStringConstants
        },
        pythonNumericTypes : {
            id: 2,
            name: 'Python Numeric Types',
            description: 'Explanation of Python\'s basic numeric types.',
            text: pythonNumericTypes
        },
        pythonConditions : {
            id: 3,
            name: 'Python Conditions',
            description: 'Learn how to use python conditions.',
            text: pythonConditions
        },
        pythonTuples : {
            id: 4,
            name: 'Python Tuples',
            description: 'Tuples are used to store multiple items in a single variable. Here are is how you use them.',
            text: pythonTuples
        },
        pythonLoops : {
            id: 5,
            name: 'Python Loops',
            description: 'Explained basic Python loops.',
            text: pythonLoops
        }}
};

export default Levels;