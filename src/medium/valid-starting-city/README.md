# Valid Starting City

| Source | https://www.algoexpert.io/questions/valid-starting-city |
|---|---|
| Difficulty | Medium |
| Category | Greedy Algorithms |

Imagine you have a set of cities that are laid out in a circle, connected by a circular 
road that runs clockwise. Each city has a gas station that provides gallons of fuel, 
and each city is some distance away from the next city.

You have a car that can drive some number of miles per gallon of fuel, and your goal
is to pick a starting city such that you can fill up your car with that city's fuel,
drive to the next city, refill up your car with that city's fuel, drive to the next
city, and so on and so forth until you return back to the starting city with 0 or more
gallons of fuel left.

This city is called a valid starting city, and it's guaranteed that there will always
be exactly one valid starting city.

For the actual problem, you'll be given an array of distances such that city `i` is
distances[i] away from city `i + 1`. Since the cities are connected via a circular
road, the last city is connected to the first city. In other words, the last distance
in the distances array is equal to the distance from the last city to the first city.
You'll also be given an array of fuel available at each city, where fuel[i] is equal
to the fuel available at city `i`. The total amount of fuel available (from all cities
combined) is exactly enough to travel to all cities. Your fuel tank always starts out
empty, and you're given a positive integer value for the number of miles that your car
can travel per gallon of fuel (miles per gallon, or MPG). You can assume that you will
always be given at least two cities.

Write a function that returns the index of the valid starting city.

**Sample Input**
```ts
distances = [5, 25, 15, 10, 15]
fuel = [1, 2, 1, 0, 3]
mpg = 10
```

**Sample Output**
```ts
4
```

## Hints

<details>
<summary>Hint 1</summary>
...
</details>

<details>
<summary>Hint 2</summary>
...
</details>

<details>
<summary>Hint 3</summary>
...
</details>

<details>
<summary>Hint 4</summary>
...
</details>

<details>
<summary>Optimal Space &amp; Time Complexity</summary>
O(??) time | O(??) space - where ?? is ...
</details>
