# Sweet And Savory
> Source: https://www.algoexpert.io/questions/sweet-and-savory  
> Difficulty: Medium  
> Category: Arrays
---

You're hosting an event at a food festival and want to showcase the best
possible pairing of two dishes from the festival that complement each
other's flavor profile.

Each dish has a flavor profile represented by an integer. A negative integer
means a dish is sweet, while a positive integer means a dish is savory. The
absolute value of that integer represents the intensity of that flavor. For
example, a flavor profile of -3 is slightly sweet, one of -10 is extremely
sweet, one of 2 is mildly savory, and one of 8 is significantly savory.

You're given an array of these dishes and a target combined flavor profile.
Write a function that returns the best possible pairing of two dishes (the
pairing with a total flavor profile that's closest to the target one). Note
that this pairing must include one sweet and one savory dish. You're also
concerned about the dish being too savory, so your pairing should never be
more savory than the target flavor profile.

All dishes will have a positive or negative flavor profile; there are no
dishes with a 0 value. For simplicity, you can assume that there will be at
most one best solution. If there isn't a valid solution, your function
should return `[0, 0]`. The returned array should be sorted,
meaning the sweet dish should always come first.

**Sample Input #1**
```javascript
dishes = [-3, -5, 1, 7]
target = 8
```

**Sample Output #1**
```javascript
[-3, 7] // the combined profile of 4 is closest without going over
```

**Sample Input #2**
```javascript
dishes = [3, 5, 7, 2, 6, 8, 1]
target = 10
```

**Sample Output #2**
```javascript
[0, 0] // there are no sweet dishes
```

**Sample Input #3**
```javascript
dishes = [2, 5, -4, -7, 12, 100, -25]
target = -20
```

**Sample Output #3**
```javascript
[-25, 5] // this pairing gets the exact combined profile of -20
```
