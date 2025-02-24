/* 
! Understanding JavaScript Execution Context & Call Stack

? 1> JavaScript Execution Context
* Execution context refers to the environment in which JavaScript code is executed.

* When we create a JavaScript file and write code, the global execution context is created automatically.

* The `this` keyword points to the global execution context.

! Note: In a browser environment, `this` points to the `window` object.

* JavaScript has multiple execution contexts:
    *> Global Execution Context
    *> Function Execution Context
    *> Eval Execution Context (related to `eval()` function)

* Let's understand how JavaScript executes code step by step.

* JavaScript code runs in two main phases:
    *> **Memory Allocation Phase** (also called Creation Phase)
    ! In this phase, memory is allocated for variables and functions.

    *> **Execution Phase**
    ! In this phase, the actual execution of the code happens.

* Now, let's understand this with an example program:

```javascript
let val1 = 10;
let val2 = 5;
function addNums(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNums(val1, val2);
let result2 = addNums(10, 2);
```

### Step-by-Step Execution

! 1) **Global Execution Context Creation**
?   `this`    ->    `Global Execution Context`

! 2) **Memory Allocation Phase**
?   Memory is allocated but values are not assigned yet.

```text
val1        -> undefined
val2        -> undefined
addNums     -> Stores function definition (not executed yet)
result1     -> undefined
result2     -> undefined
```

! 3) **Execution Phase**
?   Now, values are assigned and functions are executed.

```text
val1        -> 10
val2        -> 5
addNums     -> Function remains stored in memory
result1     -> 15 (after function execution)
result2     -> 12 (after function execution)
```

### Function Execution Context
! **Whenever a function is called, a new Execution Context is created.**

For `result1 = addNums(val1, val2)`, a new execution context is created:

? **Memory Allocation Phase** (inside function execution context)
```text
num1  -> undefined
num2  -> undefined
total -> undefined
```

? **Execution Phase**
```text
num1  -> 10
num2  -> 5
total -> 15
```

? **Returning Value:**
The `total` value (15) is returned to its parent execution context (Global Execution Context).

### Function Execution for `result2 = addNums(10, 2)`

? **Memory Allocation Phase**
```text
num1  -> undefined
num2  -> undefined
total -> undefined
```

? **Execution Phase**
```text
num1  -> 10
num2  -> 2
total -> 12
```

? **Returning Value:**
The `total` value (12) is returned to the Global Execution Context.

! **Important Note:**
? Once a function execution context completes its execution, it is automatically removed from the call stack to free up memory.

### Summary
* **Global Execution Context** is created once when the JavaScript program starts.
* **Function Execution Context** is created each time a function is called.
* **Execution Contexts are removed** once their execution is complete.
* JavaScript follows a **Call Stack** mechanism to manage execution contexts.
*/
