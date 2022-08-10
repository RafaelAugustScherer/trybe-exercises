# ADT & DS

## ADT - Abstract Data Type

An abstract data type is the interface of a data type (ex: List). In JS they are known as prototypes.

## DS - Data Structure

A data structure is a concrete implementation of an ADT.

```python
l = list() # Creates an empty list '[]'
# list = ADT
# [] = DS
```

# Lists | Arrays

```python
import sys

new_list = []
mem_size = sys.getsizeof(new_list) # 56

new_list.extend(['tst', 'tst2'])
mem_size = sys.getsizeof(new_list) # 96
```

The code above tells us the list size in the computer memory. According to the Python docs, every time a new item is added to the list, its size increases by `1.125`.

### Matrix

Lists can also contain other lists if necessary. This can be interpreted as a matrix, where we have a set of rows and columns:

```python
new_matrix = [[1, 2, 3], [4, 5, 6]]
first_row = new_matrix[0]
second_row = mew_matrix[1]

for row in new_matrix:
		# do something
```

# Nodes & Chained Lists

Node is a concept that is applied at memory level in our script/program. **A node is composed by the memory address as a pointer and the data itself.**

This is especially useful when we cannot chain elements in the memory because the next space is already occupied, but we have another space further ahead in the memory that is not occupied.

**Numerous nodes form what we call a chain list, where the previous node points to the next node to indicate the next element of the list.**

# Stacks

Stacks are used in a lot of diverse scenarios. It consists in a pile of something, can be characters or entire functions with their respective context. To be a stack it needs to follow the **First In, Last Out**. It is only allowed to insert, remove or check the value at the top.

### Example

**In execution time, your main() method calls another method().**

Resolution: The compiler stores the **main()** method with the respective context in a stack at the memory (If this **method()** called another **method2()**, it would also have been sent to the top of this stack)

Then it executes the **method()** that has been called. When the **method()** is finished, it removes the **main()** method from the stack and continue the execution.

### Example (Code)

We can use stacks to resolve **Reverse Polish Notations** (math operations).
Example: `5 10 + 3 * = 45`

10 + 5 = 15; 15 * 3 = 45.

```python
from stack import Stack # example of Stack already implemented

def solve_expression(expr):
	stack = Stack()
	tokens_list = expr.split(' ')

	for token in tokens_list:
		if token == '+':
			result = stack.pop() + stack.pop() # .pop() retrieve and remove top value from stack
			stack.push(result)
		elif token == '*':
			result = stack.pop() * stack.pop()
			stack.push(result)
		else:
			stack.push(int(token))
	
	return stack.pop()

print(solve_expression('5 10 + 3 *')) # 45
```