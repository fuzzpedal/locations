# Answers

## Question 1

Output:
```
2
1
```

`setTimeout` is non-blocking so `console.log("2")` will fire whilst the timer is running.


## Question 2

Output:
```
10
9
8
7
6
5
4
3
2
1
0
```

If `d` is less than 10, the function calls itself recursively, increasing the number by 1 each time.
These calls are added to the stack. When d is no longer less than 10, we stop calling `foo` and return `d`. Each call that was put on the stack is popped off it and returns its value of `d` in a 'last in, first out' fashion.


## Question 3

In javascript, `0` is falsy. So if `d` is `0`, `5` will be returned, rather than `0`.


## Question 4

`foo` returns a function that has `a` baked in from the value passed to `foo`.
Calling `bar(2)` will return `1 + b`.


## Question 5

`double` accepts a value `a` and a callback `done`, if we just wanted to log the result, we could use it like this:

`double(10, (result) => console.log(result))`
