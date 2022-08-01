# Block 36 - Algorithms

# What is an algorithm?

An algorithm is a defined process that “solves a problem”. It takes an input and has an expected behavior that produces an output.

<details>
<summary>Order Complexity</summary>

## Order Complexity (Time)

The order complexity is how an algorithm processing time scales, basically how the input can affect the processing time.

### Linear Order Function - O(n)

```python
def sum_array(numbers):
    sum = 0
    for number in numbers:
        sum += number

    return sum
```

The example above is a linear function. The performance depends on the size of `numbers` array. **It is called linear, because the Processing Time essentially doubles for each extra number in the array.**

## Space Complexity

The space complexity is how the space occupied by the code scales. So in the example above (`sum_array`) the space complexity is **constant O(1)**. Doesn’t matter the input, the output is always a single number.

### Linear Space Function - O(n)

```python
def squared_array(numbers):
    array_of_squares = []
    for number in numbers:
        array_of_squares.append(number * number)

    return array_of_squares
```

In this example, the output size is always equal to the input size. This results in a function that is **Linear in both Space and Order Complexity.**

### Quadratic Order Function - O(n²)

```python
def multiply_arrays(array1, array2):
    result = []

    for number1 in array1:
        for number2 in array2:
            result.append(number1 * number2)
```

Here the complexity increases in a bigger scale. If both `array1` and `array2` have **2 items each, 4 iterations** in total are needed; If both ararys have **3 items each, 9 iterations** are needed.

This can result in poor performance for huge arrays.

### Logarithmic Order Function - O(log n)

```python
def binary_search(numbers, target):
    start = 0
    end = len(numbers) - 1

    while start <= end:
        mid = (start + end) // 2 # // = divided by without remainder

        if numbers[mid] == target:
            return mid
        elif target < numbers[mid]:
            end = mid - 1
        else:
            start = mid + 1
    
    return -1

numbers = [2, 3, 4, 10, 40]
target = 40

result = binary_search(numbers, target)
```

So the logarithmic complexity order function basically “cuts the problem in half”. For every iteration, it reduces the possibilities thus reducing the amount of necessary iterations to finish the algorithm.

It is a superior (consumes less time) complexity method if compared to linear functions.

### Exponencial & Factorial Order Function - O(2ⁿ) & O(n!)

These are the 2 most inefficient algorithm types. Surprisingly, even the most inefficient method has its usability, and might be unreplaceable at least by now.

In some cases, to find out a result, such as shortest walking distance between multiple cities can produce the shortest iteration numbers result using Factorial. Basically “brute-forcing” every possibility. 
</details>

<details>
<summary>Recursion</summary>

Recursion in programming logic refers to a function definition using itself in its own definition.

*Say what?* Exactly, **a function is calling itself in the implementation**. When the implementation is correctly implemented, it will not result in an endless loop.

Check this simple example:

```python
def countdown(n):
	print(n)
	countdown(n - 1) if n > 1 else print('END')

countdown(3)
# 3
# 2
# 1
# END
```

## Basic Rules

- **Base Case**: A rule that needs to be respected for the recursion not to be infinite is an ending condition. This is called the **base case**. In the example above is the `if n > 1 else print('END')` bit.
- **Should approach the Base Case in every iteration**
- **Should call itself in every iteration**

## Call Stack

*So how it works?* There is not a lot of magic involved. When a function calls itself, the processing unit will register that execution, store its variables and wait for the recursion to return something so the execution can finish.

This process creates what we call a *Call Stack:*

![https://assets.app.betrybe.com/computer-science/algorithms/recursion/images/stack-4db4bdc0a0380c92ebce3c402ac69311.gif](https://assets.app.betrybe.com/computer-science/algorithms/recursion/images/stack-4db4bdc0a0380c92ebce3c402ac69311.gif)

<aside>
<img src="https://code.visualstudio.com/assets/apple-touch-icon.png" alt="https://code.visualstudio.com/assets/apple-touch-icon.png" width="40px" /> To better visualize this we can use the VS Code extension **Python Preview or [Python Tutor](https://pythontutor.com/visualize.html#mode=edit)**

</aside>

# Iteractive x Recursive

One of the advantages of using recursiveness is probably **not** performance. When using iteractive over recursive, we are choosing not to create a call stack and that is good, but it might make our code less readable. Check the example of a factorial resolution:

```python
def iterative_factorial(n):
    fact = 1

    for i in range(1, n + 1):
        fact = fact * i

    return fact

def recursive_factorial(n):
    if n == 1:
        return 1
    else:
        return n * factorial(n - 1)

```

In this example, most will agree that the recursive resolution is more readable, and if we are not using huge numbers or lists, it might be the best option.

### Stack Overflow

Not only [the most known developer forum](https://stackoverflow.com/), stack overflow also refers to the Call Stack. Whenever there is no memory left to store recursive function calls, a stack overflow happens, it is an error.
</details>